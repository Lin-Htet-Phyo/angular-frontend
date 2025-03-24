import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  constructor() {
      console.log('Instantiated HelloWorldService');
  }

  api() {
      return "Hello";
  }
}
