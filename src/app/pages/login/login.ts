import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // necessário para [(ngModel)]
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {

  usuario = {
    nome: '',
    senha: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  fazerLogin() {
    if (this.usuario.nome === 'admin') {
      // Login do administrador (valida via API)
      this.http.post<any>('http://localhost:3001/login', this.usuario).subscribe({
        next: (res) => {
          localStorage.setItem('usuario', JSON.stringify(res));
          alert('Login como administrador!');
          this.router.navigate(['/admin']); 
        },
        error: (err) => {
          alert(err.error.message || 'Erro no login do admin.');
        }
      });
    } else {
      // Login de usuário comum (sem backend)
      const novoUsuario = {
        nome: this.usuario.nome,
        tipo: 'usuario'
      };
      localStorage.setItem('usuario', JSON.stringify(novoUsuario));
      alert('Login realizado com sucesso!');
      this.router.navigate(['/']); 
    }
  }

  cadastrar() {
    alert('Cadastro simulado com sucesso! Agora você pode fazer login.');
    
  }

}
