<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\PreguntController;

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

/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

*/

Route::prefix('preguntas')->group(function () {
    Route::get('/',[ PreguntController::class, 'getAll']);
    Route::post('/',[ PreguntController::class, 'create']);
    Route::delete('/{id}',[ PreguntController::class, 'delete']);
    Route::get('/{id}',[ PreguntController::class, 'get']);
    Route::put('/{id}',[ PreguntController::class, 'update']);
});

