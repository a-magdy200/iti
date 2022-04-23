@extends('layouts.page-layout')

@section('main')
<div class="container p-5">
    <div class="mb-5 d-flex justify-content-center">
        <x-link-button type="success" to="{{route('posts.create')}}" icon="plus" text="Create New" />
    </div>
<table class="table text-white">
    <thead class="text-white-50">
    <tr>
        <th scope="col">Slug</th>
        <th scope="col">Title</th>
        <th scope="col">Description</th>
        <th scope="col">Created By</th>
        <th scope="col">Created At</th>
        <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody>
    @foreach($posts as $post)
        <tr>
            @if ($post->deleted_at)
                <td>{{$post->slug}}</td>
                <td colspan="4" class="text-center lead">Deleted post</td>
                <td>
                    <x-link-button to="{{route('posts.restore', ['post'=>$post])}}" icon="check" text="Restore" type="info" />
                </td>
            @else
            <td>{{$post->slug}}</td>
            <td>{{$post->title}}</td>
            <td>{{substr($post->description, 0, 50)}}</td>
            <td>{{$post->user->name}}</td>
            <td>{{\Illuminate\Support\Carbon::parse($post->created_at)->format("Y-m-d")}}</td>
            <td>
                <button data-post-id="{{$post->id}}" class="btn btn-warning show-post"><i data-post-id="{{$post->id}}" class="fa me-1 fa-eye"></i>Ajax</button>
                <x-link-button to="{{route('posts.show', ['post'=>$post])}}" icon="eye" text="" type="primary" />
                <x-link-button to="{{route('posts.edit', ['post'=>$post])}}" icon="edit" text="" type="success" />
                <x-link-button to="{{route('posts.delete', ['post'=>$post])}}" icon="times" text="" type="danger" />
            </td>
            @endif
        </tr>
    @endforeach
    </tbody>
</table>
    <div class="text-dark">
        {{$posts->links()}}
    </div>
</div>
@include('partials.view-post-modal')
@endsection
