import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mfe2Component } from './mfe2.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: Mfe2Component,
  },
];

@NgModule({
  declarations: [Mfe2Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class Mfe2Module {}
