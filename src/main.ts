import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CardListComponent } from './app/card-list/card-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardListComponent],
  template: `<app-card-list></app-card-list>`
})
export class App {}

bootstrapApplication(App);