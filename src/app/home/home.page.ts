import { Component } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public users : Array<User>
 textoBuscar= '';
 
  constructor() {this.recuperarUser()}

  buscar(event){
    const texto = event.target.value;
    this.textoBuscar = texto;
  }

  recuperarUser() {
    this.users= new Array<User>();

    this.users = [
      { foto: 'assets/img/profiles/1.jpg',nome:'Lorraine', email:'lorraine.beck22@example.com', telefone:'(960)-861-1890', cidade:'Uberlândia - MG' },
      { foto: 'assets/img/profiles/2.jfif', nome:'Lorem', email:'loremipsum@mail.com', telefone:'(960)-861-1890', cidade:' Uberlândia - MG' },
      { foto: 'assets/img/profiles/3.jfif', nome:'Dolor', email:'dolorsit123@mail.com', telefone: '(960)-861-1890', cidade:'São Paulo - SP'},
      { foto: 'assets/img/profiles/4.jpg', nome:'Consectut', email:'consectutor123@mail.com', telefone: '(960)-861-1890', cidade:'Uberlândia - MG'},
      { foto: 'assets/img/profiles/5.jpg', nome:'Elit', email:'elitamet@mail.com', telefone: '(960)-861-1890', cidade:'São Paulo - SP'},
      { foto: 'assets/img/profiles/6.jpg', nome:'Adipiscing', email:'adipiscing@mail.com', telefone: '(960)-861-1890', cidade:'São Paulo - SP'},
      { foto: 'assets/img/profiles/7.png', nome:'Ipsum', email:'Ipsumdolor12345@mail.com', telefone: '(960)-861-1890', cidade:'Uberlândia - MG'},
      { foto: 'assets/img/profiles/8.jpg', nome:'Beck Elit', email:'beckelitsit@mail.com', telefone: '(960)-861-1890', cidade:'Belo Horizonte - MG'},
      { foto: 'assets/img/profiles/9.jfif', nome:'Lorem', email:'loremipsun@mail.com', telefone: '(960)-861-1890', cidade:'São Paulo - SP'}
    ];
  }

}
