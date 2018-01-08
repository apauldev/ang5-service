import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { FirstService } from './first.service';
import { HttpService } from './http.service';


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FirstService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
