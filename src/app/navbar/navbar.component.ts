import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() newSearch = new EventEmitter<string>();

  currentSearch = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSearch() {
    this.newSearch.emit(this.currentSearch);

    this.currentSearch = '';
  }

}
