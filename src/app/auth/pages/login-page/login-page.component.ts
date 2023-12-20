import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { LoginModel } from '../../../models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``,
})
export class LoginPageComponent {

  credentials: LoginModel = { email: '', password: '' };
  loginError: boolean = false;
  loginSuccess: boolean = false;

  constructor(private authService: UserService, private router: Router) {
    this.credentials = { email: '', password: '' };
  }

  onSubmit(): void {
    console.log('Intentando iniciar sesión con credenciales:', this.credentials);

    this.authService.login(this.credentials.email, this.credentials.password).subscribe(
      (response) => {
        console.log('Inicio de sesión con éxito', response);
        this.authService.setToken(response.token);

        // Verificar el rol del usuario y redirigir en consecuencia
        const userRole = response.rol;

        switch (userRole) {
          case 'administrador':
            this.router.navigate(['/admin']);
            break;
          case 'donante':
            this.router.navigate(['donor/home']);
            break;
          case 'adoptante':
            this.router.navigate(['/cats/home']);
            break;
          default:
            console.error('Rol no reconocido');
            // Puedes redirigir a una vista predeterminada o mostrar un mensaje de error
            break;
        }
      },
      (error) => {
        console.error('Error en el inicio de sesión', error);
        if (error.error && error.error.message) {
          console.error('Mensaje de error:', error.error.message);
        }
        this.loginError = true;
        setTimeout(() => {
          this.loginError = false;
        }, 2000);
      }
    );
  }

  onForgotPassword(): void {
    this.authService.sendResetEmail(this.credentials.email).subscribe(
      () => {
        console.log('Correo electrónico de restablecimiento enviado con éxito');
      },
      (error) => {
        console.error('Error al enviar el correo electrónico de restablecimiento', error);
      }
    );
  }

  displayDialog: boolean = false;

  showDialog() {
    this.displayDialog = true;
  }

  hideDialog() {
    this.displayDialog = false;
  }
}
