import { Component } from '@angular/core';
import { Wish } from './models/wish';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'wishlist';

  wishes: Wish[] = [
    { name: 'Toy bear', link: 'https://www.google.com' },
    { name: 'Toy bear', link: 'https://www.google.com' },
  ];

  displayedColumns: string[] = ['name', 'link'];
}
