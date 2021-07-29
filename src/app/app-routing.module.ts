import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReposearchComponent } from './reposearch/reposearch.component';
import { SearchqueryComponent } from './searchquery/searchquery.component';


const routes: Routes = [
  {
    path: 'index', component: HomeComponent
  },
  {
    path: 'home', component:SearchqueryComponent
  },
  {
    path: 'repos', component:ReposearchComponent
  },
  {
    path: '',
    redirectTo: '/index', pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
