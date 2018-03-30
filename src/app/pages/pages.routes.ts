import {PagesComponent} from './pages.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FhaListComponent} from './fha-list/fha-list.component';
import {FhaDetailComponent} from './fha-detail/fha-detail.component';

const pagesRoutes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      {path: 'home', component: HomeComponent,  data: {titulo: 'Home'}},
      {path: 'fha-list', component: FhaListComponent, data: {titulo: 'FHA'}},
      {path: 'fha-detail/:code', component: FhaDetailComponent, data: {titulo: 'FHA'}},
      {path: '', redirectTo: '/home', pathMatch: 'full'}
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
