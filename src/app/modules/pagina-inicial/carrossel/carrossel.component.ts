import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss']
})
export class CarrosselComponent implements OnInit {

  comentarios = [
    { text: 'Doei sangue pela primeira vez e foi uma experiência incrível.', autor: 'Ana Silva' },
    { text: 'Doar sangue é um ato de amor. Recomendo a todos que possam ajudar!', autor: 'Carlos Santos' },
    { text: 'A doação de sangue foi rápida e tranquila. Vale a pena para salvar vidas!', autor: 'Maria Oliveira' },
    { text: 'Me senti muito bem ao ajudar com a doação de sangue. Faça a diferença!', autor: 'João Pereira' }
  ];

  currentIndex = 0;
  slideWidth = 100; 
  transform = `translateX(0%)`;
  Subscription: Subscription | undefined;

  ngOnInit(): void {
    this.atualizar();
    this.start();
  }

  ngOnDestroy(): void {
    if (this.Subscription) {
      this.Subscription.unsubscribe();
    }
  }

 start(): void {
    this.Subscription = interval(4000).subscribe(() => { 
      this.proximoSlide();
    });
  }

 proximoSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.comentarios.length;
    this.atualizar();
  }

 atualizar(): void {
    this.transform = `translateX(-${this.currentIndex * this.slideWidth}%)`;
  }

}
