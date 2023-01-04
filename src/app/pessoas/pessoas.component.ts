import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PessoasService } from 'src/app/_service/pessoas/pessoas.service';
import { DialogCadastroPessoaComponent } from '../_dialog/pessoas/cadastro/cadastro-pessoa.dialog';
import { ContatosService } from '../_service/contatos/contatos.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.scss']
})
export class PessoaComponent {
  title = 'Pessoas';

  listaPessoas: any;

  constructor(
    private rout: Router,
    public dialog: MatDialog,
    private _servicePessoas: PessoasService,
    private _serviceContatos: ContatosService
  ) {
    this.listarPessoas()
  }

  listarPessoas() {
    let model = {}
    this._servicePessoas.listarPessoas(model).subscribe(data => {
      this.listaPessoas = data;
    })
  }

  ListaContatos(item: any) {
    console.log('item', item)
    this._serviceContatos.modelPessoa = item;
    this._serviceContatos.pessoaId = item['pessoaId'];
    if (this._serviceContatos.pessoaId > 0) {
      console.log('this._serviceContatos.pessoaId', this._serviceContatos.pessoaId)
      this.rout.navigate(['/contatos']);
    }
  }

  CadastrarPessoa() {
    const dialogRef = this.dialog.open(DialogCadastroPessoaComponent, {
      width: "100%",
      height: "auto",
    }).afterClosed()
      .subscribe((response) => {
        this.listarPessoas();
      });
  }
}
