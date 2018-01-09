import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { FirstService } from './first.service';
import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FirstService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
