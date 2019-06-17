import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularRouting';
  //homeRoute = 'home';
  //settingsRoute = 'settings';

  routes = [
    {linkname: 'Home', url: 'home'},
    {linkname: 'Settings', url: 'settings'}
  ];
}
