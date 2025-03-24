import {Component, computed, input, Output, output} from '@angular/core';
import {Todo} from '../todo.model';
import EventEmitter from 'node:events';

@Component({
    selector: 'app-todo-item',
    imports: [],
    templateUrl: './todo-item.component.html',
    styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
    todo = input.required<Todo>();
    todoDeleted = output<Todo>();
    // @Output()
    // todoDeleted = new EventEmitter<Todo>();
    deleteTodo() {
        console.log('Delete todo ', this.todo());
        this.todoDeleted.emit(this.todo())
    }

    ngOnDestroy() {
        console.log('Run ngOnDestroy');
    }
}
