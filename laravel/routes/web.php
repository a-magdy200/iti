<?php

    use App\Http\Controllers\CommentController;
    use App\Http\Controllers\PostController;
    use Illuminate\Support\Facades\Route;

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
    return view('welcome');
});

Route::resource("/posts", PostController::class);
Route::get('/posts/{post}/delete', [PostController::class, 'delete'])->name('posts.delete');
Route::get('/posts/{post}/restore', [PostController::class, 'restore'])->name('posts.restore');
//Route::livewire('/posts/{post}/comments', 'comments');
//Route::livewire('/posts/{post}/comments/{comment}/delete', [CommentController::class, 'delete'])->name('comments.delete');
//Route::livewire('/posts/{post}/comments/{comment}/restore', [CommentController::class, 'restore'])->name('comments.restore');
Route::post('/posts/{post}/comments', [CommentController::class, 'store'])->name('comments.store');
Route::get('/posts/{post}/comments/{comment}/delete', [CommentController::class, 'delete'])->name('comments.delete');
Route::get('/posts/{post}/comments/{comment}/restore', [CommentController::class, 'restore'])->name('comments.restore');
