import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Museu3Component } from './museu3.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [Museu3Component],
    exports: [Museu3Component],
    imports: [CommonModule, SharedModule, ComponentsModule]
})
export class Museu3Module { }
