import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  titulo: string = ''
  
  @Input()
  cmpPreco: string = ''

  @Input()
  cmpStorage: string= ''

  @Input()
  cmpUser: string= ''

  @Input()
  cmpSend: string= ''

  @Input()
  btn: string= ''

  @Input()
  bg: string=''

  @Input()
  altura: string=''

  @Input()
  cor:string =''

  @Output()
  eventoPersonalizado: EventEmitter<any> = new EventEmitter<any>()

  emitirEventoPersonalizado(): void{
    this.eventoPersonalizado.emit()
  }


}
