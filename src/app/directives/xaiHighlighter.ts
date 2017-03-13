import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[xaiHighlighter]'
})

export class XaiHighlighter{

    /*
    @Input allows us to pass data into the directive.
    */
    @Input() highlightColor: string;

    constructor(private el:ElementRef) {  }

    /*
    The @HostListener decorator lets you subscribe to events of the DOM element that hosts an attribute directive.
    Then add two eventhandlers that respond when the mouse enters or leaves, each adorned by the HostListener decorator.
    */
    @HostListener('mouseenter') onmouseenter(){
        this.highlight(this.highlightColor);
    }

    @HostListener('mouseleave') onmouseleave(){
        this.highlight(null);
    }

    private highlight(color:string)
    {
        this.el.nativeElement.style.background = color;
    }
}