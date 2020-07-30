import { Component, OnInit } from '@angular/core';
import { ProductModel } from './productmodel';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  
  title: string ="YOUR COMPLAINTS";
  roads : ProductModel[];
  imageWidth : number=300;
  imageMargin: number=2;
  imageHeight: number=300;
  
  constructor(private _auth:AuthService, private router:Router ) { }
  



  ngOnInit() :void { 
    this._auth.loadProducts().subscribe((data)=>{
      this.roads=JSON.parse(JSON.stringify(data));
    })
  }

  deleteOne(_id:String){
    if(confirm('Are you sure to delete this product?')==true){
      this._auth.deleteProduct(_id);
      this.ngOnInit();
    }
  }
  editproduct(id){
    this.router.navigate(['/edit',id]);
  }

}
