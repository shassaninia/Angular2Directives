import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[highlighter]'
})

export class Highlighter{

    constructor(private el:ElementRef) {
        el.nativeElement.style.background = 'yellow';
    }
}