import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-show-one-product',
  templateUrl: './show-one-product.component.html',
  styleUrls: ['./show-one-product.component.css']
})
export class ShowOneProductComponent {
@Input()product:any;
@Output()private sendNotif=new EventEmitter();
@Output()private senddisliketo=new EventEmitter();


sendInformationToparent(selectedProduct:any){
  this.sendNotif.emit(selectedProduct)
}

senddislike(selectedProduct:any){
  this.senddisliketo.emit(selectedProduct)
}
showMsg(){
alert('SAE4')
}
}
