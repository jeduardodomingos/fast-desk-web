import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  constructor() { }

  chekLoggedOn(): boolean {
    let isLogged;

    if(sessionStorage.getItem('user-session-fastdesk')) {
      isLogged = JSON.parse(sessionStorage.getItem('user-session-fastdesk')).isValidSession || false;
    }else {
      isLogged = false
    }

    return isLogged;
  }
}
