import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})
export class GraficoComponent implements OnInit, OnDestroy {

  data: any[] = [];
  intervalo: any;
  viewSize: [number, number] = [700, 400]; 

  ngOnInit(): void {
    this.gerarData();
    this.intervalo = setInterval(() => {
      this.atualizarData();
    }, 60000); // Atualizar a cada 60 segundos
  }

  ngOnDestroy(): void {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }

  gerarData(): void {
    this.data = [
      {
        name: 'Estoque de Sangue',
        series: this.gerar()
      }
    ];
  }

  atualizarData(): void {
    this.data = [
      {
        name: 'Estoque de Sangue',
        series: this.gerar()
      }
    ];
  }

  gerar(): any[] {
    const now = new Date();
    const labels = [
      now.toISOString(),
      new Date(now.getTime() - 60000).toISOString(), 
      new Date(now.getTime() - 120000).toISOString() 
    ];
    const values = [50, 40, 30];
    
    return labels.map((label, index) => ({
      name: label,
      value: values[index] + Math.floor(Math.random() * 20 - 10) 
    }));
  }



}
