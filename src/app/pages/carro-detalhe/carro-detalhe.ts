import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Veiculos } from '../../services/veiculos';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-carro-detalhe',
  standalone: true,
  templateUrl: './carro-detalhe.html',
  imports: [CommonModule, RouterModule, FormsModule],
  styleUrl: './carro-detalhe.css',
})
export class CarroDetalheComponent implements OnInit {
  carro: any;

  constructor(
    private route: ActivatedRoute,
    private veiculosService: Veiculos,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const vin = this.route.snapshot.paramMap.get('vin')!;
    this.veiculosService.getCarroByVin(vin).subscribe({
      next: data => this.carro = data,
      error: err => alert("Erro ao buscar dados do carro.")
    });
  }

  

  formData = {
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
    aceitoTermos: false
  };

  

  formEnviado = false;
  
  enviarPedido(pedidoForm: NgForm) {
    if (pedidoForm.invalid) return;

    const pedido = {
      nome: this.formData.nome,
      email: this.formData.email,
      telefone: this.formData.telefone,
      mensagem: this.formData.mensagem,
      carroId: this.carro.id,
      carroNome: this.carro.carro1,
      status: 'pendente'
    };

    this.http.post('http://localhost:3001/api/pedidos', pedido).subscribe(() => {
      this.formEnviado = true;
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