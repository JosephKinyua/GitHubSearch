import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { GithubService } from '../github.service';
@Component({
  selector: 'app-reposearch',
  templateUrl: './reposearch.component.html',
  styleUrls: ['./reposearch.component.css']
})
export class ReposearchComponent implements OnInit {
  @Output() goback = new EventEmitter<boolean>()
  hideRepo!: boolean;
  repos: any = []
  totalcount!: number

  reposearch:string = 'JosephKinyua'
  githubService: GithubService;
  constructor(githubService:GithubService) {
    this.githubService = githubService
   }
   searchrepo(){
    this.githubService.getRepos(this.reposearch)
    console.log(this.reposearch)
  }
  ngOnInit(): void {
    this.repos = this.githubService.searchreps
    this.totalcount = this.githubService.totalCount
    console.log(this.totalcount)
  }

}
