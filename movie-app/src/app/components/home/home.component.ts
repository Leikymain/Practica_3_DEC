import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { forkJoin } from 'rxjs'; // <-- Add this import

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  popularMovies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    forkJoin([
      this.movieService.getPopularMovies(1),
      this.movieService.getPopularMovies(2)
    ]).subscribe(([page1, page2]) => {
      this.popularMovies = [...page1.results, ...page2.results];
    });
  }
}
