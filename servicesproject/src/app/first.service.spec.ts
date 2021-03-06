import { TestBed, inject } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { FirstService } from './first.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('FirstService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [FirstService]
    });
  });

  it('should be created', inject([FirstService], (service: FirstService) => {
    expect(service).toBeTruthy();
  }));

  it('should add 2 numbers', inject([FirstService], (service: FirstService) => {
    expect(service.add(2, 5)).toBe(7);
  }));
});
