import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  NotificationComponent,
  NotificationData,
} from './components/notification/notification.component';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private notificationService = inject(NotificationService);

  public notification: WritableSignal<NotificationData> = signal({
    status: 'success',
    title: 'Cambio exitoso',
    description: '',
    show: false,
  });

  subscriptionNotification() {
    const showTime = 5000;
    this.notificationService.getToast().subscribe({
      next: (data: NotificationData) => {
        this.notification.set({ ...data });
        setTimeout(() => {
          this.notification.set({ ...this.notification(), show: false });
        }, showTime);
      },
    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
