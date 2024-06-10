import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Museu1Component } from './museu1.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [Museu1Component],
    exports: [Museu1Component],
    imports: [CommonModule, SharedModule, ComponentsModule]
})
export class Museu1Module { }
