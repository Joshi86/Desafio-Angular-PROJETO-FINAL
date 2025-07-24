import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private usuariosKey = 'usuarios';
  private usuarioLogadoKey = 'usuarioLogado';

  cadastrar(usuario: { nome: string, senha: string }): boolean {
    const usuarios = JSON.parse(localStorage.getItem(this.usuariosKey) || '[]');
    if (usuarios.find((u: any) => u.nome === usuario.nome)) return false;

    usuarios.push(usuario);
    localStorage.setItem(this.usuariosKey, JSON.stringify(usuarios));
    return true;
  }

  login(nome: string, senha: string): boolean {
    const usuarios = JSON.parse(localStorage.getItem(this.usuariosKey) || '[]');
    const usuario = usuarios.find((u: any) => u.nome === nome && u.senha === senha);
    if (usuario) {
      localStorage.setItem(this.usuarioLogadoKey, JSON.stringify(usuario));
      return true;
    }
    return false;
  }

  getUsuarioLogado() {
    return JSON.parse(localStorage.getItem(this.usuarioLogadoKey) || 'null');
  }

  logout() {
    localStorage.removeItem(this.usuarioLogadoKey);
  }
}
