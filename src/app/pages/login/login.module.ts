import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from "../../components/components.module";

const routes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
    declarations: [LoginComponent],
    exports: [LoginComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        ComponentsModule
    ]
})
export class LoginModule { }
