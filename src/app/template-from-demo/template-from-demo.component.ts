import { Component } from '@angular/core';
import {Actor} from '../actor.model';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-template-from-demo',
    imports: [
        ReactiveFormsModule,
        FormsModule
    ],
  templateUrl: './template-from-demo.component.html',
  styleUrl: './template-from-demo.component.css'
})
export class TemplateFromDemoComponent {
    skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];
    model = new Actor(18, 'Tom Cruise', this.skills[3], 'CW Productions');
    submitted = false;

    onSubmit()
    {
        console.log('Formsubmit ',this.model);
        this.submitted = true;
    }
}
