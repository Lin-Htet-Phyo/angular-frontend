import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[appTimes]'
})
export class TimesDirective {

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef
    ) {

    }


    @Input() set appTimes(times: number) {
        for(let i = 0; i < times; i++) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);

        }
    }

}
