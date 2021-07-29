import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repodetails',
  templateUrl: './repodetails.component.html',
  styleUrls: ['./repodetails.component.css']
})
export class RepodetailsComponent implements OnInit {
  repos: any = [];
  usrde:any;
  searchrepos:any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
