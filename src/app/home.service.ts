import { Injectable } from '@angular/core';

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
  constructor() { }
}
