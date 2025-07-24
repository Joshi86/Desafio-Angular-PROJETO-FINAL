/*
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.html',
  styleUrl: './auth.css'
})
export class Auth {
  aba: 'login' | 'cadastro' = 'login';
  nome = '';
  senha = '';
  erroLogin = '';
  erroCadastro = '';
  mensagem = '';

  constructor(private auth: Auth, private router: Router) {}

  login() {
    if (this.auth.login(this.nome, this.senha)) {
      this.router.navigate(['/']); // ou página de destino após login
    } else {
      this.erroLogin = 'Usuário ou senha inválidos.';
    }
  }

  cadastrar() {
    const sucesso = this.auth.cadastrar({ nome: this.nome, senha: this.senha });
    if (sucesso) {
      this.mensagem = 'Cadastro realizado com sucesso!';
      this.erroCadastro = '';
      this.aba = 'login';
    } else {
      this.erroCadastro = 'Usuário já existe.';
      this.mensagem = '';
    }
  }

}
*/
