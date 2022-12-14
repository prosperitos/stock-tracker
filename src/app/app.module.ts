import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SummaryComponent } from './pages/stock/summary/summary.component';
import { TrackComponent } from './pages/stock/track/track.component';
import {AddSignPipe} from './pipe/sign.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    TrackComponent,
    AddSignPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
