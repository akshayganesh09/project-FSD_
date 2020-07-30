import { Component, OnInit } from '@angular/core';
import { NoticeModel } from './noticemodel';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  applications: NoticeModel[];
  constructor(private _auth:AuthService, private router:Router) { }

  ngOnInit(): void {
   
  }

}
