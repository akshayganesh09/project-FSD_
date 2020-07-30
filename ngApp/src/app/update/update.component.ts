import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from '../events/productmodel';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id='';
  title:string = "Edit your complaint";
  road=<any>('')
  productItem=new ProductModel(null,null,null,null,null,null,null,null)

  constructor(private _auth:AuthService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(parameterMap=>{
      this.id=parameterMap.get('id')
      console.log(this.id)
    })
    this._auth.gettoupdate(this.id).subscribe(res=>{
      this.road=JSON.parse(JSON.stringify(res));
      console.log(this.road);
    })
  }
  UpdateProduct(){
    this._auth.updateproduct(this.road._id,this.productItem)
    this.router.navigate(['/events']);
   
  }
}
