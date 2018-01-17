import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  private req: any;
  tickList: [any];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/assets/json/ticks.json').subscribe(data => {
      console.log(data);
      this.tickList = data as [any];
    });
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }
}
