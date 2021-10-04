import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  allSearchResults: string[] = [];

  onNewSearch(newSearch: string) {
    this.allSearchResults.push(newSearch);
  }

  title = 'search-practice-three';
}
