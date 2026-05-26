import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [type]="type"
      [disabled]="disabled"
      [class]="buttonClasses"
      (click)="onClick.emit()"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() fullWidth = false;
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' = 'button';
  @Output() onClick = new EventEmitter<void>();

  get buttonClasses(): string {
    const base = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200';
    const variants: Record<ButtonVariant, string> = {
      primary:   'bg-[#00B140] text-white hover:bg-[#009633] active:bg-[#007a29]',
      secondary: 'bg-[#003087] text-white hover:bg-[#002366] active:bg-[#001b4d]',
      outline:   'border-2 border-[#00B140] text-[#00B140] hover:bg-[#00B140] hover:text-white',
      ghost:     'text-[#003087] hover:bg-gray-100',
    };
    const sizes: Record<ButtonSize, string> = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2.5 text-base',
      lg: 'px-6 py-3.5 text-lg',
    };
    const width = this.fullWidth ? 'w-full' : '';
    const disabledCss = this.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
    return `${base} ${variants[this.variant]} ${sizes[this.size]} ${width} ${disabledCss}`;
  }
}
