<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\UserToken;

class WalletController extends Controller
{
    public function linkWallet(Request $request)
    {
        $user = Auth::user();
        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $request->validate([
            'platform' => 'required|string', // Ejemplo: "mercadopago"
            'token' => 'required|string',    // Token para vincular la billetera
        ]);

        try {
            UserToken::updateOrCreate(
                [
                    'user_id' => $user->id,
                    'platform' => $request->input('platform'),
                ],
                [
                    'token' => $request->input('token'),
                ]
            );

            return response()->json(['message' => 'Token guardado con éxito'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error al guardar el token', 'error' => $e->getMessage()], 500);
        }
    }
}
