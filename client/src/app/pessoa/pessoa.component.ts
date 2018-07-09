import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'pessoa',
    templateUrl: './pessoa.component.html' ,
    styleUrls: ['./pessoa.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class PessoaComponent {

    @Input() titulo: string = '';
    @Input() url: string = '';
    descricao: string = ''  ;
    _id: string;
}