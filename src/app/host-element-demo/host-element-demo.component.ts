import {Component, HostBinding, HostListener, signal} from '@angular/core';

@Component({
    selector: 'app-host-element-demo',
    imports: [],
    templateUrl: './host-element-demo.component.html',
    styleUrl: './host-element-demo.component.css',
    host: {
        'role': 'slider',
        // '[att.aria-valuenow]': 'value',
        '[class.active]': 'isActive()',
        '[tabindex]': 'disabled ? -1 : 0',
        '(keydown)': 'updateValue($event)',
    }
})
export class HostElementDemoComponent {
    @HostBinding('attr.aria-valuenow')
    value: number = 0;
    disabled: boolean = true;
    isActive = signal(false);

    updateValue(event: KeyboardEvent) {
        console.log('keydown event', event);
    }

    @HostListener('mouseclick', ['$event'])
    mouseclick(event: MouseEvent) {
        console.log('mouseclick', event);
    }
}
