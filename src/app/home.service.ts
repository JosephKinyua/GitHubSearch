import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

import { Userdetails } from './userdetails';
import { Repo } from './repo';
import { Searchrepo } from './searchrepo';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  userdetails: Userdetails;
  repo: Repo;
  searchrepo:Searchrepo;
  repoData: any = []
  singleRepoData: any = []
  searchreps:any = []
  totalCount: number = 0
  constructor(private http: HttpClient) {
    this.userdetails = new Userdetails('', '', '', '', '', '', '', '', '', 0, '', '', new Date(), new Date());
    this.repo = new Repo('', '', new Date(), new Date(), 0, '', '', '', '');
    this.searchrepo = new Searchrepo('', '', '', new Date(), new Date(), '', 0, '');
  }
}
