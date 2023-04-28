import { Filme } from './../../interface/filme';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-filme',
  templateUrl: './card-filme.component.html',
  styleUrls: ['./card-filme.component.css'],
})
export class CardFilmeComponent implements OnInit {
  @Input() data!: Filme;

  public filme!: Filme;
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(): void {
    if (this.data) {
      this.filme = this.data;
    }
  }
}
