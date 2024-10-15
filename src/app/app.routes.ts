import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Inicio Sesión',
    loadComponent: () =>
      import('./views/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'crear-usuario',
    title: 'Crear Usuario',
    loadComponent: () =>
      import('./views/register/register.component').then(
        (c) => c.RegisterComponent
      ),
  },
  {
    path: 'home',
    title: 'Inicio',
    loadComponent: () =>
      import('./views/home/home.component').then((c) => c.HomeComponent),
  },
];
