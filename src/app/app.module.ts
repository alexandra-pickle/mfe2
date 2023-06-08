import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Mfe2Component } from './mfe2/mfe2.component';
import { Mfe2Module } from './mfe2/mfe2.module';

export const routes: Routes = [
  {
    path: 'mfe2',
    component: Mfe2Component,
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Mfe2Module, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
