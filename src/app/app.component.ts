import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  username = signal('Anil');

  count = signal(0);
  displayHeading = false;

  constructor() {
    effect(() => {
      console.log(this.username());

      if (this.count() % 3 === 0) {
        this.displayHeading = true;
        setTimeout(() => {
          this.displayHeading = false;
        }, 2000);
      } else {
        this.displayHeading = false;
      }
    });
  }

  toggleValue() {
    this.count.set(this.count() + 1);
  }
}
