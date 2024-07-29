import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-estoque-sangue',
  templateUrl: './estoque-sangue.component.html',
  styleUrls: ['./estoque-sangue.component.scss']
})
export class EstoqueSangueComponent implements OnInit {

  chart: any;

  simulador: { [key: string]: number } = {
    'A+': 55,
    'A-': 18,
    'B+': 45,
    'B-': 12,
    'O+': 65,
    'O-': 20,
    'AB+': 35,
    'AB-': 8
  };

  niveis: { [key: string]: number } = {
    'A+': 50,
    'A-': 20,
    'B+': 40,
    'B-': 15,
    'O+': 60,
    'O-': 25,
    'AB+': 30,
    'AB-': 10
  };

  ngOnInit(): void {
    Chart.register(...registerables);
    this.iniciarGrafico();
    this.atualizaGrafico();
  }

  iniciarGrafico(): void {
    this.chart = new Chart('bloodStockChart', {
      type: 'bar',
      data: {
        labels: Object.keys(this.simulador),
        datasets: [{
          label: 'Estoque de Sangue',
          data: [],
          borderColor: '#000',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            ticks: {
              color: '#333',
              font: {
                size: 10
              }
            },
            grid: {
              display: false
            }
          },
          y: {
            ticks: {
              color: '#333',
              font: {
                size: 10
              }
            },
            grid: {
              color: '#ddd'
            },
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: false, // Esconde a legenda 
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                return `${context.label}: ${context.raw} unidades`;
              }
            }
          }
        }
      }
    });
  }

  atualizaGrafico(): void {
    setInterval(() => {
      this.simularData();

      const stockLevels = Object.values(this.simulador);
      const labels = Object.keys(this.simulador);

      const colors = stockLevels.map((level, index) => {
        const type = labels[index];
        return level < this.niveis[type] ? '#FF4C4C' : '#4CAF50';
      });

      this.chart.data.datasets[0].data = stockLevels;
      this.chart.data.datasets[0].backgroundColor = colors;
      this.chart.update();
    }, 5000); 
  }

  simularData(): void {
    for (let key in this.simulador) {
      this.simulador[key] = Math.max(0, this.simulador[key] + Math.floor(Math.random() * 10) - 5);
    }
  }
}
