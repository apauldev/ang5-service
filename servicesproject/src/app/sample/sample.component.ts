import { DOMAIN } from './../interface-rest';
import { HttpService } from './../http.service';
import { FirstService } from './../first.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {



  constructor(private firstService: FirstService, private httpService: HttpService) { }
  add1 = 3;
  add2 = 5;
  addSum: number;


  ngOnInit() {
    this.addNumbers(this.add1, this.add2);
    this.getData('/api/users/2');
  }

  addNumbers(num1: number, num2: number) {
    this.addSum = this.firstService.add(num1, num2);
    console.log(this.addSum);
  }

  getData(urlPath: string) {
    return this.httpService.httpGet(urlPath)
    .subscribe(
      data => {
        console.log(data);
      }
      );
    }

    joinData() {
      Observable.forkJoin(this.httpService.httpGet(''))
        .subscribe(
        data => {
          console.log(data);
        }
        );
    }
  }
