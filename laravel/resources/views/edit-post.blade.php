@extends('layouts.page-layout')

@section('main')
<div class="container p-5">
    <form action="{{route('posts.update', ['post'=>$post])}}" class="text-white" method="post">
        <div class="py-4 mb-4">
            <h3>Update post</h3>
        </div>
        <div class="d-flex flex-wrap align-items-center mb-4">
            <label for="title" class="me-2 flex-grow-0 form-label">Title</label>
            <input type="text" value="{{old('title') ? old('title') : $post->title}}" id="title" class="form-control {{$errors->has('title') ? 'is-invalid' : (old('title') ? 'is-valid' : '') }}" name="title" placeholder="Something New"/>
            @error('title')
            <div class="invalid-feedback w-100">
                {{$message}}
            </div>
            @enderror
        </div>
        <div class="d-flex align-items-center mb-4">
            <label for="description" class="me-2 flex-grow-0 form-label">Description</label>
            <textarea name="description" id="description" class="form-control" placeholder="A lot has happened">{{$post->description}}</textarea>
        </div>
        <div class="d-flex align-items-center mb-4">
            <label class="me-2 flex-grow-0 form-label" for="created_by">
                Post Creator
            </label>
            <select class="form-select" id="created_by" name="created_by">
                @foreach($users as $user)
                    <option @if ($user->id === $post->user->id) selected @endif value="{{$user->id}}">{{$user->name}}</option>
                @endforeach
            </select>
        </div>
        <div class="d-flex flex-wrap align-items-center mb-4">
            <label for="tags" class="me-2 flex-grow-0 form-label">Tags</label>
            <input type="text" required id="tags" class="form-control {{$errors->has('tags') ? 'is-invalid' : (old('tags') ? 'is-valid' : '') }}" name="tags" placeholder="#tag1,#tag2"/>
            @error('tags')
            <div class="invalid-feedback w-100">
                {{$message}}
            </div>
            @enderror
        </div>
        <div class="d-flex justify-content-center">
            <button class="btn btn-success d-block" type="submit"><i class="fa fa-edit me-1"></i> Update Post</button>
        </div>
        @method("PUT")
        @csrf
    </form>
</div>
@endsection
