@section('post-details')
    <div class="mb-5 d-flex align-items-center justify-content-center">
        <div class="px-2">
            <x-link-button to="{{route('posts.edit', ['post'=>$post])}}" icon="edit" text="Edit" type="success" />
        </div>
        <div class="px-2">
            <x-link-button to="{{route('posts.delete', ['post'=>$post])}}" icon="times" text="Delete" type="danger" />
        </div>
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
    <div class="card mb-5">
        <div class="card-header">
            Post creator info
        </div>
        <div class="card-body">
            <p class="lead"><strong>Name: </strong>{{$post->user->name}}</p>
            <p class="lead"><strong>Email: </strong>{{$post->user->email}}</p>
            <p class="lead"><strong>Created At: </strong>{{$post->human_readable_date}}</p>
{{--            <p class="lead"><strong>Created At: </strong>{{\Carbon\Carbon::parse($post->created_at)->format('l jS \\of F Y h:i:s A')}}</p>--}}
        </div>
    </div>
    <h2 class="mb-5 display-5 text-center text-white">Comments</h2>
{{--    @include('partials.comment-form')--}}
{{--    @include('partials.comments-list')--}}
    @livewire('comments', ['postId'=>$post->id, 'users'=>$users])
{{--    <livewire:comments postId="{{$post->id}}"/>--}}
@show
