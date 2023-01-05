import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ContatosService } from '../_service/contatos/contatos.service';
import { SuporteService } from '../_service/suporte/suporte.service';

@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.component.html',
  styleUrls: ['./suporte.component.scss']
})
export class SuporteComponent {
  title = 'Suporte';

  result: any;

  constructor(
    private rout: Router,
    public dialog: MatDialog,
    private _serviceSuporte: SuporteService
  ) {
    this.listarSuporte()
  }

  listarSuporte() {
    let model = {}
    this._serviceSuporte.StartBrecked(model).subscribe(data => {
      this.result = data;
    })
  }


}
