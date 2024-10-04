import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import  ExpertMethodology  from '../models/expertMethodology';
import { environment } from "../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class ExpertMethodologyService {

  private apiUrl = environment.backend+'api/expertMethodology'

  token = localStorage.getItem('token');
  
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
    })
  };
  
  constructor(private http: HttpClient) { }

  postExpertMethodology(expertMethodology:ExpertMethodology){
    return this.http.post<boolean>(this.apiUrl + "/", expertMethodology);
  }

  getExpertMethodology(id:string){
    return this.http.get<ExpertMethodology>(this.apiUrl + `/unique/${id}`);
  }

  deleteExpertMethodology(id:string){
    return this.http.delete(this.apiUrl + `/${id}`)
  }

  getExpertMethodologys(){
    return this.http.get<ExpertMethodology[]>(this.apiUrl + "/")
  }

  putExpertMethodology(expertMethodology: ExpertMethodology,id:string) {
    return this.http.put(this.apiUrl + `/editExpertMethodology/${id}`,expertMethodology);
  }

}
