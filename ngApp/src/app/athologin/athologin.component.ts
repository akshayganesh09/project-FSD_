import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-athologin',
  templateUrl: './athologin.component.html',
  styleUrls: ['./athologin.component.css']
})
export class AthologinComponent implements OnInit {

  loginUserData={email: '', password:'',authorityid:''}
  constructor(private _auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  loginedUser() {
    this._auth.loginedUser(this.loginUserData)
    .subscribe(
      res =>{
        console.log(res)
      localStorage.setItem('token1', res.token)
      this.router.navigate(['/events1'])
      },
      err => console.log(err)
    )
  }

}
