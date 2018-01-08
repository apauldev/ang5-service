import { Injectable } from '@angular/core';

@Injectable()
export class FirstService {

  constructor() { }

  add(num1: number, num2: number){
    return num1 + num2;
  }
}
