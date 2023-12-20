import { Component } from '@angular/core';
import { CatService } from '../../../services/cats.service';

@Component({
  selector: 'app-cats-page',
  templateUrl: './cats-page.component.html',
  styles: ``
})
export class CatsPageComponent {

  cats: any[] = [];
  catToDeleteId: number | null = null;
  displayDialog: boolean = false;

  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.loadCats();
  }

  loadCats(): void {
    this.catService.getCats().subscribe(
      (data) => {
        this.cats = data;
      },
      (error) => {
        console.error('Error fetching cats:', error);
      }
    );
  }

  showDialog(catId: number): void {
    this.catToDeleteId = catId;
    this.displayDialog = true;
  }

  hideDialog(): void {
    this.catToDeleteId = null;
    this.displayDialog = false;
  }

  onAccept(): void {
    if (this.catToDeleteId !== null) {
      this.catService.deleteCat(this.catToDeleteId).subscribe(
        () => {
          console.log('Cat deleted successfully.');
          // Recargar la lista de gatos después de eliminar uno
          this.loadCats();
          this.hideDialog(); // Oculta el cuadro de diálogo después de eliminar
        },
        (error) => {
          console.error('Error deleting cat:', error);
        }
      );
    }
  }

  onCancel(): void {
    this.hideDialog(); // Oculta el cuadro de diálogo sin eliminar el gato
  }
}
