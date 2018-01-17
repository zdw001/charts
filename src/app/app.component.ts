import { Component } from '@angular/core';
import { TicksService } from './services/ticks.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private ticks: TicksService) {}

}
