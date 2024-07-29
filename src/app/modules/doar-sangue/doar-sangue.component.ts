import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-doar-sangue',
  templateUrl: './doar-sangue.component.html',
  styleUrls: ['./doar-sangue.component.scss']
})
export class DoarSangueComponent implements OnInit {

  endereco: string = '';

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {}

  buscarEndereco() {
    const cep = (document.getElementById('cep') as HTMLInputElement).value;
    if (cep && cep.length === 8) { // Verifica se o CEP tem 8 dígitos
      this.http.get(`https://viacep.com.br/ws/${cep}/json/`).subscribe((response: any) => {
        if (response) {
          const { logradouro, bairro, localidade, uf } = response;
          this.endereco = `${logradouro}, ${bairro}, ${localidade} - ${uf}`;
        } else {
          this.endereco = 'Endereço não encontrado';
        }
      }, error => {
        this.endereco = 'Erro ao buscar endereço';
      });
    } else {
      this.endereco = 'CEP inválido';
    }
  }

  agendarDoacao() {
    this.snackBar.open('Consulta agendada com sucesso! Enviaremos um e-mail ou SMS com todas as informações necessárias.', 'Fechar', {
      duration: 5000, 
    });
  }
  }
  
  
