<?php

namespace App\View\Components;

use Illuminate\View\Component;

class LinkButton extends Component
{
    public $to;
    public $type;
    public $text;
    public $icon;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($to, $type, $text, $icon='')
    {
        //
        $this->to = $to;
        $this->text = $text;
        $this->type = $type;
        $this->icon = $icon;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.link-button')->with([
            'to'=>$this->to,
            'text'=>$this->text,
            'type'=>$this->type,
            'icon'=>$this->icon
        ]);
    }
}
