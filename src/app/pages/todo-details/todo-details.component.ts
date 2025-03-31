import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todo-details',
  imports: [],
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.css'
})
export class TodoDetailsComponent {
    todoId!: string;
    constructor(public route: ActivatedRoute) {
    }
    ngOnInit() {
       this.todoId = this.route.snapshot.paramMap.get('id') || '';
    }
}
