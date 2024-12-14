<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\Process\Process;
use App\Models\WhatsAppBot; // Modelo para manejar los bots

class WhatsAppController extends Controller
{
    public function createBot(Request $request)
    {
        // Validación del número de teléfono
        $validated = $request->validate([
            'phone_number' => 'required|string',
        ]);

        $phoneNumber = $validated['phone_number'];

        try {
            $containerName = 'bot_' . $phoneNumber;

            $command = [
                'docker', 'run', '-d',
                '--name', $containerName,
                '-e', "PHONE_NUMBER=$phoneNumber",
                '-v', storage_path('sessions') . ':/sessions',
                'whatsapp-bot-image',
            ];

            $process = new Process($command);
            $process->run();

            if (!$process->isSuccessful()) {
                throw new \Exception('Error al iniciar el contenedor Docker: ' . $process->getErrorOutput());
            }

            // Polling del código de emparejamiento (esperar el código)
            $pairingCode = $this->waitForPairingCode($phoneNumber);

            if ($pairingCode) {
                // Respuesta en caso de éxito
                return response()->json([
                    'success' => true,
                    'pairing_code' => $pairingCode,
                    'message' => 'Contenedor creado y código de emparejamiento generado con éxito.',
                ], 200);
            } else {
                throw new \Exception('No se pudo obtener el código de emparejamiento dentro del tiempo esperado.');
            }
        } catch (\Exception $e) {
            // Respuesta en caso de error
            return response()->json([
                'success' => false,
                'message' => 'Error al crear el bot.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    private function waitForPairingCode($phoneNumber, $timeout = 30)
    {
        $elapsed = 0;
        while ($elapsed < $timeout) {
            $bot = WhatsAppBot::where('phone_number', $phoneNumber)->first();

            if ($bot && $bot->pairing_code) {
                return $bot->pairing_code;
            }

            sleep(2);
            $elapsed += 2;
        }

        return null;
    }


    public function handleBotWebhook(Request $request)
    {
        try {
            $validated = $request->validate([
                'phone_number' => 'required|string',
                'pairing_code' => 'required|string',
            ]);

            $phoneNumber = $validated['phone_number'];
            $pairingCode = $validated['pairing_code'];

            $bot = WhatsAppBot::where('phone_number', $phoneNumber)->first();

            if ($bot) {
                $bot->update([
                    'pairing_code' => $pairingCode,
                    'status' => 'pending',
                    'updated_at' => now(),
                ]);
            } else {
                $bot = WhatsAppBot::create([
                    'phone_number' => $phoneNumber,
                    'pairing_code' => $pairingCode,
                    'status' => 'pending',
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
            return response()->json([
                'success' => true,
                'message' => 'Webhook recibido y código guardado',
                'data' => [
                    'phone_number' => $bot->phone_number,
                    'pairing_code' => $bot->pairing_code,
                    'status' => $bot->status,
                    'updated_at' => $bot->updated_at,
                ],
            ], 200);
        } catch (\Illuminate\Validation\ValidationException $e) {
            // Responder en caso de error de validación
            return response()->json([
                'success' => false,
                'message' => 'Datos inválidos',
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            // Responder en caso de error general
            return response()->json([
                'success' => false,
                'message' => 'Error al procesar el webhook',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

}
