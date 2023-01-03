import { Component } from '@angular/core';
import { PessoasService } from 'src/app/_service/pessoas/pessoas.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.scss']
})
export class PessoaComponent {
  title = 'Pessoas';

  listaPessoas: any;

  constructor(
    private _servicePessoas: PessoasService,
  ) {
    this.listarPessoas()
  }

  listarPessoas() {
    let model = { }
    this._servicePessoas.listarPessoas(model).subscribe(data => {
      this.listaPessoas = data;
    })
  }

  ListaContatos(item: any){
    console.log('item',item)
  }
}
