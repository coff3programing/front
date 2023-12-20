import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ViewPageComponent } from './pages/view-page/view-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'home', component: HomePageComponent },
      { path: 'cat-grams', component: ViewPageComponent },
      { path: 'new-cat', component: AddPageComponent },
      { path: 'user-profile', component: ProfilePageComponent },
      { path: '**', redirectTo: 'home' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonanteRoutingModule {}
