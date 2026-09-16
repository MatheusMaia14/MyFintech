import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})  
//trecho omitido
export class LoginComponent {
  login: string = "";
  senha: string = "";
  botaoDesabilitado: boolean = true;

  validarFormulario(){
    if (this.login.trim() !== " && this.senha.trim() ! ==") {
      this.botaoDesabilitado = false;
    } else {
      this.botaoDesabilitado = true;
    }
  }

    fazerLogin(){
      if (this.login === 'admin' && this.senha === '123'){
        alert('Bem-vindo ${this.login)!')
      }
    }
  onBotaoClicado() {
    alert("Bem-vindo(a)!");
  }

  teclaDigitada(event: KeyboardEvent): void {
    alert(`O usuário digitou: ${event.key}`);
  }
}
