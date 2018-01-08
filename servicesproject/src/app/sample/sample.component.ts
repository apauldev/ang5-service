import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor(private firstService: FirstService) { }
  add1 = 3;
  add2 = 5;


  ngOnInit() {
    this.addNumbers(this.add1, this.add2);
  }

  addNumbers(num1: number, num2: number) {
    let sum;
    sum = this.firstService.add(num1, num2);
    console.log(sum);
  }
}
