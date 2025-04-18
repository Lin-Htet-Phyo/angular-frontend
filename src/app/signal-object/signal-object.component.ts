import {Component, signal} from '@angular/core';
import {Todo} from '../todo.model';

@Component({
  selector: 'app-signal-object',
  imports: [],
  templateUrl: './signal-object.component.html',
  styleUrl: './signal-object.component.css'
})
export class SignalObjectComponent {
  profile = signal<Todo>({
    id: 1,
    title: "Task 1"
  });

  updateTodo() {
    this.profile.set({
      ...this.profile(),
      title: "Updated task"
    });
  }
}
