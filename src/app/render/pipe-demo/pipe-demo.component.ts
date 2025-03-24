import {Component} from '@angular/core';
import {CurrencyPipe, DatePipe, TitleCasePipe} from '@angular/common';
import {AllCapitalPipe} from '../all-capital.pipe';

@Component({
    selector: 'app-pipe-demo',
    imports: [
        CurrencyPipe,
        DatePipe,
        TitleCasePipe,
        AllCapitalPipe
    ],
    templateUrl: './pipe-demo.component.html',
    styleUrl: './pipe-demo.component.css'
})
export class PipeDemoComponent {
    now: Date;
    amount = 123.45;
    company = 'acme corporation';

    constructor() {
        this.now = new Date();
    }
}
