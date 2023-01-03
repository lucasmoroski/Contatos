import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { PessoaComponent } from './pessoas/pessoas.component';
import { ContatosComponent } from './contatos/contatos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';
import { IConfig } from 'ngx-mask'

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    ContatosComponent
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
    
  ],
  providers: [provideEnvironmentNgxMask(maskConfig),],
  bootstrap: [AppComponent]
})
export class AppModule { }
