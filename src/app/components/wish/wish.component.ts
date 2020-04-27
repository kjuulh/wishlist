import { Component, OnInit, Input } from '@angular/core';
import { Wish } from 'src/app/models/wish';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.scss'],
})
export class WishComponent implements OnInit {
  @Input() wish: Wish;

  constructor() {}

  ngOnInit(): void {}
}
