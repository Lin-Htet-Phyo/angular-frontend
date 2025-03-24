import { Component } from '@angular/core';
import {TimesDirective} from '../times.directive';

@Component({
  selector: 'app-times-demo',
    imports: [
        TimesDirective
    ],
  templateUrl: './times-demo.component.html',
  styleUrl: './times-demo.component.css'
})
export class TimesDemoComponent {

}
