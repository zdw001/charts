import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { TicksService } from './services/ticks.service';

import { AppComponent } from './app.component';
import { ChartComponent } from './components/chart/chart.component';
import { TickDetailComponent } from './components/tick-detail/tick-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    TickDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TicksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
