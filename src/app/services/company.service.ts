import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import  Company  from '../models/company';
import { environment } from "../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private apiUrl = environment.backend+'api/company'

  token = localStorage.getItem('token');
  
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
    })
  };
  
  constructor(private http: HttpClient) { }

  postCompany(company:Company){
    return this.http.post<boolean>(this.apiUrl + "/", company);
  }

  getCompany(id:string){
    return this.http.get<Company>(this.apiUrl + `/unique/${id}`);
  }

  deleteCompany(id:string){
    return this.http.delete(this.apiUrl + `/${id}`)
  }

  getCompanys(){
    return this.http.get<Company[]>(this.apiUrl + "/")
  }

  putCompany(company: Company,id:string) {
    return this.http.put(this.apiUrl + `/editCompany/${id}`,company);
  }

}
