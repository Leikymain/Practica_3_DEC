import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-search',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './search.component.html'
})
export class SearchComponent {
  query: string = '';
  searchResults: any[] = [];

  constructor(private movieService: MovieService) {}

  search(): void {
    if (this.query.trim() === '') return;
    this.movieService.searchMovies(this.query).subscribe(data => {
      this.searchResults = data.results;
    });
  }
}
