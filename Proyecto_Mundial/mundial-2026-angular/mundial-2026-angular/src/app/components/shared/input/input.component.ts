import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  template: `
    <div class="w-full">
      <label *ngIf="label" class="block text-sm mb-2 text-gray-700">
        {{ label }} <span *ngIf="required" class="text-red-500">*</span>
      </label>
      <div class="relative">
        <div *ngIf="icon" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 flex items-center">
          <span [innerHTML]="icon"></span>
        </div>
        <input
          [type]="type"
          [placeholder]="placeholder || ''"
          [required]="required"
          [class]="inputClasses"
          [(ngModel)]="value"
          (ngModelChange)="onValueChange($event)"
          (blur)="onTouched()"
        />
      </div>
      <p *ngIf="error" class="text-sm text-red-500 mt-1">{{ error }}</p>
    </div>
  `,
})
export class InputComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() type = 'text';
  @Input() placeholder?: string;
  @Input() required = false;
  @Input() error?: string;
  @Input() icon?: string;

  value = '';
  onChange: (val: string) => void = () => {};
  onTouched: () => void = () => {};

  get inputClasses(): string {
    const base = `w-full px-4 py-3 border-2 rounded-lg outline-none transition-colors`;
    const padLeft = this.icon ? 'pl-10' : '';
    const border = this.error
      ? 'border-red-500'
      : 'border-gray-200 focus:border-[#00B140]';
    return `${base} ${padLeft} ${border}`;
  }

  onValueChange(val: string) {
    this.value = val;
    this.onChange(val);
  }

  writeValue(val: string): void { this.value = val ?? ''; }
  registerOnChange(fn: (val: string) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}
