import { Component } from '@angular/core';
import { TicksService } from './services/ticks.service';
import { Chart } from 'chart.js';
import {falseIfMissing} from 'protractor/built/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private ticks: TicksService) {}

  chart: [any];

  ngOnInit() {
    this.ticks.ticks()
      .subscribe(res => {

        let price = res['ticks'].map(res => res.price);
        let time = res['ticks'].map(res => res.timestamp);
        let volume = res['ticks'].map(res => res.volume);

        let formattedTimes = []
        time.forEach((res) => {
          let jstime = new Date(res * 1000);
          formattedTimes.push(jstime.toLocaleTimeString('en',
            {year: 'numeric', month: 'short', day: 'numeric'}
            ));
        });

        this.chart = new Chart('canvas', {
          type: 'scatter',
          data: {
            labels: formattedTimes,
            datasets: [
              {
                data: price,
                borderColor: '#3cba9f',
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        });
      });

  }

}
