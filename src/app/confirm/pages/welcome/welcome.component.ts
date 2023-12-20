import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent {
  display: boolean = true; // Variable para controlar la visibilidad del modal

  showDialog() {
    this.display = false;
  }

}
