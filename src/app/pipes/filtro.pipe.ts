import { Pipe, PipeTransform } from '@angular/core';
import {User} from '../home/User';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: User[], texto: string):User[] {

  if(texto == ''){
    return value;
  }

  texto = texto.toLocaleLowerCase();
  
  const novosUser =  value.filter( User =>{
    return User.nome.toLocaleLowerCase().includes(texto);
  });
   return novosUser
  }

}
