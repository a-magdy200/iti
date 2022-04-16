@include('./partials/header')
<div class="container p-5">
    <form method="post" action="{{route("posts.destroy", ['post'=>$post])}}">
        <p class="lead text-center text-white">Are you sure you want to delete this post?</p>
        <div class="d-flex justify-content-center align-items-center">
            <div class="px-2">
                <button class="btn btn-danger" type="submit"><i class="fa fa-times me-1"></i> Confirm</button>
            </div>
            <div class="px-2">
                <x-link-button to="{{route('posts.index')}}" text="Cancel" type="light" />
            </div>
        </div>
        @method('DELETE')
        @csrf
    </form>
</div>
@include('./partials/footer')
