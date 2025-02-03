import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-highlight-card',
  imports: [CommonModule],
  templateUrl: './highlight-card.component.html',
  styleUrl: './highlight-card.component.scss'
})
export class HighlightCardComponent {
  @Input() titulo: string;
  @Input() icone: string;
}
