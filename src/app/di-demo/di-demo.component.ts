import { Component } from '@angular/core';
import {HelloWorldService} from '../services/hello-world.service';
import {HiService} from '../services/hi.service';

@Component({
  selector: 'app-di-demo',
  imports: [],
  templateUrl: './di-demo.component.html',
  styleUrl: './di-demo.component.css'
})
export class DiDemoComponent {

    constructor(private helloWorldService: HelloWorldService) {
        console.log('DiDemo created');
    }
    callApi()
    {
        console.log(this.helloWorldService.api());
    }
}
