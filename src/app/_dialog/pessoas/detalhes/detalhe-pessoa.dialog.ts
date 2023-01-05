import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PessoasService } from 'src/app/_service/pessoas/pessoas.service';
import Swal from 'sweetalert2';


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
    public _servicePessoa: PessoasService,
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
        celular: this.Pessoa['telefone'] || ''
      });
    }
  }

  SalvarAtualizacao() {
    let modelSalvar = {
      pessoaId: this.Pessoa['pessoaId'],
      nome: this.Nome.value,
      email: this.Email.value,
      idade: this.Idade.value,
      telefone: this.Celular.value
    }

    if(!this.pessoaForm.valid){
      Swal.fire(
        'Atenção!',
        'Verifique se os parâmetros foram preenchidos corretamente',
        'error'
      )
      return;
    }

    this._servicePessoa.atualizarPessoa(modelSalvar).subscribe((data) =>{
      if(data['status']){
        Swal.fire(
          '',
          'Pessoa Atualizada com Sucesso!',
          'success'
        )
        this.rout.navigate(['/pessoas']);
        this.dialog.closeAll();
      }
    })

  }

  ExcluirPessoa() {
    let modelExcluir = {
      pessoaId: this.Pessoa['pessoaId']
    }

    this._servicePessoa.deletarPessoa(modelExcluir).subscribe((data) =>{
      if(data['status']){
        Swal.fire(
          '',
          'Pessoa Deletada com Sucesso!',
          'success'
        )
        this.rout.navigate(['/pessoas']);
        this.dialog.closeAll();
      }
    })

  }


}
