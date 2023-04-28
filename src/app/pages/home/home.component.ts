import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmesService } from '../../services/filmes.service';
import { Filme } from '../../interface/filme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public filme!: Filme | undefined;
  public id!: number;
  public notfound: boolean = false;
  public loading: boolean = false;
  constructor(private filmesService: FilmesService) {}

  ngOnInit(): void {}

  public get_filmes() {
    let id = this.geraNumero();
    this.loading = true;
    this.notfound = false;
    setTimeout(() => {
      this.filmesService.get_filme(id).subscribe({
        next: (data: Filme) => {
          this.filme = {
            title: data.title,
            overview: data.overview,
            poster_path: data?.poster_path,
            vote_average: data.vote_average,
            vote_count: data.vote_count,
            genres: data.genres,
            spoken_languages: data.spoken_languages,
            release_date: data.release_date,
          };
        },
        error: (err) => {
          this.notfound = true;
          this.loading = false;
          this.filme = undefined;
        },
        complete: () => {
          this.loading = false;
        },
      });
    }, 3000);
  }

  public geraNumero(): number {
    const numero = Math.random() * (99999 - 0) + 0;
    this.id = Math.round(numero);
    return this.id;
  }
}
