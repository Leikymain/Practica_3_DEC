import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-movie-detail',
  imports: [CommonModule],
  templateUrl: './movie-detail.component.html'
})
export class MovieDetailComponent implements OnInit {
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieDetails(Number(id)).subscribe(data => {
      this.movie = data;
    });
  }
}
