import { Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector : '[apphighlight]'
})
export class HighlightDirective{

    @Input('myColor') myColor : string;
    @Input('defaultColor') defaultColor :  string;
    @HostBinding('style.backgroundColor') bgColor : string;

    @HostListener('mouseleave') mouseleave(){
        // this.elementRef.nativeElement.style.backgroundColor = "transparent";
        this.bgColor = this.defaultColor;
    }
    @HostListener('mouseenter') mouseenter(){
        //alert('Mouse entered!');
        // this.elementRef.nativeElement.style.backgroundColor = "aqua";
        this.bgColor = this.myColor;
    }
    constructor(private elementRef : ElementRef){
        //console.log(this.elementRef.nativeElement);
        //this.elementRef.nativeElement.style.backgroundColor = "aqua";
    }
}