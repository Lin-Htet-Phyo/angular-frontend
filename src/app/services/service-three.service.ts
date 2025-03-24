import { Injectable } from '@angular/core';
import {HiService} from './hi.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceThreeService {

  constructor(private hiService: HiService) {
    console.log('threeService created');
  }

  api():string {
      return 'service-three' + this.hiService.api();
  }
}
