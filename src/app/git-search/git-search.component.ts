import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { GitSearch } from '../git-search';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {

  searchResults: GitSearch;
  searchQuery: string;
  constructor(private gitSearchService: GitSearchService) { }

  ngOnInit() {
    this.gitSearchService.gitSearch('Angular').then((response: GitSearch) => {
      this.searchResults = response;
    }, (error) => {
      alert(error.statusText);
    });
  }
  gitSearch = () => {
    this.gitSearchService.gitSearch(this.searchQuery).then( (response: GitSearch) => {
      this.searchResults = response;
    }, (error) => {
      alert(error.statusText);
    });
  }

}
