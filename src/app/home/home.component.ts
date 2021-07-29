import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  repos: any = []
  userdetail:any;
  searchrepos:any = []
  githubService: HomeService;
  constructor(githubService:HomeService) {
    this.githubService = githubService
  }
  ngOnInit(): void {
    this.githubService.getUserDetails('JosephKinyua')
    this.repos = this.githubService.repoData
    this.userdetail = this.githubService.userdetails
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

