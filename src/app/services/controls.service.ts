import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import  Controls  from '../models/controls';
import { environment } from "../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class ControlsService {

  private apiUrl = environment.backend+'api/controls'

  token = localStorage.getItem('token');
  
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
    })
  };
  
  constructor(private http: HttpClient) { }

  postControls(controls:Controls){
    return this.http.post<boolean>(this.apiUrl + "/", controls);
  }

  getControls(id:string){
    return this.http.get<Controls>(this.apiUrl + `/unique/${id}`);
  }

  deleteControls(id:string){
    return this.http.delete(this.apiUrl + `/${id}`)
  }

  getControlss(){
    return this.http.get<Controls[]>(this.apiUrl + "/")
  }

  putControls(controls: Controls,id:string) {
    return this.http.put(this.apiUrl + `/editControls/${id}`,controls);
  }

}
