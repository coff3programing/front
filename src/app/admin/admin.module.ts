import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { AdministarPageComponent } from './pages/administar-page/administar-page.component';
import { CatsPageComponent } from './pages/cats-page/cats-page.component';
import { DonadoresPageComponent } from './pages/donadores-page/donadores-page.component';
import { ButtonComponentComponent } from './pages/button-component/button-component.component';
import { MaterialModule } from '../material/material.module';
import { PrimengModule } from '../primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './pages/menu/menu.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    AdministarPageComponent,
    CatsPageComponent,
    DonadoresPageComponent,
    ButtonComponentComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    PrimengModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
