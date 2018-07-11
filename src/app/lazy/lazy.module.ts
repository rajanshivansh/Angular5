import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';
import { RouterModule, Router } from '@angular/router';
import { LAZY_ROUTE } from './lazy.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LAZY_ROUTE)
  ],
  declarations: [LazyComponent]
})
export class LazyModule { }
