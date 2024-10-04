import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import  Risk  from '../models/risk';
import { environment } from "../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class RiskService {

  private apiUrl = environment.backend+'api/risk'

  token = localStorage.getItem('token');

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
    })
  };
  
  constructor(private http: HttpClient) { }

  postRisk(risk:Risk){
    return this.http.post<boolean>(this.apiUrl + "/", risk);
  }

  getRisk(id:string){
    return this.http.get<Risk>(this.apiUrl + `/unique/${id}`);
  }

  deleteRisk(id:string){
    return this.http.delete(this.apiUrl + `/${id}`)
  }

  getRisks(){
    return this.http.get<Risk[]>(this.apiUrl + "/")
  }

  putRisk(risk: Risk,id:string) {
    return this.http.put(this.apiUrl + `/editRisk/${id}`,risk);
  }

}
