import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-usados',
  templateUrl: './usados.html',
  imports: [CommonModule, RouterModule, FormsModule],
  styleUrl: './usados.css'
})

export class UsadosComponent {
 
  usuarioLogado() {
    return !!localStorage.getItem('usuario');
  }
  
  logout() {
    localStorage.removeItem('usuario');
    window.location.reload();
  }

}
