import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class User {
  foto?: string;
  nome?: string;
  email?: string;
  telefone?: string;
  cidade?: string;
}
