import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
@Component({
  selector: 'app-repodetails',
  templateUrl: './repodetails.component.html',
  styleUrls: ['./repodetails.component.css']
})
export class RepodetailsComponent implements OnInit {
  repos: any = [];
  usrde:any;
  searchrepos:any = [];
  githubService: GithubService;

  constructor(githubService:GithubService) {
    this.githubService = githubService
  }

  ngOnInit(): void {
  }

}
