import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import  AssigmentControls  from '../models/assigmentControls';
import { environment } from "../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class AssigmentControlsService {

  private apiUrl = environment.backend+'api/assigmentControls'

  token = localStorage.getItem('token');
  
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
    })
  };
  
  constructor(private http: HttpClient) { }

  postAssigmentControls(assigmentControls:AssigmentControls){
    return this.http.post<boolean>(this.apiUrl + "/", assigmentControls);
  }

  getAssigmentControls(id:string){
    return this.http.get<AssigmentControls>(this.apiUrl + `/unique/${id}`);
  }

  deleteAssigmentControls(id:string){
    return this.http.delete(this.apiUrl + `/${id}`)
  }

  getAssigmentControlss(){
    return this.http.get<AssigmentControls[]>(this.apiUrl + "/")
  }

  putAssigmentControls(assigmentControls: AssigmentControls,id:string) {
    return this.http.put(this.apiUrl + `/editAssigmentControls/${id}`,assigmentControls);
  }

}
