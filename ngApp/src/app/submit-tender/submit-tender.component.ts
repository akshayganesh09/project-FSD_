import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-tender',
  templateUrl: './submit-tender.component.html',
  styleUrls: ['./submit-tender.component.css']
})
export class SubmitTenderComponent implements OnInit {

  appieduserData = {email:'', number:'', name:''}
  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }

  applyUser(){
     this._auth.applyUser(this.appieduserData)
     .subscribe(
        res=>{console.log(res)
          this._router.navigate(['/done'])
        }, 
        err=> console.log(err)
     )
  }

}
