import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',

  template:
  `<header class="header">

    <!-- logo -->
    <div class="logo">
      <img class="logo-item" src="../../../favicon.ico" alt="logo">
      <span class="youtube-client">&nbsp;Youtube-client</span>
    </div>

    <!--navigation-->
    <nav class ="navbar">
      <app-search></app-search>
    </nav>

  </header>`,

  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
