import { Component } from '@angular/core';

import { TickService } from './services/tick.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chart = []; // This will hold our chart info

  constructor(private _ticks: TickService) {}

  ngOnInit() {
    this._ticks.dailyForecast()
      .subscribe(res => {
        // let temp_max = res['list'].map(res => res.main.temp_max);
        // let temp_min = res['list'].map(res => res.main.temp_min);
        // let alldates = res['list'].map(res => res.dt)

        let price = res['ticks'].map(res => res.price);
        let time = res['ticks'].map(res => res.timestamp);
        let volume = res['ticks'].map(res => res.volume);

        // let weatherDates = []
        // alldates.forEach((res) => {
        //     let jsdate = new Date(res * 1000)
        //     weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
        // });

        let formattedTimes = [];
        time.forEach((res) => {
          let jstime = new Date(res * 1000);
          formattedTimes.push(jstime.toLocaleTimeString('en',
            {year: 'numeric', month: 'short', day: 'numeric'}
            ));
        });

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: formattedTimes,
            datasets: [
              {
                data: price,
                borderColor: "#3cba9f",
                fill: true
              },
              // {
              //   data: volume,
              //   borderColor: "#ffcc00",
              //   fill: false
              // },
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
              }],
            }
          }
        });
      });
  }
}
