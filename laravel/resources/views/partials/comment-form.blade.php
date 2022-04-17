@section("comment-form")
    <form wire:submit.prevent="addComment" class="text-white mb-5" method="post">
{{--    <form class="text-white mb-5" action="{{route('comments.store', ['post'=>$post])}}" method="post">--}}
        @csrf
        <div class="py-4 mb-4">
            <h3>Add a new comment</h3>
        </div>
        <div class="d-flex align-items-center mb-4">
            <label for="comment" class="me-2 flex-grow-0 form-label">Comment</label>
            <textarea wire:model="comment" name="comment" id="comment" class="form-control" placeholder="It's very good"></textarea>
        </div>
        <div class="d-flex align-items-center mb-4">
            <label class="me-2 flex-grow-0 form-label" for="user_id">
                Commentary
            </label>
            <select wire:model="user_id" class="form-select" id="user_id" name="user_id">
                @foreach($users as $user)
                    <option value="{{$user->id}}">{{$user->name}}</option>
                @endforeach
            </select>
        </div>
        <div class="d-flex justify-content-center">
            <button class="btn btn-success d-block" type="submit"><i class="fa fa-comment me-1"></i> Comment</button>
        </div>
    </form>
@show
