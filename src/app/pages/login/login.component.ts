import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
//trecho omitido
export class LoginComponent {
 onBotaoClicado() {
 alert("Bem-vindo(a)!");
 }
}
