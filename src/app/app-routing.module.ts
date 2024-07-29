import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './modules/pagina-inicial/pagina-inicial.component';
import { CarrosselComponent } from './modules/pagina-inicial/carrossel/carrossel.component';
import { GraficoComponent } from './modules/pagina-inicial/grafico/grafico.component';
import { DoarSangueComponent } from './modules/doar-sangue/doar-sangue.component';
import { RodaPeComponent } from './modules/roda-pe/roda-pe.component';
import { CentroDoacoesComponent } from './modules/centro-doacoes/centro-doacoes.component';
import { NoticiasComponent } from './modules/noticias/noticias.component';
import { DuvidasComponent } from './modules/duvidas/duvidas.component';
import { EstoqueSangueComponent } from './modules/pagina-inicial/estoque-sangue/estoque-sangue.component';

const routes: Routes = [
  { path: 'pagina-inicial', component: PaginaInicialComponent },
  { path: '', pathMatch: "full", redirectTo: 'pagina-inicial' },
  { path: 'carrossel', component: CarrosselComponent },
  { path: 'grafico', component: GraficoComponent },
  { path: 'doar-sangue', component: DoarSangueComponent },
  { path: 'roda-pe', component: RodaPeComponent },
  { path: 'mapa', component: CentroDoacoesComponent },
  { path: 'duvidas', component: DuvidasComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'estoque', component: EstoqueSangueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
