import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: ``
})
export class HomePageComponent {

  display: boolean = true; // Variable para controlar la visibilidad del modal

  showDialog() {
    this.display = false;
  }
}
