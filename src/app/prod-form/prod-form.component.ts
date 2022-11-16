import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Iproduct } from '../shared/modal/base';
import { SnakBarService } from '../shared/services/snakbar.service';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.scss']
})
export class ProdFormComponent implements OnInit {
  
  pName!:string;
  pDetails!:string;
  @Output() objEmitter : EventEmitter<Iproduct> = new EventEmitter<Iproduct>();

  snakMsg! : string;
  constructor(private productMsg:SnakBarService, private snackbar:MatSnackBar){

  }

  ngOnInit(): void {
  }
  onProductOrder(message:string, action:string){
    let obj:Iproduct = {
      name : this.pName,
      details : this.pDetails,
      status : 'Order Placed',
      id : this.uuid()
    }
    this.objEmitter.emit(obj);
    this.pName = '';
    this.pDetails = '';
    // this.snakMsg = this.productMsg.getMsg();
    this.snackbar.open(message, action, {duration:3000});
  }

  uuid(mask = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx') {
    return `${mask}`.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
