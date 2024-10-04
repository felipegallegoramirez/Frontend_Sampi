import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import  RiskFactors  from '../models/riskFactors';
import { environment } from "../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class RiskFactorsService {

  private apiUrl = environment.backend+'api/riskFactors'

  token = localStorage.getItem('token');
  
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
    })
  };
  
  constructor(private http: HttpClient) { }

  postRiskFactors(riskFactors:RiskFactors){
    return this.http.post<boolean>(this.apiUrl + "/", riskFactors);
  }

  getRiskFactors(id:string){
    return this.http.get<RiskFactors>(this.apiUrl + `/unique/${id}`);
  }

  deleteRiskFactors(id:string){
    return this.http.delete(this.apiUrl + `/${id}`)
  }

  getRiskFactorss(){
    return this.http.get<RiskFactors[]>(this.apiUrl + "/")
  }

  putRiskFactors(riskFactors: RiskFactors,id:string) {
    return this.http.put(this.apiUrl + `/editRiskFactors/${id}`,riskFactors);
  }

}
