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
  constructor() { }

  ngOnInit(): void {
  }

}
