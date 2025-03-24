import {
  Component,
  computed,
  effect,
  OnChanges,
  Signal,
  signal,
  SimpleChange,
  SimpleChanges,
  untracked
} from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnChanges {
  count = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() + 2);

  constructor() {
    effect(() => {
      console.log('effect run ', this.count(), ' double count ', untracked(this.doubleCount));
    });
  }

  inc() {
    console.log('counter increment');
    this.count.update(oldValue => oldValue + 1);
  }

  dec() {
    console.log('counter decrement');
    this.count.update(oldValue => oldValue - 1);
  }

  reset() {
    console.log('reset');
    this.count.set(0);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Component change");
  }

}
