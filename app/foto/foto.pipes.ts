import {Pipe, PipeTransform} from '@angular/core'
import {FotoComponent} from './foto.component'

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform{
 
    //transform(fotos: any, digitado: string): any {
    transform(fotos: FotoComponent[], digitado: string): FotoComponent[] {
            
        // quem deve ser filtrado
        console.log(fotos); 

        // o que deve ser usado como filtro
        console.log(digitado); 

        digitado = digitado.toLowerCase();
        return fotos.filter( foto => foto.titulo.toLowerCase().includes(digitado));
    }
}