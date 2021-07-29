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
    this.repos = this.githubService.repoData
    this.usrde = this.githubService.userdetails
  }
  maxvalue(){
    let fun = Number.MIN_VALUE;
    let arr = this.repos

    for (let i=0; i<arr.length;i++){
      if(arr[i].forks>fun){
        fun = arr[i].forks
      }
    }
    return fun;
  }
}
