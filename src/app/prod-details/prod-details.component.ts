import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iproduct, IstatusObj } from '../shared/modal/base';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.scss']
})
export class ProdDetailsComponent implements OnInit {

  @Input() product!:Iproduct;
  @Output() statusEmiiter : EventEmitter<IstatusObj> = new EventEmitter<IstatusObj>();
  constructor() { }

  ngOnInit(): void {
  }

  chnageStatus(arg:string, id: string){
    let obj:IstatusObj = {
      arg : arg,
      id :id
    }
    this.statusEmiiter.emit(obj);
  }
}
