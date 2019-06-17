import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFooundComponent } from './page-not-foound/page-not-foound.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { SettingsContactsComponent } from './settings-contacts/settings-contacts.component';

const routes: Routes = [
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      // {path: '', redirectTo: 'profile', pathMatch: 'full'},
      {path: 'profile', component: SettingsProfileComponent},
      {path: 'contacts', component: SettingsContactsComponent},
      // {path: '**', redirectTo: 'profile', pathMatch: 'full'}
    ]
  },
  {path: '**', component: PageNotFooundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
