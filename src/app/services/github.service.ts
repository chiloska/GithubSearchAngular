import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  API_URL = 'https://api.github.com/';

  constructor(private http: HttpClient) { }

  getGithubProfile(username) {
    return this.http.get(`${this.API_URL}users/${username}`).toPromise();
  }

  getGithubRepos(username, page) {
    return this.http.get(`${this.API_URL}users/${username}/repos?page=${page}&per_page=9`).toPromise();
  }
}
