import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ProductModel } from '../events/productmodel';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  title:string = "Add Your Complaints";

  constructor(private _auth:AuthService, private router:Router) { }
  productItem = new ProductModel(null,null,null,null,null,null,null,null)

  ngOnInit(): void {
  }
  Addproduct(){
    this._auth.newProduct(this.productItem);
    console.log('called');
    alert('success');
    this.router.navigate(['/events'])

  }

}
