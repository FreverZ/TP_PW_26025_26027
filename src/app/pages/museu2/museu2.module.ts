import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Museu2Component } from './museu2.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [Museu2Component],
    exports: [Museu2Component],
    imports: [CommonModule, SharedModule, ComponentsModule]
})
export class Museu2Module { }
