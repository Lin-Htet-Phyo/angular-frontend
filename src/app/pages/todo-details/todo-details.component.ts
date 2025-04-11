import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Todo} from '../../todo.model';
import {Observable} from 'rxjs';
import {TodoService} from '../../services/todo.service';
import {AsyncPipe} from '@angular/common';

@Component({
    selector: 'app-todo-details',
    imports: [
        AsyncPipe
    ],
    templateUrl: './todo-details.component.html',
    styleUrl: './todo-details.component.css'
})
export class TodoDetailsComponent {
    todoId!: string;
    todo$!: Observable<Todo>;

    constructor(public route: ActivatedRoute, private todoService: TodoService) {
    }

    ngOnInit() {
        this.todoId = this.route.snapshot.paramMap.get('id') || '';
        this.todo$ = this.todoService.getTodo(this.todoId);
    }
}
