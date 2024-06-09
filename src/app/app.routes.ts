import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { Museu1Component } from './pages/museu1/museu1.component';
import { Museu2Component } from './pages/museu2/museu2.component';
import { Museu3Component } from './pages/museu3/museu3.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'museu1', component: Museu1Component },
  { path: 'museu2', component: Museu2Component },
  { path: 'museu3', component: Museu3Component },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

