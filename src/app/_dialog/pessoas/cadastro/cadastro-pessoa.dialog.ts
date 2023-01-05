import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PessoasService } from 'src/app/_service/pessoas/pessoas.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.dialog.html',
  styleUrls: ['./cadastro-pessoa.dialog.scss']
})
export class DialogCadastroPessoaComponent {
  pessoaForm: any;

  get Nome() { return this.pessoaForm.get('nome') }
  get Email() { return this.pessoaForm.get('email') }
  get Idade() { return this.pessoaForm.get('idade') }
  get Celular() { return this.pessoaForm.get('celular') }

  constructor(
    private rout: Router,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogCadastroPessoaComponent>,
    public dialog: MatDialog,
    public _servicePessoa: PessoasService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.pessoaForm = this.fb.group({
      nome: ["", Validators.required],
      email: ["", [Validators.pattern("^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([A-Za-z]{2,6}(?:\\.[A-Za-z]{2,6})?)$")]],
      idade: ["", Validators.required],
      celular: ["", Validators.required]
    });

  }


  Cadastrar() {
    let modelSalvar = {
      nome: this.Nome.value,
      email: this.Email.value,
      idade: this.Idade.value,
      phone: this.Celular.value,
      number: 0
    }

    if(!this.pessoaForm.valid){
      Swal.fire(
        'Atenção!',
        'Verifique se os parâmetros foram preenchidos corretamente',
        'error'
      )
      return;
    }

    this._servicePessoa.cadastrarPessoa(modelSalvar).subscribe(data =>{
      if(data['status']){
        Swal.fire(
          '',
          'Pessoa Cadastrada com Sucesso!',
          'success'
        )
        this.dialog.closeAll();
      }
    })

  }


}
