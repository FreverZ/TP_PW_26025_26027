import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { SharedModule } from './pages/shared/shared.module';
import { LandingPageModule } from './pages/landing-page/landing-page.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { Museu1Module } from './pages/museu1/museu1.module';
import { Museu2Module } from './pages/museu2/museu2.module';
import { Museu3Module } from './pages/museu3/museu3.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LandingPageModule,
    Museu1Module,
    Museu2Module,
    Museu3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
