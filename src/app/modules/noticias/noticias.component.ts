import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent {

  private newsSubject = new BehaviorSubject<any[]>([]);
  news$ = this.newsSubject.asObservable();

  constructor() {
    // Inicialmente, você pode adicionar algumas notícias pré-carregadas
    this.newsSubject.next([
      {
        title: 'Campanha de Doação de Sangue',
        description: 'Participe da nossa campanha de doação de sangue e ajude a salvar vidas.',
        link: 'https://example.com/campanha',
        image: 'https://via.placeholder.com/300'
      }
    ]);
  }

  addNews(news: any) {
    const currentNews = this.newsSubject.value;
    this.newsSubject.next([...currentNews, news]);
  }

}
