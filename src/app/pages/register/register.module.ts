import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from "../../components/components.module";

const routes: Routes = [
  { path: 'register', component: RegisterComponent }
];

@NgModule({
    declarations: [RegisterComponent],
    exports: [RegisterComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        ComponentsModule
    ]
})
export class RegisterModule { }
