import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private URL_API = 'https://bxmxjr47-80.use2.devtunnels.ms/check_login.php';
  // private URL_API = 'http://localhost:80/';

  /**
   * Se importa el servicio de angular para hacer peticiones al API
   */
  public http = inject(HttpClient);

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  /**
   * Esta función consulta al API sobre si los datos son correctos y retorna la respuesta
   *
   * @param {*} email
   * @param {*} password
   */
  postCheckLogin(email: any, password: any) {
    return this.http.post(`${this.URL_API}/check_login.php`, {
      email: email,
      password: password,
    });
  }

  postRegisterUser() {
    return '';
  }
}
