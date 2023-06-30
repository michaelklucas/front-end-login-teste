import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  dadosFormulario: any[];

  constructor() {
    const dadosArmazenados = localStorage.getItem('Usuarios');
    this.dadosFormulario = dadosArmazenados ? JSON.parse(dadosArmazenados) : [];
  }
}
