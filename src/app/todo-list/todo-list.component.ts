import {Component} from '@angular/core';
import {Todo} from '../todo.model';
import {TodoItemComponent} from '../todo-item/todo-item.component';

@Component({
    selector: 'app-todo-list',
    imports: [TodoItemComponent],
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
    todos: Todo[] = [];

    singleTodo: Todo = {
        id: 3,
        title: "Task 3"
    }

    constructor() {
        this.todos = [
            {
                id: 1,
                title: "Task 1",
            },
            {
                id: 2,
                title: "Task 2",
            }
        ];
    }

    deleteTodo(todo: Todo) {
        console.log('Parent delete todo ', todo);
        this.todos = this.todos.filter(item => todo.id != item.id);
    }
}
