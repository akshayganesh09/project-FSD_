import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-athoregsiter',
  templateUrl: './athoregsiter.component.html',
  styleUrls: ['./athoregsiter.component.css']
})
export class AthoregsiterComponent implements OnInit {

  registerUserData = {email: '', password:'',authorityid:''};
  constructor(private _auth:AuthService, private _router: Router) { }

  ngOnInit() {
  }
  registereduser(){
    this._auth.registeredUser(this.registerUserData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token1', res.token)
        this._router.navigate(['/login1'])
      },
      err => console.log(err)
    )
  }
  

}
 