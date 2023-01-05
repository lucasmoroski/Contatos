import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ContatosService } from 'src/app/_service/contatos/contatos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cadastro-contatos',
  templateUrl: './cadastro-contatos.dialog.html',
  styleUrls: ['./cadastro-contatos.dialog.scss']
})
export class DialogCadastroContatoComponent {
  contatoForm: any;
  pessoaId: any;

  get Nome() { return this.contatoForm.get('nome') }
  get Email() { return this.contatoForm.get('email') }
  get Idade() { return this.contatoForm.get('idade') }
  get Celular() { return this.contatoForm.get('celular') }

  constructor(
    private rout: Router,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogCadastroContatoComponent>,
    public dialog: MatDialog,
    public _serviceContato: ContatosService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.contatoForm = this.fb.group({
      nome: ["", Validators.required],
      email: ["", [Validators.pattern("^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([A-Za-z]{2,6}(?:\\.[A-Za-z]{2,6})?)$")]],
      idade: ["", Validators.required],
      celular: ["", Validators.required]
    });
    this.pessoaId = data;
  }


  Salvar() {
    let modelSalvar = {
      pessoaId: this.pessoaId,
      nome: this.Nome.value,
      email: this.Email.value,
      idade: this.Idade.value,
      telefone: this.Celular.value
    }

    if(!this.contatoForm.valid){
      Swal.fire(
        'Atenção!',
        'Verifique se os parâmetros foram preenchidos corretamente',
        'error'
      )
      return;
    }
    this._serviceContato.cadastrarContatos(modelSalvar).subscribe((data) =>{

      if(data['status']){
          Swal.fire(
              '',
              'Contato Cadastrada com Sucesso!',
              'success'
            )
            this.dialog.closeAll();
          }
        })

  }


}
