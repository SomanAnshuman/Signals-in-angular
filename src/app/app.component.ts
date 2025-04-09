import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  count = signal(10);
  x = 20;

  constructor() {
    effect(() => {
      //this 'effect' runs if a signal is included below and is updated anytime
      console.log('normal property = ', this.x);
      console.log('signal = ', this.count());
    });
  }
  updateValue() {
    this.x = this.x + 1;
    this.count.set(this.count() + 1);
  }
}
