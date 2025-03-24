import {Component} from '@angular/core';

type Status = 'loading' | 'success' | 'fail';

@Component({
    selector: 'app-switch-demo',
    imports: [],
    templateUrl: './switch-demo.component.html',
    styleUrl: './switch-demo.component.css'
})
export class SwitchDemoComponent {
    status:Status = 'loading';

    changeTo(type:Status) {
        this.status = type;
    }
}
