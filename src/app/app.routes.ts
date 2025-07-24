import { Routes } from '@angular/router';
import { Home} from './pages/home/home';
import { CarroDetalheComponent } from './pages/carro-detalhe/carro-detalhe';
import { UsadosComponent } from './pages/usados/usados';
import { Novos } from './pages/novos/novos';
import { Pedidos } from './pages/pedidos/pedidos';
import { Footer } from './pages/footer/footer';
import { Login } from './pages/login/login'; 
import { Auth } from './guards/auth-guard';


export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'carro/:vin', component: CarroDetalheComponent,  canActivate: [Auth] },
  { path: 'usados', component: UsadosComponent },
  { path: 'novos', component: Novos},
  { path: 'pedidos', component: Pedidos },
  { path: 'footer', component: Footer},
  { path: 'login', component: Login },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];