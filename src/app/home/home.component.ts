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
  constructor() { }

  ngOnInit(): void {
  }

}
