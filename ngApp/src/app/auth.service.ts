import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  road:any[]=[];

  private _registerUrl= "http://localhost:3000/api/register";
  private _loginUrl= "http://localhost:3000/api/login";
  private _ProductslistUrl = "http://localhost:3000/api/events";
  private _addProductUrl = "http://localhost:3000/api/add";
  private _deleteUrl = "http://localhost:3000/api/delete";
  private _updateUrl = "http://localhost:3000/api/edit";
  private _register1Url= "http://localhost:3000/api/login1";
  private _login1Url = "http://localhost:3000/api/login2";
  private __addProductUrl1 = "";
  private _tenderUrl = "http://localhost:3000/api/tender";
  private _addtenderUrl = "http://localhost:3000/api/add1";
  private _delatetenderUrl = "http://localhost:3000/api/delete1";
  private _appliedUrl = "http://localhost:3000/api/apply";
  
  constructor(private http:HttpClient) { }

  loadProducts(){
    return this.http.get<any>(this._ProductslistUrl);
  }
  loadProducts1(){
    return this.http.get<any>(this._ProductslistUrl);
  }
  loadTender(){
    return this.http.get<any>(this._tenderUrl);
  }
  loadTender3(){
    return this.http.get<any>(this._tenderUrl);
  }
  

  newProduct(item){
    return this.http.post<any>(this._addProductUrl, {"product":item}).subscribe(data=>{
      console.log(data)
    });
  }

  deleteProduct(_id:String){
    return this.http.delete<any>(this._deleteUrl + `/${_id}`).subscribe(data=>{
      console.log(data)
    })
  }
  

  registerUser(user){
   return this.http.post<any>(this._registerUrl, user)
  }
  registeredUser(user){
    return this.http.post<any>(this._register1Url, user)
  }

  loginUser(user){
    return this.http.post<any>(this._loginUrl, user)
  }
  loginedUser(user){
    return this.http.post<any>(this._login1Url, user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }
  gettoupdate(_id:String){
    return this.http.get<any>(this._ProductslistUrl + `/${_id}`)
  }
  updateproduct(id,item){
    return this.http.put<any>(this._updateUrl + `/${id}`,item).subscribe(res=>{
      console.log(res)
  },
  err=>{console.log(err)})
 }

 newTender(item){
   return this.http.post<any>(this._addtenderUrl, {"product":item}).subscribe(data=>{
     console.log(data)
   })
 }

 deleteTender(_id:String){
   return this.http.delete<any>(this._delatetenderUrl + `/${_id}`).subscribe(data=>{
     console.log(data)
   })
 }

 applyUser(user){
   return this.http.post<any>(this._appliedUrl, user)
 }


} 