import {Component, ElementRef} from '@angular/core';

@Component({
    selector: 'app-dom-demo',
    imports: [],
    templateUrl: './dom-demo.component.html',
    styleUrl: './dom-demo.component.css'
})
export class DomDemoComponent {
    elementRef;
    constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
        console.log('Native DOM ', elementRef.nativeElement);
    }

    clickHandler(event: MouseEvent) {
        console.log('click ', event);
    }

    ngOnInit() {
        this.elementRef.nativeElement.addEventListener('click', this.clickHandler);
    }

    ngOnDestroy() {
        this.elementRef.nativeElement.removeEventListener('click', this.clickHandler);
    }
}
