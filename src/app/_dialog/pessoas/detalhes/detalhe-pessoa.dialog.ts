import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detalhe-pessoa',
  templateUrl: './detalhe-pessoa.dialog.html',
  styleUrls: ['./detalhe-pessoa.dialog.scss']
})
export class DialogDetalhesPessoaComponent {
  pessoaForm: any;
  Pessoa: any;

  get Nome() { return this.pessoaForm.get('nome') }
  get Email() { return this.pessoaForm.get('email') }
  get Idade() { return this.pessoaForm.get('idade') }
  get Celular() { return this.pessoaForm.get('celular') }

  constructor(
    private rout: Router,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogDetalhesPessoaComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.Pessoa = data;
    this.pessoaForm = this.fb.group({
      nome: ["", Validators.required],
      email: ["", [Validators.pattern("^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([A-Za-z]{2,6}(?:\\.[A-Za-z]{2,6})?)$")]],
      idade: ["", Validators.required],
      celular: ["", Validators.required]
    });
    if (this.Pessoa) {
      this.pessoaForm.patchValue({
        nome: this.Pessoa['name'] || '',
        email: this.Pessoa['email'] || '',
        idade: this.Pessoa['idade'] || '',
        celular: this.Pessoa['phone'] || ''
      });
    }
  }

  ExcluirPessoa() {
    let modelExcluir = {
      pessoaId: this.Pessoa['pessoaId']
    }
    console.log('modelExcluir', modelExcluir)
  }

  SalvarAtualizacao() {
    let modelSalvar = {
      pessoaId: this.Pessoa['pessoaId'],
      nome: this.Nome.value,
      email: this.Email.value,
      idade: this.Idade.value,
      celular: this.Celular.value
    }

    console.log('modelSalvar', modelSalvar)

  }


}
