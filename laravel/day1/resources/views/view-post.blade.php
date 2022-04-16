@include('./partials/header')
<div class="container text-dark p-5">
    <div class="mb-5 d-flex align-items-center justify-content-center">
        <div class="px-2">
            <x-link-button to="{{route('posts.edit', ['post'=>$post])}}" icon="edit" text="Edit" type="success" />
        </div>
        <div class="px-2">
            <x-link-button to="{{route('posts.delete', ['post'=>$post])}}" icon="times" text="Delete" type="danger" />        </div>
    </div>
    <div class="card mb-5">
        <div class="card-header">
            Post info
        </div>
        <div class="card-body">
            <p class="lead"><strong>Title: </strong>{{$post->title}}</p>
            <p class="lead"><strong>Description: </strong>{{$post->description}}</p>
        </div>
    </div>
    <div class="card">
        <div class="card-header">
            Post creator info
        </div>
        <div class="card-body">
            <p class="lead"><strong>Name: </strong>{{$post->user->name}}</p>
            <p class="lead"><strong>Email: </strong>{{$post->user->email}}</p>
            <p class="lead"><strong>Created At: </strong>{{\Carbon\Carbon::parse($post->created_at)->toFormattedDateString()}}</p>
        </div>
    </div>
</div>
@include('./partials/footer')
