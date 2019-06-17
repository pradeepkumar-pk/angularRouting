import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFooundComponent } from './page-not-foound/page-not-foound.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { SettingsContactsComponent } from './settings-contacts/settings-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    PageNotFooundComponent,
    SettingsProfileComponent,
    SettingsContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
