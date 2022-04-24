<?php

    use App\Http\Controllers\Auth\LoginController;
    use App\Http\Controllers\PostController;
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

Route::post('/login', [LoginController::class, 'apiLogin']);

Route::middleware('auth:sanctum')->group(function() {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::get('/posts/{post}', [PostController::class, 'apiShow']);
    Route::post('/posts', [PostController::class, 'apiStore']);
    Route::get('/posts', [PostController::class, 'apiIndex']);
});
