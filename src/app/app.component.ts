import {
  Component,
  computed,
  effect,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // x = 10;
  // y = 20;
  // z = this.x + this.y;

  x = signal(10);
  y = signal(20);
  z = computed(() => this.x() + this.y());

  showValue() {
    // console.log(this.z); //30
    // this.x = 100;
    // console.log(this.x); //100
    // console.log(this.z); //still 30
    // //Because z is calculated only once during class instantiation and doesn't update when x or y change.

    console.log(this.z()); //30
    this.x.set(100);
    console.log(this.x()); //100
    console.log(this.z()); //120
    //computed signal updated coz their dependency was a signal(x,y)
  }

  updateX() {
    this.x.set(200);
  }
}
