import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss']
})
export class PaginaInicialComponent {

  constructor(
    private router: Router,
    ) {}

  irParaDoar(){
    this.router.navigate(['/doar-sangue'])
  }

}
