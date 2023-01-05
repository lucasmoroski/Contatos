import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PessoasService } from 'src/app/_service/pessoas/pessoas.service';
import { DialogCadastroContatoComponent } from '../_dialog/contatos/cadastro/cadastro-contatos.dialog';
import { DialogDetalhesContatoComponent } from '../_dialog/contatos/contatos/detalhe-contatos.dialog';
import { DialogDetalhesPessoaComponent } from '../_dialog/pessoas/detalhes/detalhe-pessoa.dialog';
import { ContatosService } from '../_service/contatos/contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent {
  title = 'Contatos';
  listaContatos: any;
  pessoaModel: any;
  pessoaId: any;
  constructor(
    private _servicePessoas: PessoasService,
    private _serviceContatos: ContatosService,
    public dialog: MatDialog,
    private rout: Router
  ){
    this.pessoaModel = this._serviceContatos.modelPessoa;
    this.pessoaId = this._serviceContatos.pessoaId;
    if (this.pessoaId){
      this.listarContatos();
    } else {
      this.rout.navigate(['/pessoas'])
    }
  }

  listarContatos(){
    let model = {
      pessoaId: this.pessoaId
    }
    this._serviceContatos.listarContatos(model).subscribe(data =>{
      this.listaContatos = data;
    })
  }

  detalhesContato(contato : any){
    const dialogRef = this.dialog.open(DialogDetalhesContatoComponent, {
      width: "100%",
      height: "auto",
      data: {dataContato:contato,dataPessoa: this.pessoaModel}

    }).afterClosed()
    .subscribe((response) => {
      this.listarContatos();
    });
  }

  EditarContato(){
    const dialogRef = this.dialog.open(DialogDetalhesPessoaComponent, {
      width: "100%",
      height: "auto",
      data: this.pessoaModel

    }).afterClosed()
    .subscribe((response) => {
      this.listarContatos();
    });
  }

  CriarContato(pessoaId: any){
    const dialogRef = this.dialog.open(DialogCadastroContatoComponent, {
      width: "100%",
      height: "auto",
      data: pessoaId

    }).afterClosed()
    .subscribe((response) => {
      this.listarContatos();
    });
  }
}
