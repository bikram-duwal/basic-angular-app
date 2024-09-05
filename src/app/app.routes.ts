import { provideRouter, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { canDeactivateGuard } from './guards/can-deactivate.guard';
import { importProvidersFrom } from '@angular/core';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactComponent, canDeactivate: [canDeactivateGuard]},
  {path: 'about', component: AboutComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]}
];
