import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReposearchComponent } from './reposearch/reposearch.component';
import { SearchqueryComponent } from './searchquery/searchquery.component';
import { RepodetailsComponent } from './repodetails/repodetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReposearchComponent,
    SearchqueryComponent,
    RepodetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
