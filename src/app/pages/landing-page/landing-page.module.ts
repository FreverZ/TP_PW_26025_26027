import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [
        LandingPageComponent
    ],
    exports: [
        LandingPageComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ComponentsModule
    ]
})
export class LandingPageModule { }
