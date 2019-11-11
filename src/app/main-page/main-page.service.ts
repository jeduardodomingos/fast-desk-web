import { Injectable } from '@angular/core';
import { SessionVariables } from '../shared/enum/session-variables';
import { IfStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  constructor() { }

  chekLoggedOn(): boolean {
    let isLogged;

    if(sessionStorage.getItem('user-session-fastdesk')) {
      isLogged = JSON.parse(sessionStorage.getItem(SessionVariables.USER_SESSION)).isValidSession || false;
    }else {
      isLogged = false
    }

    return isLogged;
  }

  invalidateUserSession(): void {
    let session = sessionStorage.getItem(SessionVariables.USER_SESSION) == null ? null : JSON.parse(sessionStorage.getItem(SessionVariables.USER_SESSION));

    if(session) {
      session.isValidSession = false;
      sessionStorage.setItem(SessionVariables.USER_SESSION, JSON.stringify(session));
    }
  }
}
