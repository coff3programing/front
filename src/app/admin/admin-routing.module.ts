import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { AdministarPageComponent } from './pages/administar-page/administar-page.component';
import { DonadoresPageComponent } from './pages/donadores-page/donadores-page.component';
import { CatsPageComponent } from './pages/cats-page/cats-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'manage',
        component: AdministarPageComponent,
      },
      {
        path: 'donor',
        component: DonadoresPageComponent,
      },
      {
        path: 'cats',
        component: CatsPageComponent,
      },
      { path: '**', redirectTo: 'manage' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
