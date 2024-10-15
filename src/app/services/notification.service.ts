import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface NotificationData {
  status?: 'success' | 'warning' | 'danger';
  icon?: string;
  title?: string;
  description?: string;
  show?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationDataInitialValue: NotificationData = {
    status: 'success',
    title: 'Cambio exitoso',
    description: '',
    show: false,
  };
  private notification = new BehaviorSubject<NotificationData>({
    ...this.notificationDataInitialValue,
  });

  setToast(newToast: NotificationData): void {
    this.notification.next({
      ...this.notificationDataInitialValue,
      ...newToast,
    });
  }

  getToast(): Observable<NotificationData> {
    return this.notification.asObservable();
  }
}
