import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HiService {

    constructor() {
        console.log('hiService instantiated');
    }

    api() {
        return "Hi";
    }
}
