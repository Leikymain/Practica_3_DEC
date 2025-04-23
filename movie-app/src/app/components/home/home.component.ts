import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
    this.movieService.getPopularMovies().subscribe(data => {
      this.popularMovies = data.results;
    });
  }
}
