import { Component } from '@angular/core';
import {AllCapitalPipe} from '../all-capital.pipe';

@Component({
  selector: 'app-template-variable-demo',
    imports: [
        AllCapitalPipe
    ],
  templateUrl: './template-variable-demo.component.html',
  styleUrl: './template-variable-demo.component.css'
})
export class TemplateVariableDemoComponent {
    get complexExp()
    {
        return 1+2*3/5;
    }
}
