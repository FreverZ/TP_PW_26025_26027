import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';

const routes = [
  {
    path: '',
    loadChildren: () => import('./pages/landing-page/landing-page.module').then(m => m.LandingPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'museu1',
    loadChildren: () => import('./pages/museu1/museu1.module').then(m => m.Museu1Module),
  },
  {
    path: 'museu2',
    loadChildren: () => import('./pages/museu2/museu2.module').then(m => m.Museu2Module),
  },
  {
    path: 'museu3',
    loadChildren: () => import('./pages/museu3/museu3.module').then(m => m.Museu3Module),
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule),
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
