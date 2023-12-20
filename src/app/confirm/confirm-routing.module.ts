import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ConfirmPageComponent } from './pages/confirm-page/confirm-page.component';
import { DeniePageComponent } from './pages/denie-page/denie-page.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'confirm', component: ConfirmPageComponent },
      { path: 'denie', component: DeniePageComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '**', redirectTo: 'confirm' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmRoutingModule {}
