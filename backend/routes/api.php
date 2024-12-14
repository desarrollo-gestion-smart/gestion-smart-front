<?php

use App\Http\Controllers\PaymentController;
use App\Http\Controllers\UserPhoneController;
use App\Http\Controllers\WalletController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\WhatsAppController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('v1')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login'])->middleware('throttle:5,1');

    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/user', [AuthController::class, 'user']);
        Route::post('/logout', [AuthController::class, 'logout']);

        Route::post('/link-wallet', [WalletController::class, 'linkWallet']);
        Route::post('/phone', [UserPhoneController::class, 'store']);
    });
    Route::middleware(['auth:sanctum', 'custom.token'])->group(function () {
        Route::post('/create-bot', [WhatsAppController::class, 'createBot']);
        Route::post('/bot/webhook', [WhatsAppController::class, 'handleBotWebhook']);
        Route::post('/create-payment-link', [PaymentController::class, 'createPaymentLink']);

    });

});


