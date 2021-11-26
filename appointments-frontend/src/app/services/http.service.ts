import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  rootUrl = 'http://13.77.204.185:8080/';
  constructor(private httpService: HttpClient) { }

  getEndpoint(path: string, params?: any): Observable<any> {
    const urlParams = '?' + Object.keys(params).map((key) => {
      return key + '=' + params[key];
    })
    return this.httpService.get(this.rootUrl + path + urlParams);
  }
}
