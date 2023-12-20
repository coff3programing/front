import { Component } from '@angular/core';

@Component({
  selector: 'app-confirm-page',
  templateUrl: './confirm-page.component.html',
  styles: ``
})
export class ConfirmPageComponent {


  display: boolean = true; // Variable para controlar la visibilidad del modal

  showDialog() {
    this.display = false;
  }
  
}
