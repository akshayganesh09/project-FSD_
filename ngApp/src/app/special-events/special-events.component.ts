import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../events/productmodel';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  title: string =" complaints on roads";
  roads : ProductModel[];
  imageWidth : number=400;
  imageMargin: number=2;
  imageHeight: number=400;

  constructor(private _auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this._auth.loadProducts1().subscribe((data)=>{
      this.roads=JSON.parse(JSON.stringify(data));
    })
  }

}
