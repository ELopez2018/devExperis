<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/candidates', 'CandidateController@index');
Route::post('/candidates', 'CandidateController@store');
Route::put('/candidates', 'CandidateController@update');
Route::get('/candidates/{id}', 'CandidateController@show');
Route::delete('/candidates/{id}', 'CandidateController@destroy');
Route::get('/{field}/{value}/candidates', 'CandidateController@search');
Route::get('/{from}/{to}/candidates/bydate', 'CandidateController@byDate');

