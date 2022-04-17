<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use SoftDeletes;
    use HasFactory;
    protected $fillable = ['title', 'description', 'created_by'];
    protected $appends = ['human_readable_date'];
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }
    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class)->withTrashed();
    }
    public function getHumanReadableDateAttribute(): string
    {
       return  Carbon::parse($this->created_at)->format('l jS \\of F Y h:i:s A');
    }
}
