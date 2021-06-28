import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import {RegistroComponent} from './components/registro/registro.component'
import {TrabajadoresComponent} from './components/trabajadores/trabajadores.component'

const routes: Routes = [
  
  {
    path: '',
    redirectTo: '/registro',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'trabajadores',
    component: TrabajadoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
