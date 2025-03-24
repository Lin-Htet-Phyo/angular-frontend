import {Component} from '@angular/core';
import {Todo} from '../../todo.model';

@Component({
    selector: 'app-render-loop',
    imports: [],
    templateUrl: './render-loop.component.html',
    styleUrl: './render-loop.component.css'
})
export class RenderLoopComponent {
    todos: Todo[] = [];

    load() {
        this.todos = [
            {
                id: 1,
                title: 'Title 1'
            },
            {
                id: 2,
                title: 'Title 2'
            }
        ];
    }
}
