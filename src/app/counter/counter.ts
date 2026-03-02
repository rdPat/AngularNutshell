import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-counter',
  imports: [RouterLink],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count: number = 0;

  handleCount(ops: string) {
    if (ops === 'incr') this.count++;
    if (ops === 'decr') this.count = this.count > 0 ? this.count - 1 : 0;
    if (ops === 'rst') this.count = 0;
  }
}
