import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-donadores-page',
  templateUrl: './donadores-page.component.html',
  styles: []
})
export class DonadoresPageComponent implements OnInit {
  donadores: any[] = [];
  userDeleteId: number | null = null;
  displayDialog: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchDonadores();
  }

  fetchDonadores(): void {
    this.userService.getUser().subscribe(
      (usuarios) => {
        // Filtra solo los usuarios con rol "administrador"
        this.donadores = usuarios.filter((usuario) => usuario.rol === 'donante');
        console.log('Donadores:', this.donadores);
      },
      (error) => {
        console.error('Error fetching donadores:', error);
      }
    );
  }

  showDialog(userId: number): void {
    this.userDeleteId = userId;
    this.displayDialog = true;
  }

  hideDialog(): void {
    this.userDeleteId = null;
    this.displayDialog = false;
  }

  onAccept(): void {
    if (this.userDeleteId !== null) {
      this.userService.deleteUser(this.userDeleteId).subscribe(
        () => {
          console.log('Donador deleted successfully.');
          // Recargar la lista de gatos después de eliminar uno
          this.fetchDonadores();
          this.hideDialog(); // Oculta el cuadro de diálogo después de eliminar
        },
        (error) => {
          console.error('Error deleting donor:', error);
        }
      );
    }
  }

  onCancel(): void {
    this.hideDialog(); // Oculta el cuadro de diálogo sin eliminar el gato
  }
}
