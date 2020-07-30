import { Component, OnInit } from '@angular/core';

import { TenderModel } from './tender.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.css']
})
export class TenderComponent implements OnInit {

  title: String ="Tender Notice";
  tenders: TenderModel[];
  constructor(private _auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this._auth.loadTender().subscribe((data)=>{
      this.tenders=JSON.parse(JSON.stringify(data));
    })
  }

  deleteOnetender(_id:String){
    if(confirm('Are you sure to delete this product?')==true){
      this._auth.deleteTender(_id);
      this.ngOnInit();
    }
  }
}
