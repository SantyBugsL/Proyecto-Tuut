<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\PreguntController;
use App\Http\Controllers\API\WritingController;
use App\Http\Controllers\API\ReadingController;
use App\Http\Controllers\API\GrammarController;
use App\Http\Controllers\API\VocabularyController;
use App\Http\Controllers\API\ListeningController;
use App\Http\Controllers\API\SpeakingController;

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

// Seccion Writing preguntas

Route::prefix('preguntas_writing')->group(function () {
    Route::get('/',[ WritingController::class, 'getAll']);
    Route::post('/',[ WritingController::class, 'create']);
    Route::delete('/{id}',[ WritingController::class, 'delete']);
    Route::get('/{id}',[ WritingController::class, 'get']);
    Route::put('/{id}',[ WritingController::class, 'update']);
});

// Seccion Reading preguntas

Route::prefix('preguntas_reading')->group(function () {
    Route::get('/',[ ReadingController::class, 'getAll']);
    Route::post('/',[ ReadingController::class, 'create']);
    Route::delete('/{id}',[ ReadingController::class, 'delete']);
    Route::get('/{id}',[ ReadingController::class, 'get']);
    Route::put('/{id}',[ ReadingController::class, 'update']);
});

// Seccion Grammar preguntas

Route::prefix('preguntas_grammar')->group(function () {
    Route::get('/',[ GrammarController::class, 'getAll']);
    Route::post('/',[ GrammarController::class, 'create']);
    Route::delete('/{id}',[ GrammarController::class, 'delete']);
    Route::get('/{id}',[ GrammarController::class, 'get']);
    Route::put('/{id}',[ GrammarController::class, 'update']);
});

// Seccion Vocabulary preguntas

Route::prefix('preguntas_vocabulary')->group(function () {
    Route::get('/',[ VocabularyController::class, 'getAll']);
    Route::post('/',[ VocabularyController::class, 'create']);
    Route::delete('/{id}',[ VocabularyController::class, 'delete']);
    Route::get('/{id}',[ VocabularyController::class, 'get']);
    Route::put('/{id}',[ VocabularyController::class, 'update']);
});

// Seccion Listening preguntas

Route::prefix('preguntas_listening')->group(function () {
    Route::get('/',[ ListeningController::class, 'getAll']);
    Route::post('/',[ ListeningController::class, 'create']);
    Route::delete('/{id}',[ ListeningController::class, 'delete']);
    Route::get('/{id}',[ ListeningController::class, 'get']);
    Route::put('/{id}',[ ListeningController::class, 'update']);
});

// Seccion Speaking preguntas

Route::prefix('preguntas_speaking')->group(function () {
    Route::get('/',[ SpeakingController::class, 'getAll']);
    Route::post('/',[ SpeakingController::class, 'create']);
    Route::delete('/{id}',[ SpeakingController::class, 'delete']);
    Route::get('/{id}',[ SpeakingController::class, 'get']);
    Route::put('/{id}',[ SpeakingController::class, 'update']);
});


