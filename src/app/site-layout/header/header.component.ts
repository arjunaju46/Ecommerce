import { Component } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  SerchTerm:any


  constructor(private ps:ProductService){ }

  ngOnInit():void{

  }

searchData(event:any){
  this.SerchTerm=event.target.value
  // send the data to behaviour subject
  this.ps.search.next(this.SerchTerm)

}




}
