import { Component, OnInit } from '@angular/core';
import { TenderModel } from '../tender/tender.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-tender',
  templateUrl: './home-tender.component.html',
  styleUrls: ['./home-tender.component.css']
})
export class HomeTenderComponent implements OnInit {

  title:string ="NOTICE";
  tenders : TenderModel[];
  constructor(private _auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this._auth.loadTender3().subscribe((data)=>{
      this.tenders=JSON.parse(JSON.stringify(data));
    })
  }

}
