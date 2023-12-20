import { Component } from '@angular/core';
import { CatService } from '../../../services/cats.service';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styles: ``
})
export class ViewPageComponent {

  cats: any[] = [];

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
}
