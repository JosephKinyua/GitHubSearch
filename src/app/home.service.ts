import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

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
