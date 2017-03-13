import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[xaiHighlighter]'
})

export class XaiHighlighter{

    constructor(private el:ElementRef) {
        el.nativeElement.style.background = 'yellow';
    }
}