import {Component} from '@angular/core';
import {HelloWorldService} from '../services/hello-world.service';
import {HiService} from '../services/hi.service';
import {ServiceThreeService} from '../services/service-three.service';

@Component({
    selector: 'app-di-demo2',
    imports: [],
    templateUrl: './di-demo2.component.html',
    styleUrl: './di-demo2.component.css'
})
export class DiDemo2Component {
    constructor(private helloWorldService: HelloWorldService,
                private hiService:HiService,
                private serviceThree: ServiceThreeService) {
        console.log('DiDemoTwo  created');
    }
    callApi()
    {
        console.log('HelloWorld ',this.helloWorldService.api());
        console.log('Hiservice ',this.hiService.api());
    }
}
