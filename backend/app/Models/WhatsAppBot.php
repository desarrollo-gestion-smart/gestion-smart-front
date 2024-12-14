<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WhatsAppBot extends Model
{
    use HasFactory;
    protected $table = 'whatsapp_bots';

    protected $fillable = [
        'phone_number',
        'pairing_code',
        'status',
    ];
}
