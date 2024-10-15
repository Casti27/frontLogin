import { Component, Input } from '@angular/core';

/** Interface para definir los parametros que recibe este componente */
export interface NotificationData {
  status?: 'success' | 'warning' | 'danger';
  icon?: string;
  title?: string;
  description?: string;
  show?: boolean;
}

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent {
  @Input() notification!: NotificationData;
}
