import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todos-page',
  imports: [],
  templateUrl: './todos-page.component.html',
  styleUrl: './todos-page.component.css'
})
export class TodosPageComponent {
    todos = ['task1', 'task2', 'task3'];
    constructor(public router: Router) {
    }
    gotoDetail(index:number){
        console.log(index);
        this.router.navigate(['todos', index + 1]);
    }
}
