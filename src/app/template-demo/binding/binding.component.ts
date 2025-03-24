import {Component, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-binding',
    imports: [],
    templateUrl: './binding.component.html',
    styleUrl: './binding.component.css'
})
export class BindingComponent {
    formValid = false;
    useTheme = false;
    userAnother = false;
    classGroup = {
        theme: this.useTheme,
        another: this.userAnother,
    }
    fontSize = 12;

    constructor() {
        console.log('Class group ', this.classGroup);
    }

    ngOnChanges() {
        console.log('ngOnChanges class group ', this.classGroup);
    }

    validateForm() {
        this.formValid = !this.formValid;
    }

    setTheme() {
        this.useTheme = !this.useTheme;
        this.classGroup = {
            'theme': this.useTheme,
            'another': this.userAnother,
        };
    }

    toggle() {
        this.userAnother = !this.userAnother;
        this.classGroup = {
            'theme': this.useTheme,
            'another': this.userAnother,
        };
    }

    inc() {
        this.fontSize+=3;
        console.log('font size is ', this.fontSize);
    }

    updateFields(event: KeyboardEvent) {
        console.log(`the user press: ${event.key}`);
    }
}
