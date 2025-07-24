import { Component } from '@angular/core';
import {RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  usuarioLogado() {
    return !!localStorage.getItem('usuario');
  }
  
  logout() {
    localStorage.removeItem('usuario');
    window.location.reload();
  }
}
