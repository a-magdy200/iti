<?php

namespace App\Http\Livewire;

use App\Http\Controllers\CommentController;
use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Livewire\Component;

class Comments extends Component
{
    public int $postId;
    public $users;
    public $user_id = 1;
    public $comment;
    public $comments;
    public function render(): Factory|View|Application
    {
        $post = Post::find($this->postId);
        $this->comments = $post->comments;
        return view('livewire.comments')->with(['post'=>$post, 'comments' => $this->comments]);
    }
    public function addComment() {
//        $comment = new Comment([
//            'user_id' => $this->user_id,
//            'post_id' => $this->postId,
//            'comment' => $this->comment
//        ]);
        $post = Post::find($this->postId);
        $post->comments()->create([
            'comment'=>$this->comment,
            'user_id' => $this->user_id,
        ]);
//        $comment = new Comment([
//            'commentable_id' => $this->user_id,
//            'post_id' => $this->postId,
//            'comment' => $this->comment
//        ]);
//        $comment->save();
//        $this->comments[] = $comment;
        $this->render();
        $this->comment = '';
        $this->user_id='';
    }
    public function hide(Comment $comment) {
        $comment->delete();
        $this->render();
    }
    public function restore($commentId) {
        Comment::withTrashed()->find($commentId)->restore();
        $this->render();
    }
}
