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
    {
      name: 'Cocktail sæt',
      link:
        'https://www.drinkworld.dk/bar-udstyr/barudstyr/saet/mojito-cocktail-saet-7-dele.html',
    },
    {
      name: 'En god læse stol',
      link:
        'https://www.ikea.com/dk/da/p/strandmon-laenestol-nordvalla-morkegra-20343224/',
    },
    {
      name: 'Morter & støder',
      link: 'https://www.imerco.dk/erik-bagger-as-morter-stor?id=100319048',
    },
    { name: 'The og andre gode sager', link: '' },
    {
      name: 'Paperback - Aftensmad af Ann-Christine Hellerup Brandt',
      link:
        'https://www.bog-ide.dk/produkt/4556619/ann-christine-hellerup-brandt-valdemarsro-aftensmad',
    },
    {
      name: 'eBook/paperback - The Software Craftsman af Sandro Mancuso',
      link:
        'https://www.saxo.com/dk/the-software-craftsman_sandro-mancuso_paperback_9780134052502?gclid=Cj0KCQjwhZr1BRCLARIsALjRVQM7SHuaT0bEFWDV49hViERK29KK1xu0ZRluXlMAiF6C9BQ7vovMusoaAiiZEALw_wcB',
    },
    {
      name: 'eBook/paperback - The future of Humanity af Michio Kaku',
      link:
        'https://www.saxo.com/dk/the-future-of-humanity_michio-kaku_hardback_9780385542760',
    },
    {
      name:
        'eBook/paperback - Homo Deus: A History of Tomorrow af Yuval Noah Harari',
      link:
        'https://www.saxo.com/dk/homo-deus_yuval-noah-harari_paperback_9781784703936',
    },
    {
      name:
        'eBook/paperback - Lifespan: Why We Age—and Why We Don\t Have To af David A. Sinclair',
      link:
        'https://www.saxo.com/dk/lifespan_dr-david-a-sinclair_epub_9780008292362',
    },
    { name: 'Sous Vide', link: '' },
    { name: 'Vacuum sealer', link: '' },
  ];

  displayedColumns: string[] = ['name', 'link'];
}
