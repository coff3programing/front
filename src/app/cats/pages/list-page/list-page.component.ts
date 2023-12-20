// list-page.component.ts
import { Component, OnInit } from '@angular/core';
import { CatService } from '../../../services/cats.service';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
})
export class ListPageComponent implements OnInit {

  displayDialog: boolean = false;
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

  openModal(){
    this.displayDialog=true
  }

  onCancel(){
    this.displayDialog=false
  }
  

}
