import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatService } from '../../../services/cats.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styles: [],
})
export class AddPageComponent {
  catForm: FormGroup;

  constructor(private fb: FormBuilder, private catService: CatService, private router: Router) {
    this.catForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      gender: ['', [Validators.required, Validators.pattern(/^(macho|hembra)$/)]],
      size: ['', [Validators.required, Validators.pattern(/^(pequeño|mediano|grande)$/)]],
      breed: [''],
      age: [null, [Validators.pattern(/^\d+$/), Validators.min(0)]],
      personality: [''],
      info: [''],
      moniker: ['']
    });
  }

  onSubmit(): void {
    if (this.catForm.valid) {
      this.catService.saveCat(this.catForm.value).subscribe(
        (response) => {
          console.log('Gato guardado exitosamente:', response);
          // Realiza cualquier acción adicional después de guardar el gato
          this.router.navigate(['/donor/cat-grams']);
        },
        (error) => {
          console.error('Error al guardar el gato:', error);
        }
      );
    } else {
      // El formulario no es válido, realiza acciones según sea necesario
    }
  }

  
  get Name() {
    return this.catForm.controls['name'];
  }

  get Gender() {
    return this.catForm.controls['gender'];
  }

  get Size() {
    return this.catForm.controls['size'];
  }

  get Breed() {
    return this.catForm.controls['breed'];
  }
 
  get Age() {
    return this.catForm.controls['age'];
  }
  get Personality() {
    return this.catForm.controls['personality'];
  }
  get Info() {
    return this.catForm.controls['info'];
  }
  get Moniker() {
    return this.catForm.controls['moniker'];
  }
}
