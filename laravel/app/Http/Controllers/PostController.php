<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Models\User;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Illuminate\Routing\Redirector;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Application|Factory|View|Response
     */
    public function index(): View|Factory|Response|Application
    {
        //
        $posts = Post::withTrashed()->paginate(10);
        return view("posts")->with(['posts' => $posts]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Application|Factory|View
     */
    public function create(): Factory|View|Application
    {
        //
        $users = User::all();
        return view('create-post')->with(['users'=>$users]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorePostRequest  $request
     * @return Application|RedirectResponse|Redirector
     */
    public function store(StorePostRequest $request)
    {
        //
        $post = new Post($request->all());
        $post->save();
        return to_route('posts.index');
    }

    /**
     * Display the specified resource.
     *
     * @param Post $post
     * @return Application|Factory|View
     */
    public function show(Post $post): View|Factory|Application
    {
        //
        $users = User::all();
        return view('view-post')->with(['post'=>$post, 'users'=>$users]);
    }

    /**
     * Display the specified resource.
     *
     * @param Post $post
     * @return JsonResponse
     */
    public function showAjax(int $postId): JsonResponse
    {
        //
        $post = Post::with('user')->find($postId);
        return response()->json(['data'=>$post]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Post $post
     * @return Application|Factory|View
     */
    public function edit(Post $post)
    {
        //
        $users = User::all();
        return view('edit-post')->with(['post'=>$post, 'users'=>$users]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePostRequest  $request
     * @param Post $post
     * @return Application|RedirectResponse|Redirector
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        $post->update($request->all());
        return to_route("posts.show", ['post' => $post]);
    }

    public function delete(Post $post) {
        return view('delete-post')->with(['post'=>$post]);
    }
    /**
     * Soft deletes the specified resource
     *
     * @param Post $post
     * @return Application|RedirectResponse|Redirector
     */
    public function destroy(Post $post)
    {
        //
        $post->delete();
        return to_route('posts.index');
    }
    /**
     * Soft deletes the specified resource
     *
     * @param Post $post
     * @return Application|RedirectResponse|Redirector
     */
    public function restore(int $post): Redirector|RedirectResponse|Application
    {
        //
        Post::withTrashed()->find($post)->restore();
        return to_route('posts.index');
    }

}
