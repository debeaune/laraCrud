<?php

use App\Http\Controllers\api\clientController;
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

Route::get('/clients', [
    clientController::class, 'getClients'
]);


Route::delete('/clients/delete/{id}', [
    clientController::class, 'delete'
]);

Route::post('/clients', [
    clientController::class,'store'
]);

Route::put('/clients/update/{id}', [
   clientController::class, 'update' 
]);

Route::put('/clients/update2/{client}', [
    clientController::class, 'update2' 
]);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
