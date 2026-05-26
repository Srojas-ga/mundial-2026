import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="cardClasses" (click)="onClick.emit()">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardComponent {
  @Input() hover = false;
  @Input() className = '';
  @Output() onClick = new EventEmitter<void>();

  get cardClasses(): string {
    const base = 'bg-white rounded-xl shadow-md border border-gray-100 transition-all duration-300';
    const hoverClass = this.hover ? 'hover:shadow-xl hover:scale-[1.02] cursor-pointer' : '';
    return `${base} ${hoverClass} ${this.className}`;
  }
}
