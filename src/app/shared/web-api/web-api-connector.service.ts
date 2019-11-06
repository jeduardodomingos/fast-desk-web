import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class WebApiConnectorService {

  private sourceServiceUrl: string = "http://127.0.0.1/api/";

  constructor(private httpClient: Http) { }

  getUrl(endpoint: string): any {
    return this.httpClient.get(`${this.sourceServiceUrl}${endpoint}`);
  }

  postUrl(endpoint: string, object: any): any {
    return this.httpClient.post(`${this.sourceServiceUrl}${endpoint}`, object);
  }

  putUrl(endpoint: string, object: any): any {
    return this.httpClient.put(`${this.sourceServiceUrl}${endpoint}`, object);
  }

}
