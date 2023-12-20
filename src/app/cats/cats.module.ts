import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatsRoutingModule } from './cats-routing.module';
import { CatPageComponent } from './pages/cat-page/cat-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MaterialModule } from '../material/material.module';
import { ButtonComponentComponent } from './pages/button-component/button-component.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PrimengModule } from '../primeng/primeng.module';

@NgModule({
  declarations: [
    CatPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    HomePageComponent,
    ButtonComponentComponent,
    MenuComponent,
  ],
  imports: [CommonModule, CatsRoutingModule, MaterialModule, PrimengModule],
})
export class CatsModule {}
