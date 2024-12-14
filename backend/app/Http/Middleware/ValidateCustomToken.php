<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ValidateCustomToken
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next)
    {
        $customToken = env('CUSTOM_API_TOKEN');
        $headerToken = $request->header('X-Token');

        if (!$headerToken || $headerToken !== $customToken) {
            return response()->json([
                'success' => false,
                'message' => 'Acceso no autorizado. Token inválido.',
            ], 403);
        }

        return $next($request);
    }
}
