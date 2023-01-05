import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PessoaComponent } from './pessoas/pessoas.component';
import { ContatosComponent } from './contatos/contatos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';
import { IConfig } from 'ngx-mask'
import { DialogDetalhesContatoComponent } from './_dialog/contatos/contatos/detalhe-contatos.dialog';
import { MatRippleModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { DialogDetalhesPessoaComponent } from './_dialog/pessoas/detalhes/detalhe-pessoa.dialog';
import { DialogCadastroPessoaComponent } from './_dialog/pessoas/cadastro/cadastro-pessoa.dialog';
import { DialogCadastroContatoComponent } from './_dialog/contatos/cadastro/cadastro-contatos.dialog';
import { SuporteComponent } from './suporte/suporte.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    ContatosComponent,
    SuporteComponent,
    DialogDetalhesContatoComponent,
    DialogDetalhesPessoaComponent,
    DialogCadastroPessoaComponent,
    DialogCadastroContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    NgbModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatRippleModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    provideEnvironmentNgxMask(maskConfig),
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  entryComponents: [DialogDetalhesContatoComponent, DialogDetalhesPessoaComponent,DialogCadastroPessoaComponent,DialogCadastroContatoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
