import {Component} from '@angular/core';
import {NgFor, NgIf} from '@angular/common';

@Component({
    selector: 'app-if-demo',
    imports: [
        NgIf,
        NgFor
    ],
    templateUrl: './if-demo.component.html',
    styleUrl: './if-demo.component.css'
})
export class IfDemoComponent {
    flag = true;
    items = ['apple', 'banana', 'orange'];
    color = 'yellow';
    toggle() {
        this.flag = !this.flag;
    }
}
