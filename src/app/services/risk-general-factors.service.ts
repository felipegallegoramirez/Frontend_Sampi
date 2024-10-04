import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import  RiskGeneralFactors  from '../models/riskGeneralFactors';
import { environment } from "../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class RiskGeneralFactorsService {

  private apiUrl = environment.backend+'api/riskGeneralFactors'

  token = localStorage.getItem('token');
  
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
    })
  };
  
  constructor(private http: HttpClient) { }

  postRiskGeneralFactors(riskGeneralFactors:RiskGeneralFactors){
    return this.http.post<boolean>(this.apiUrl + "/", riskGeneralFactors);
  }

  getRiskGeneralFactors(id:string){
    return this.http.get<RiskGeneralFactors>(this.apiUrl + `/unique/${id}`);
  }

  deleteRiskGeneralFactors(id:string){
    return this.http.delete(this.apiUrl + `/${id}`)
  }

  getRiskGeneralFactorss(){
    return this.http.get<RiskGeneralFactors[]>(this.apiUrl + "/")
  }

  putRiskGeneralFactors(riskGeneralFactors: RiskGeneralFactors,id:string) {
    return this.http.put(this.apiUrl + `/editRiskGeneralFactors/${id}`,riskGeneralFactors);
  }

}
