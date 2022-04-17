<div>
@section('comments')
    @foreach($comments as $comment)
        @if($comment->deleted_at)
        <div class="card mb-5">
            <div class="card-header d-flex align-items-center justify-content-between">
                <p class="lead">Comment hidden</p>
                <button class="btn btn-info" wire:click="restore({{$comment->id}})"><i class="fa fa-check me-1"></i><span>Restore</span></button>
                {{--                <x-link-button type="info" text="Restore" icon="check" to="{{route('comments.restore', ['comment'=> $comment, 'post'=>$post])}}" />--}}
            </div>
        </div>
        @else
        <div class="card mb-5">
            <div class="card-header d-flex align-items-center justify-content-between">
                <h3 class="m-0">{{$comment->user->name}}</h3>
{{--                <x-link-button type="danger" text="Hide" icon="remove" to="{{route('comments.delete', ['comment'=> $comment, 'post'=>$post])}}" />--}}
                    <button class="btn btn-danger" wire:click="hide({{$comment->id}})"><i class="fa fa-remove me-1"></i><span>Hide</span></button>
            </div>
            <div class="card-body">
                <p class="lead">{{$comment->comment}}</p>
                <p class="lead"><strong>Commented At: </strong>{{\Carbon\Carbon::parse($comment->created_at)->format('l jS \\of F Y h:i:s A')}}</p>
            </div>
        </div>
        @endif
    @endforeach
@show
</div>
