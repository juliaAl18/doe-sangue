import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centro-doacoes',
  templateUrl: './centro-doacoes.component.html',
  styleUrls: ['./centro-doacoes.component.scss']
})
export class CentroDoacoesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.verificaStatus();
  }

  centros = [
    { name: 'Hemocentro São Lucas', endereco: 'SHIS Ql 15 - Block O - Tower I Ground Floor / South Lake - Room T 08 A, Brasília - DF, 71635-610', horario: '08:00 - 16:30', telefone: '(61) 32487272' },
    { name: 'Hemoclínica Banco de Sangue', endereco: 'CENTRO MEDICO DE BRASILIA - 716 SHLS Bloco C Entrada B TÉRREO - Asa Sul, Brasília - DF, 70390-700', horario: '07:00 - 12:00', telefone: '(61) 993236376' },
    { name: 'GSH Banco de Sangue de Brasília', endereco: 'I - SGAS, 915 2º Subsolo - Centro Clínico Advance - Asa Sul, Brasília - DF, 70390-150', horario: '07:00 - 12:30', telefone: '(61) 30117531' },
    { name: 'Fundação Hemocentro de Brasília', endereco: 'BL 3 - SMHN conjunto A - Asa Norte, Brasília - DF, 70710-908', horario: '07:15 - 18:00', telefone: '(61) 33274413' }
  ];

  contactInfo = {
    email: 'contato@doacaobrasilia.org',
    phone: '(61) 4567-8901',
  };

  mapaUrl(address: string): string {
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  }

  verificaStatus() {
    this.centros.forEach(center => {
      const isOpen = this.Open(center.horario);
      if (!isOpen) {
      }
    });
  }

  Open(hours: string): boolean {
    const [start, end] = hours.split('-').map(time => this.converteFormato(time));
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    const openTime = this.converteMinutos(start);
    const closeTime = this.converteMinutos(end);

    return currentTime >= openTime && currentTime <= closeTime;
  }

  converteFormato(time: string): string {
    return time;
  }

  converteMinutos(time: string): number {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }
}
