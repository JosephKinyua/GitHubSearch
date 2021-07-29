import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Userdetails } from './userdetails';
import { Repo } from './repo';
import { Searchrepo } from './searchrepo';
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  userdetails: Userdetails;
  repo: Repo;
  searchrepo:Searchrepo;
  repoData: any = []
  singleRepoData: any = []
  searchreps:any = []
  totalCount: number = 0
  constructor() { }
}
