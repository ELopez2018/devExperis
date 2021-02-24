<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class candidate extends Model
{
    //
    protected $fillable = [
        'name', 'email', 'phone','surname','date_interview', 'rating'
    ];
}
