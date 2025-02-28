import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

interface CardData {
  title: string;
  subtitle: string;
  icon: string;
  backTitle: string;
  description: string;
}

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  template: `
    <div class="container">
      <h1>Interactive Flip Cards</h1>
      <div class="card-container">
        <app-card 
          *ngFor="let card of cards"
          [title]="card.title"
          [subtitle]="card.subtitle"
          [icon]="card.icon"
          [backTitle]="card.backTitle"
          [description]="card.description">
        </app-card>
      </div>
    </div>
  `
})
export class CardListComponent {
  cards: CardData[] = [
    {
      title: 'Web Development',
      subtitle: 'Frontend & Backend',
      icon: 'code',
      backTitle: 'Web Development Skills',
      description: 'Expertise in HTML, CSS, JavaScript, Angular, React, Node.js, and various backend technologies. Building responsive and interactive web applications.'
    },
    {
      title: 'Mobile Apps',
      subtitle: 'iOS & Android',
      icon: 'smartphone',
      backTitle: 'Mobile Development',
      description: 'Creating native and cross-platform mobile applications using Flutter, React Native, and other modern frameworks for both iOS and Android platforms.'
    },
    {
      title: 'UI/UX Design',
      subtitle: 'Creative Solutions',
      icon: 'brush',
      backTitle: 'Design Philosophy',
      description: 'Crafting beautiful, intuitive user interfaces with a focus on user experience. Using tools like Figma, Adobe XD, and following modern design principles.'
    },
    {
      title: 'Cloud Services',
      subtitle: 'Scalable Infrastructure',
      icon: 'cloud',
      backTitle: 'Cloud Expertise',
      description: 'Implementing and managing cloud solutions using AWS, Google Cloud, and Azure. Setting up scalable and reliable infrastructure for applications.'
    }
  ];
}