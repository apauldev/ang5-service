import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { RequestOptionsArgs, RequestOptions } from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/retry';
@Injectable()
export class HttpService {

  constructor(private router: Router, private http: HttpClient) { }

  httpGet(url: string, options?: any): Observable<any> {
    return this.http.get(url, options)
      .retry(1)
      // .catch(err => {
      //   return this.dealWithErrors(err);
      // })
      .map(data => {
        return data;
      });
  }

  private dealWithErrors(error: any) {
    // console.log(error);
    return Observable.of({
      logError: error
    });
  }
}
