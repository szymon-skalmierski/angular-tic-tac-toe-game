import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton outline status="info" *ngIf="!val">{{ val }}</button>
    <button nbButton hero status="success" *ngIf="val === 'X'">{{ val }}</button>
    <button nbButton hero status="danger" *ngIf="val === 'O'">{{ val }}</button>
  `,
  styles: [`
    button {
      width: 100%;
      height: 100%;
      font-size: 5rem !important;
    }
  `]
})
export class SquareComponent {
  @Input() val!: 'X' | 'O'

  constructor() {}


}
