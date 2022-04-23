<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Spatie\Tags\HasTags;

class Post extends Model
{
    use SoftDeletes;
    use HasFactory;
    use HasSlug;
    use HasTags;
    protected $fillable = ['title', 'description', 'created_by', 'image'];
    protected $appends = ['human_readable_date'];

    /**
     * Get the options for generating the slug.
     */
    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug');
    }
    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName(): string
    {
        return 'slug';
    }
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }
//    public function comments(): HasMany
//    {
//        return $this->hasMany(Comment::class)->withTrashed();
//    }
    public function comments() {
        return $this->morphMany(Comment::class, 'commentable')->withTrashed();
    }
    public function getHumanReadableDateAttribute(): string
    {
       return  Carbon::parse($this->created_at)->format('l jS \\of F Y h:i:s A');
    }
}
