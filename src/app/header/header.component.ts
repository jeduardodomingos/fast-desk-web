import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() headerType: string;

  constructor() { }

  ngOnInit() {}

  isBannerHeader(): boolean {
    return this.headerType == "banner";
  }

  isLoggedHeader(): boolean{
    return this.headerType == "logged";
  }
}
