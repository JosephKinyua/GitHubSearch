import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import{FormsModule} from '@angular/forms';

import { GithubService } from './github.service';
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
    RepodetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
