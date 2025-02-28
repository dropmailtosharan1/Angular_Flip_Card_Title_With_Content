import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card-wrapper" [class.flipped]="isFlipped" (click)="toggleFlip()">
      <div class="card">
        <div class="card-front">
          <div class="card-content">
            <h2>{{ title }}</h2>
            <p class="subtitle">{{ subtitle }}</p>
            <div class="icon">
              <span class="material-icons">{{ icon }}</span>
            </div>
            <p class="hint">Click to flip</p>
          </div>
        </div>
        <div class="card-back">
          <div class="card-content">
            <h3>{{ backTitle }}</h3>
            <p>{{ description }}</p>
            <button class="back-btn" (click)="toggleFlip(); $event.stopPropagation()">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card-wrapper {
      perspective: 1000px;
      width: 300px;
      height: 350px;
      cursor: pointer;
      transition: transform 0.5s;
    }
    
    .card {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: transform 0.6s;
    }
    
    .card-wrapper.flipped .card {
      transform: rotateY(180deg);
    }
    
    .card-front, .card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    
    .card-front {
      background: linear-gradient(135deg, #6e8efb, #a777e3);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .card-back {
      background: white;
      color: #333;
      transform: rotateY(180deg);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .card-content {
      padding: 30px;
      text-align: center;
    }
    
    h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }
    
    h3 {
      font-size: 20px;
      margin-bottom: 15px;
      color: #6e8efb;
    }
    
    .subtitle {
      font-size: 16px;
      margin-bottom: 20px;
      opacity: 0.9;
    }
    
    .icon {
      font-size: 60px;
      margin: 20px 0;
    }
    
    .hint {
      font-size: 14px; 
      opacity: 0.7;
      margin-top: 20px;
    }
    
    p {
      line-height: 1.6;
    }
    
    .back-btn {
      margin-top: 20px;
      padding: 8px 20px;
      background-color: #6e8efb;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    
    .back-btn:hover {
      background-color: #5d7ce0;
    }
    
    @media (max-width: 768px) {
      .card-wrapper {
        width: 280px;
        height: 330px;
      }
    }
  `]
})
export class CardComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() icon: string = 'info';
  @Input() backTitle: string = '';
  @Input() description: string = '';
  
  isFlipped: boolean = false;
  
  toggleFlip(): void {
    this.isFlipped = !this.isFlipped;
  }
}