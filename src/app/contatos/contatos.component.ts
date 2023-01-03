import { Component } from '@angular/core';
import { PessoasService } from 'src/app/_service/pessoas/pessoas.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent {
  title = 'Contatos';
  listaPessoas: any;
  constructor(
    private _servicePessoas: PessoasService,
  ){
    
    let model = {

    }
    this._servicePessoas.listarPessoas(model).subscribe(data =>{
      this.listaPessoas = data;
    })
  }
}
