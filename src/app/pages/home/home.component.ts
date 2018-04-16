import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() {
    window.scrollTo(0, 0);
  }

  ngOnInit() {
  }

}
