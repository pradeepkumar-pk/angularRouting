import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  routes = [
    {linkname: 'Profile', url: 'profile'},
    {linkname: 'Contact Info', url: 'contacts'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
