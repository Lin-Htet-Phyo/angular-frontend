import {Component, model} from '@angular/core';

@Component({
  selector: 'app-custom-slider',
  imports: [],
  templateUrl: './custom-slider.component.html',
  styleUrl: './custom-slider.component.css'
})
export class CustomSliderComponent {
  value = model(0);

  increment() {
    this.value.update(oldValue => oldValue + 10)
  }
}
