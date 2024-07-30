import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './modules/pagina-inicial/pagina-inicial.component';
import { CarrosselComponent } from './modules/pagina-inicial/carrossel/carrossel.component';
import { GraficoComponent } from './modules/pagina-inicial/grafico/grafico.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DoarSangueComponent } from './modules/doar-sangue/doar-sangue.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RodaPeComponent } from './modules/roda-pe/roda-pe.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CentroDoacoesComponent } from './modules/centro-doacoes/centro-doacoes.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';  
import { MatInputModule } from '@angular/material/input';
import { NoticiasComponent } from './modules/noticias/noticias.component';
import { DuvidasComponent } from './modules/duvidas/duvidas.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EstoqueSangueComponent } from './modules/pagina-inicial/estoque-sangue/estoque-sangue.component';
import { FeedRssComponent } from './modules/feed-rss/feed-rss.component';
import { CommonModule, NgClass } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    CarrosselComponent,
    GraficoComponent,
    DoarSangueComponent,
    RodaPeComponent,
    CentroDoacoesComponent,
    NoticiasComponent,
    DuvidasComponent,
    EstoqueSangueComponent,
    FeedRssComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule, 
    MatInputModule,
    DragDropModule,
    NgClass,
    MatIconModule,
    CommonModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
