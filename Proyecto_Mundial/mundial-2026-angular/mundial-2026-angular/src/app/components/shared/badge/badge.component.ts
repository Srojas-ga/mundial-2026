import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeVariant = 'success' | 'warning' | 'error' | 'info' | 'neutral';
export type BadgeSize = 'sm' | 'md';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [class]="badgeClasses">
      <ng-content></ng-content>
    </span>
  `,
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'neutral';
  @Input() size: BadgeSize = 'md';

  get badgeClasses(): string {
    const variants: Record<BadgeVariant, string> = {
      success: 'bg-green-100 text-green-700',
      warning: 'bg-yellow-100 text-yellow-700',
      error:   'bg-red-100 text-red-700',
      info:    'bg-blue-100 text-blue-700',
      neutral: 'bg-gray-100 text-gray-700',
    };
    const sizes: Record<BadgeSize, string> = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-3 py-1 text-sm',
    };
    return `inline-flex items-center rounded-full font-medium ${variants[this.variant]} ${sizes[this.size]}`;
  }
}
