import { Component, OnInit, Input } from '@angular/core';
import { SessionVariables } from '../shared/enum/session-variables';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() headerType: string;

  userData = JSON.parse(sessionStorage.getItem(SessionVariables.USER_SESSION));

  constructor() { }

  ngOnInit() {}

  isBannerHeader(): boolean {
    return this.headerType == "banner";
  }

  isLoggedHeader(): boolean{
    return this.headerType == "logged";
  }

  getUserName(): String {
    return `${this.userData.user.userName} ${this.userData.user.userSurname}`;
  }
}
