import {Component} from '@angular/core';

@Component({
    selector: 'app-example-child',
    imports: [],
    templateUrl: './example-child.component.html',
    styleUrl: './example-child.component.css'
})
export class ExampleChildComponent {
    api() {
        console.log('Api of example component');
    }
}
