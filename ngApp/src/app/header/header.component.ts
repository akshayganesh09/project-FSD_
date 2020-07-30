import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  registerUserData = {email: '', password:''};
  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }
  logoutUser(){
    this._auth.registeredUser(this.registerUserData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.clear()
        this._router.navigate(['/home'])
      },
      err => console.log(err)
    )
  }

}
