
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class Auth implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const usuario = localStorage.getItem('usuario');

    if (usuario) {
      return true;
    } else {
      alert('Por favor, faça login antes de continuar.')
      this.router.navigate(['/login']);
      return false;
    }
  }
}