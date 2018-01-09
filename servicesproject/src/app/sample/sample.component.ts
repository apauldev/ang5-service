import { FirstService } from './../first.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {



  constructor(private firstService: FirstService) { }
  add1 = 3;
  add2 = 5;
  addSum: number;


  ngOnInit() {
    this.addNumbers(this.add1, this.add2);
  }

  addNumbers(num1: number, num2: number) {
    this.addSum = this.firstService.add(num1, num2);
    console.log(this.addSum);
  }
  }
