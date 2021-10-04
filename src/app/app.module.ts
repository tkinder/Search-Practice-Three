import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { RandomBgColorDirective } from './directives/random-bg-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchResultsComponent,
    RandomBgColorDirective
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
