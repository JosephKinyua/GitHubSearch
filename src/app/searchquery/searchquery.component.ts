import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
@Component({
  selector: 'app-searchquery',
  templateUrl: './searchquery.component.html',
  styleUrls: ['./searchquery.component.css']
})
export class SearchqueryComponent implements OnInit {


  search:string = '';
  public shwinput = true;
  public showrepo = false;

  githubService: GithubService;
  constructor(githubService:GithubService) {
    this.githubService = githubService
  }


  ngOnInit(): void {
  }
  submitQuery(){
    this.githubService.getUserDetails(this.search)
    this.shwinput = false;
    this.showrepo = true;
  }
  showrepodata(event:any){
    this.shwinput = event;
    this.showrepo = false;
  }
}
