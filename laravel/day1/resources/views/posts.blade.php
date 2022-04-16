@include('./partials/header')
<div class="container p-5">
    <div class="mb-5 d-flex justify-content-center">
        <x-link-button type="success" to="{{route('posts.create')}}" icon="plus" text="Create New" />
    </div>
<table class="table text-white">
    <thead class="text-white-50">
    <tr>
        <th scope="col">ID</th>
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
        <td>{{$post->id}}</td>
        <td>{{$post->title}}</td>
        <td>{{substr($post->description, 0, 50)}}</td>
        <td>{{$post->user->name}}</td>
        <td>{{\Illuminate\Support\Carbon::parse($post->created_at)->format("Y-m-d")}}</td>
        <td>
            <x-link-button to="{{route('posts.show', ['post'=>$post])}}" icon="eye" text="View" type="primary" />
            <x-link-button to="{{route('posts.edit', ['post'=>$post])}}" icon="edit" text="Edit" type="success" />
            <x-link-button to="{{route('posts.delete', ['post'=>$post])}}" icon="times" text="Delete" type="danger" />
        </td>
    </tr>
@endforeach
    </tbody>
</table>
</div>
@include('./partials/footer')
