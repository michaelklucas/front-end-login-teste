import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormService } from '../../service/formulario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {

  formulario!: FormGroup;
  mensagemRetorno: any;
  mensagemRetornoErro: any;

  constructor(private formBuilder: FormBuilder, private formService: FormService,  private router: Router) {
    this.formulario = this.formBuilder.group({
      Codigo: [''],
      Nome: ['', [Validators.required]],
      Cpf: ['', [Validators.required]],
      Endereco: [''],
      Telefone: ['']
    });
  }

  applyCpfMask(event: any) {
    const cpf = event.target.value.replace(/\D/g, '');
    if (cpf.length === 11) {
      event.target.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else {
      event.target.value = cpf;
    }
  }

  applyTelefoneMask(event: any) {
    const telefone = event.target.value.replace(/\D/g, '');
    if (telefone.length === 11) {
      event.target.value = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else {
      event.target.value = telefone;
    }
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      const dadosFormulario = this.formulario.value;
      //debugger
      this.formService.enviarDadosFormulario(dadosFormulario).subscribe(
        response => {
         // console.log('Resposta:', response);
          this.mensagemRetorno = 'Pessoa cadastrada com sucesso, código: ' + response.mensagem;


          let dadosArmazenados = localStorage.getItem('Usuarios');
          let dados = [];
          if (dadosArmazenados) {
            dados = JSON.parse(dadosArmazenados);
          }

          dados.push({
            codigo: this.formulario.value.Codigo,
            nome: this.formulario.value.Nome,
            cpf: this.formulario.value.Cpf,
            endereco: this.formulario.value.Endereco,
            telefone: this.formulario.value.Telefone,
            codigoGerado: response.mensagem
          });

          localStorage.setItem('Usuarios', JSON.stringify(dados));

          setTimeout(() => {
            this.mensagemRetorno = null;
          }, 1000);
          this.router.navigate(["/painel"]);
        },
        error => {
          //console.error('Erro ao enviar o formulário', error);
          this.mensagemRetornoErro = 'Erro ao enviar o formulário';

          setTimeout(() => {
            this.mensagemRetornoErro = null;
          }, 10000);
        }
      );
    } else {
      console.warn('Formulário inválido. Verifique os campos.');
    }
  }

}
