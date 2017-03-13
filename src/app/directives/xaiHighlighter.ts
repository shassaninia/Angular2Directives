import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[xaiHighlight]'
})

export class XaiHighlighter{

    /*
    @Input allows us to pass data into the directive.
    Set an alias for XaiHighlighter to highlightcolor
    Inside the directive the property is known as highlightColor. Outside the directive, where you bind to it, it's known as xaiHighlight.
    */
    @Input('xaiHighlight') highlightcolor: string;

    @Input() defaultColor:string;

    constructor(private el:ElementRef) {  }

    /*
    The @HostListener decorator lets you subscribe to events of the DOM element that hosts an attribute directive.
    Then add two eventhandlers that respond when the mouse enters or leaves, each adorned by the HostListener decorator.
    */
    @HostListener('mouseenter') onmouseenter(){
        this.highlight(this.highlightcolor || this.defaultColor || 'red');
    }

    @HostListener('mouseleave') onmouseleave(){
        this.highlight(null);
    }

    private highlight(color:string)
    {
        this.el.nativeElement.style.background = color;
    }
}