import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: []
})
export class MovieComponent implements OnInit {
  movieDetails: object = {}
  status:boolean;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  submitMovieHandler(movieName) {
    this.sharedService.moviesService(movieName)
      .subscribe((resp) => {
        this.status = true;
        this.movieDetails = resp;
      });
  }

}
