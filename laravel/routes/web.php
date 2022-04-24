<?php

    use App\Http\Controllers\Auth\LoginController;
    use App\Http\Controllers\CommentController;
    use App\Http\Controllers\PostController;
    use Illuminate\Support\Facades\Auth;
    use Illuminate\Support\Facades\Route;
    use Laravel\Socialite\Facades\Socialite;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return to_route("posts.index");
});

Route::get('/auth/redirect', function () {
    return Socialite::driver('github')->redirect();
});

Route::get('/auth/callback', [LoginController::class, 'githubLogin']);
//Route::get('/auth/callback', function () {
//    $user = Socialite::driver('github')->user();
//    dd($user);
//    // $user->token
//});

Route::middleware('auth')->group(function() {
    Route::resource("/posts", PostController::class);
    Route::get('/posts/{post}/delete', [PostController::class, 'delete'])->name('posts.delete');
    Route::get('/posts/{post}/restore', [PostController::class, 'restore'])->name('posts.restore');
    Route::post('/posts/{post}/comments', [CommentController::class, 'store'])->name('comments.store');
    Route::get('/posts/{post}/comments/{comment}/delete', [CommentController::class, 'delete'])->name('comments.delete');
    Route::get('/posts/{post}/comments/{comment}/restore', [CommentController::class, 'restore'])->name('comments.restore');
    Route::get('/posts/api/{post}', [PostController::class, 'showAjax'])->name("posts.api.show");
    Route::get('/home', function () {
        return to_route("posts.index");
    })->name('home');
});

Auth::routes();
