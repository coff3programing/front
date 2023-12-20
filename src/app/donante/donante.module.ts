import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonanteRoutingModule } from './donante-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ViewPageComponent } from './pages/view-page/view-page.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { MaterialModule } from '../material/material.module';
import { PrimengModule } from '../primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './pages/menu/menu.component';
import { ErrorDirective } from '../directives/form-error2.directive';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    LayoutPageComponent,
    HomePageComponent,
    ViewPageComponent,
    AddPageComponent,
    ProfilePageComponent,
    MenuComponent,
    ErrorDirective
  ],
  imports: [
    CommonModule,
    DonanteRoutingModule,
    MaterialModule,
    PrimengModule,
    ReactiveFormsModule,
    MatTabsModule
    
  ],
})
export class DonanteModule {}
