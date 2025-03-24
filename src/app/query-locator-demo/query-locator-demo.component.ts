import {Component, ElementRef, viewChild} from '@angular/core';

@Component({
    selector: 'app-query-locator-demo',
    imports: [],
    templateUrl: './query-locator-demo.component.html',
    styleUrl: './query-locator-demo.component.css'
})
export class QueryLocatorDemoComponent {
    btnOK = viewChild<ElementRef<HTMLButtonElement>>('btnOK');

    cancelClick() {
        console.log('btnOK', this.btnOK());
    }
}
