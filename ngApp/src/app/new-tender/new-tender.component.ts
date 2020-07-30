import { Component, OnInit } from '@angular/core';
import { TenderModel } from '../tender/tender.model';
import { AuthService } from '../auth.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-new-tender',
  templateUrl: './new-tender.component.html',
  styleUrls: ['./new-tender.component.css']
})
export class NewTenderComponent implements OnInit {

 
  title:string = "Add Tender Notice";
  
  tenderItem= new TenderModel(null,null,null,null,null,null);
  constructor(private _auth:AuthService, private router:Router) { }
  

  ngOnInit(): void {
  
  }
  AddTender(){
   this._auth.newTender(this.tenderItem);
   console.log('called');
   alert('success');
   this.router.navigate(['/tender'])
  }

}
