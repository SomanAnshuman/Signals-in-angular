import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // data = signal<number | string>(10); //data type of value
  data: WritableSignal<number | string> = signal(10); //data type of signal
  //writable signal

  count: Signal<number> = computed(() => 200);
  //computed signal (read-only) -> cannot be changed once declared

  updateSignal(){
    this.data.set("Hello");
    // this.data.update((val) => val+1)
  }
}
