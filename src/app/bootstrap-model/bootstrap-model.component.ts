import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-bootstrap-model',
  templateUrl: './bootstrap-model.component.html',
  styleUrl: './bootstrap-model.component.scss'
})
export class BootstrapModelComponent {
  name!: string;
  image!: string;
  role!: string;
  id!: number;
  location!:string;
  reporting!:string;
  mail!:string;
  phone!:string;
  constructor(public bsModalRef: BsModalRef){}
}
