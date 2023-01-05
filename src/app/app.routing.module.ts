import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ContatosComponent } from './contatos/contatos.component';
import { PessoaComponent } from './pessoas/pessoas.component';
import { SuporteComponent } from './suporte/suporte.component';

const routes: Routes = [  
    { path: 'contatos', component: ContatosComponent },
    { path: 'pessoas', component: PessoaComponent },
    { path: 'suporte', component: SuporteComponent },
    { path: '*', component: PessoaComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }