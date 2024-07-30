import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FeedRss } from 'src/app/interfaces/feedRss';
import { RssFeedService } from 'src/app/services/feed-rss.service';

@Component({
  selector: 'app-feed-rss',
  templateUrl: './feed-rss.component.html',
  styleUrls: ['./feed-rss.component.scss']
})

export class FeedRssComponent {

  posts: FeedRss[] = [];
  loaded: boolean = true;
  // Mobile e tablet
  @ViewChild('cardMobile') cardMobile!: ElementRef;
  indiceAtualMobile: number = 0;
  // Outros dipositivos
  @ViewChildren('card') cards!: QueryList<ElementRef>;
  primeiroCard: number = 0;
  segundoCard: number = 1;
  terceiroCard: number = 2;
  paginator: number[] = [];

  constructor(
    private rssFeedService: RssFeedService,
  ) { }

  ngOnInit(): void {
    this.buscarNoticias();
  }

  buscarNoticias(): void {
    this.rssFeedService.getNoticia().subscribe((noticias) => {
      this.posts = noticias;
    });
  }


  removerVerMais(str: string): string {
    if (str.includes('…ver mais')) {
      return str.replace("…ver mais", "");
    } else {
      return str;
    }
  }

  // Mobile:
  aplicarAnimacaoMobile(): void {
    const cardElement = this.cardMobile.nativeElement;
    cardElement.classList.remove('fade-in');
    void cardElement.offsetWidth;
    cardElement.classList.add('fade-in');
  }

  reduzirCaracteres(str: string): string {
    const limiteCaracteres: number = 110;

    if (str.length > limiteCaracteres) {
      return str.substring(0, limiteCaracteres) + '...';
    }

    return str;
  }

  reduzirCaracteresSemImagem(str: string): string {
    const limiteCaracteres: number = 220;

    if (str.length > limiteCaracteres) {
      return str.substring(0, limiteCaracteres) + '...';
    }

    return str;
  }

  reduzirCaracteresDesktop(str: string): string {
    const limiteCaracteres: number = 300;

    if (str.length > limiteCaracteres) {
      return str.substring(0, limiteCaracteres) + '...';
    }

    return str;
  }

  moverParaEsquerdaMobile(): void {
    if (this.indiceAtualMobile == 0) {
      this.indiceAtualMobile = this.posts.length - 1;
    } else {
      this.indiceAtualMobile--;
    }

    this.aplicarAnimacaoMobile();
  }

  moverParaDireitaMobile(): void {
    if (this.indiceAtualMobile < (this.posts.length - 1)) {
      this.indiceAtualMobile++;
    } else {
      this.indiceAtualMobile = 0;
    }

    this.aplicarAnimacaoMobile();
  }

  aplicarAnimacao(): void {
    this.cards.forEach((card) => {
      const cardElement = card.nativeElement;
      cardElement.classList.remove('fade-in');
      void cardElement.offsetWidth;
      cardElement.classList.add('fade-in');
    });
  }

  moverParaEsquerda(): void {
    if (this.primeiroCard == 0) {
      this.primeiroCard = this.posts.length - 3;
      this.segundoCard = this.posts.length - 2;
      this.terceiroCard = this.posts.length - 1;
    } else {
      this.primeiroCard = this.primeiroCard - 3;
      this.segundoCard = this.segundoCard - 3;
      this.terceiroCard = this.terceiroCard - 3;
    }

    this.aplicarAnimacao();
  }

  moverParaDireita(): void {
    if (this.terceiroCard == this.posts.length - 1) {
      this.primeiroCard = 0;
      this.segundoCard = 1;
      this.terceiroCard = 2;
    } else {
      this.primeiroCard = this.primeiroCard + 3;
      this.segundoCard = this.segundoCard + 3;
      this.terceiroCard = this.terceiroCard + 3;
    }

    this.aplicarAnimacao();
  }

  botaoPaginator(indice: number): void {
    if (indice == this.posts.length - 1) {
      this.primeiroCard = indice;
      this.segundoCard = 0;
      this.terceiroCard = 1;
    } else {
      this.primeiroCard = indice;
      this.segundoCard = indice + 1;
      this.terceiroCard = indice + 2;
    }

    this.aplicarAnimacao();
  }

  desativarBotaoPaginator(indice: number) {
    if (indice == this.primeiroCard) {
      return false;
    } else {
      return true;
    }
  }

  irParaPostagem(urlPost: string) {
    window.open(urlPost);
  }

}
