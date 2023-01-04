import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detalhe-contatos',
  templateUrl: './detalhe-contatos.dialog.html',
  styleUrls: ['./detalhe-contatos.dialog.scss']
})
export class DialogDetalhesContatoComponent {
  contatoForm: any;
  Contato: any;

  get Nome() { return this.contatoForm.get('nome') }
  get Email() { return this.contatoForm.get('email') }
  get Idade() { return this.contatoForm.get('idade') }
  get Celular() { return this.contatoForm.get('celular') }

  constructor(
    private rout: Router,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogDetalhesContatoComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.Contato = data;
    this.contatoForm = this.fb.group({
      nome: ["", Validators.required],
      email: ["", [Validators.pattern("^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([A-Za-z]{2,6}(?:\\.[A-Za-z]{2,6})?)$")]],
      idade: ["", Validators.required],
      celular: ["", Validators.required]
    });
    if (this.Contato) {
      this.contatoForm.patchValue({
        nome: this.Contato['name'] || '',
        email: this.Contato['email'] || '',
        idade: this.Contato['idade'] || '',
        celular: this.Contato['phone'] || ''
      });
    }
  }

  ExcluirContato() {
    let modelExcluir = {
      contatoId: this.Contato['contatoId']
    }
    console.log('modelExcluir', modelExcluir)
  }

  SalvarAtualizacao() {
    let modelSalvar = {
      contatoId: this.Contato['contatoId'],
      nome: this.Nome.value,
      email: this.Email.value,
      idade: this.Idade.value,
      celular: this.Celular.value
    }

    console.log('modelSalvar', modelSalvar)

  }


}
