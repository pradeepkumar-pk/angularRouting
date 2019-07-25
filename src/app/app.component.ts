import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularRouting';
  // homeRoute = 'home';
  // settingsRoute = 'settings';

  routes = [
    {linkname: 'Dashboard', url: 'home'},
    {linkname: 'Settings', url: 'settings'}
  ];
}
