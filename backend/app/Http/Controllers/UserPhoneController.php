<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\UserPhone;

class UserPhoneController extends Controller
{
    public function store(Request $request)
    {
        $user = Auth::user();
        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $request->validate([
            'phone_number' => 'required|string|max:15', // Valida que el número de teléfono sea válido
        ]);

        try {
            UserPhone::updateOrCreate(
                ['user_id' => $user->id],
                ['phone_number' => $request->input('phone_number')]
            );

            return response()->json(['message' => 'Número de teléfono guardado con éxito'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error al guardar el número de teléfono', 'error' => $e->getMessage()], 500);
        }
    }

    public function show()
    {
        $user = Auth::user();
        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $phone = $user->phone;

        return response()->json(['phone_number' => $phone ? $phone->phone_number : null], 200);
    }
}
