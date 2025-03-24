import {afterNextRender, afterRender, Component, HostListener, input, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-life-cycle-demo',
    imports: [],
    templateUrl: './life-cycle-demo.component.html',
    styleUrl: './life-cycle-demo.component.css'
})
export class LifeCycleDemoComponent {
    @HostListener('mouseclick', ['$event'])
    mouseclick(event: MouseEvent) {
        console.log('mouseclick', event);
    }

    data = input<number>();

    constructor() {
        console.log('LifeCycle DemoComponent created');
        afterNextRender(() => console.log('afterNextRender'));
        afterRender(() => console.log('afterRender'));
    }

    ngOnInit() {
        console.log('Run ngOnInit');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('Run ngOnChanges', changes);
    }

    ngDoCheck() {
        console.log('Run ngDoCheck');
    }

    ngAfterContentInit() {
        console.log('Run ngAfterContentInit');
    }

    ngAfterContentChecked() {
        console.log('Run ngAfterContentChecked');
    }

}
