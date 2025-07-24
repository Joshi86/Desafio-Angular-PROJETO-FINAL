import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule } from '@angular/router';

@Component({
  selector: 'app-novos',
  templateUrl: './novos.html',
  imports: [CommonModule, RouterModule],
  styleUrl: './novos.css'
})

export class Novos {

  usuarioLogado() {
    return !!localStorage.getItem('usuario');
  }
  
  logout() {
    localStorage.removeItem('usuario');
    window.location.reload();
  }
  
}
