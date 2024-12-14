<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\UserToken; // Modelo para acceder al token de Mercado Pago
use MercadoPago\MercadoPagoConfig;
use MercadoPago\Client\Preference\PreferenceClient;
use MercadoPago\Client\Common\RequestOptions;
use MercadoPago\Exceptions\MPApiException;

class PaymentController extends Controller
{
    public function createPaymentLink(Request $request)
    {
        // Validar los datos enviados
        $validator = \Validator::make($request->all(), [
            'phone_number' => 'required|digits_between:1,15',
            'unit_price' => 'required|numeric|min:0.01',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Error en los datos enviados',
                'errors' => $validator->errors(),
            ], 422); // Código 422: Unprocessable Entity
        }

        try {
            // Verificar que el usuario esté autenticado
            $user = Auth::user();
            if (!$user) {
                return response()->json(['message' => 'No autenticado'], 401); // Código 401: Unauthorized
            }

            // Buscar el token de Mercado Pago asociado al usuario
            $userToken = UserToken::where('user_id', $user->id)
                ->where('platform', 'mercadopago')
                ->first();

            if (!$userToken) {
                return response()->json([
                    'message' => 'No se encontró un token de Mercado Pago para este usuario'
                ], 404);
            }

            MercadoPagoConfig::setAccessToken($userToken->token);
            MercadoPagoConfig::setRuntimeEnviroment(MercadoPagoConfig::LOCAL);

            $items = [
                [
                    "title" => "Pago por servicio", // Hardcodeado
                    "quantity" => 1, // Hardcodeado
                    "unit_price" => $request->input('unit_price'), // Monto del post
                    "currency_id" => "ARS", // Moneda
                ]
            ];

            $payer = [
                "name" => "Test",
                "surname" => "User",
                "email" => "test_user_123456@testuser.com",
            ];

            $backUrls = [
                'success' => 'https://tu-sitio.com/success',
                'failure' => 'https://tu-sitio.com/failure',
                'pending' => 'https://tu-sitio.com/pending',
            ];

            $requestBody = [
                "items" => $items,
                "payer" => $payer,
                "back_urls" => $backUrls,
                "auto_return" => "approved",
                "external_reference" => uniqid(),
            ];

            $requestOptions = new RequestOptions();
            $requestOptions->setCustomHeaders([
                'x-test-scope: sandbox',
            ]);

            // Crear la preferencia de pago
            $preferenceClient = new PreferenceClient();
            $preference = $preferenceClient->create($requestBody, $requestOptions);

            return response()->json([
                'message' => 'Link de pago generado exitosamente',
                'init_point' => $preference->init_point, // URL del link de pago
            ], 200);

        } catch (MPApiException $e) {
            return response()->json([
                'message' => 'Error al generar el link de pago',
                'error' => $e->getApiResponse()->getContent(),
            ], 500);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Ocurrió un error inesperado',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
