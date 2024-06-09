import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // Certifique-se de que este arquivo existe
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    console.log('Username: ', this.username);
    console.log('Password: ', this.password);
    // Implementar lógica de login aqui
  }
}
