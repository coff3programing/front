import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',

})
export class EmailComponent implements OnInit {
  newPassword: string = '';
  token: string | null = null;
  resetError: boolean = false;
  resetSuccess: boolean = false;

  constructor(private authService: UserService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.token = params['token'];
    });
  }

  onResetPassword(): void {
    if (this.token && this.newPassword) {
      this.authService.resetPassword(this.token, this.newPassword).subscribe(
        () => {
          console.log('Contraseña restablecida con éxito');
          // Puedes redirigir a la página de inicio de sesión u otra página según tu aplicación
          // y mostrar un mensaje de éxito
          this.resetSuccess = true
          // Opcional: Redirigir a la página de inicio de sesión después de un tiempo
          this.router.navigate(['/auth/login/']);
         
        },
        (error) => {
          console.error('Error al restablecer la contraseña', error);
          // Maneja el error, muestra un mensaje al usuario, etc.
          this.resetError = true;
        }
      );
    }
  }
}import { UserService } from '../../../services/user.service';

