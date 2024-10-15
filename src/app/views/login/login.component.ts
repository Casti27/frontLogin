import { NotificationService } from './../../services/notification.service';
import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  /** Importamos el servicio de API Service */
  private apiService = inject(ApiService);
  /** Importamos el servicio de angular para crear formularios dinamicos */
  private formBuilder = inject(FormBuilder);
  /** Importamos el servicio para redirigir  */
  private router = inject(Router);
  /** importamos el servicio para poder mostrar notificaciones */
  private notificationService = inject(NotificationService);

  /** Creamos la estructra basica del formulario */
  public loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  /**
   * Esta función es la que se ejecuta cuando se le da continuar
   */
  submit() {
    debugger;
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      debugger;
      this.apiService.postCheckLogin(email, password).subscribe({
        next: () => {
          /** Crear aqui una notificación o llevar al home */
          this.notificationService.setNotification({
            status: 'success',
            title: `Ingreso Exitoso`,
            description: '',
            show: true,
          });
          this.router.navigate(['/home']);
        },
        error: () => {
          /** Si falla, mostrar un mensaje de error */
          this.notificationService.setNotification({
            status: 'danger',
            title: `Ingreso Fallido`,
            description: 'Reintente nuevamente por favor',
            show: true,
          });
        },
      });
    }
  }
}
