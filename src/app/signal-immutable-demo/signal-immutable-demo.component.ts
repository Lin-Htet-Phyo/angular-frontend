import {Component, computed, effect, Signal, signal} from '@angular/core';

@Component({
  selector: 'app-signal-immutable-demo',
  imports: [],
  templateUrl: './signal-immutable-demo.component.html',
  styleUrl: './signal-immutable-demo.component.css'
})
export class SignalImmutableDemoComponent {
  list = signal([10, 20, 30]);
  listSize: Signal<number> = computed(() => this.list().length);

  constructor() {
    effect(() => {
      console.log('Item length ', this.list().length)
    });
  }

  addItem() {
    this.list.set([... this.list(), 100]);
  }
}
