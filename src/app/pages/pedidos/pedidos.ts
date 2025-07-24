import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pedidos',
  imports: [CommonModule, RouterModule],
  templateUrl: './pedidos.html',
  styleUrl: './pedidos.css'
})


export class Pedidos {

  
  pedidos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadPedidos();
  }
  
  loadPedidos() {
    this.http.get<any[]>('http://localhost:3001/api/pedidos').subscribe((data: any[]) => {
      this.pedidos = data;
    });
  }
  
  atualizarStatus(pedido: any, status: string) {
    this.http.patch(`http://localhost:3001/api/pedidos/${pedido.id}`, { status }).subscribe(() => {
      pedido.status = status;
    });
  }

  usuarioLogado() {
    return !!localStorage.getItem('usuario');
  }
  
  logout() {
    localStorage.removeItem('usuario');
    window.location.reload();
  }

}
