import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() codigo!: string;
  @Input() nome!: string;
  @Input() cpf!: string;
  @Input() endereco!: string;
  @Input() telefone!: string;
  @Input() codigoGerado!: string;
}
