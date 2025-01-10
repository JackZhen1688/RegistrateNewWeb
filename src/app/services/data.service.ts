import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


//@Injectable({
//  providedIn: 'root'
//})
export class DataService {

  //hostURL:string = "http://localhost:8080/RegistrationApp";
  hostURL:string = "http://localhost:8080/RegistrateNewApp";

  constructor(private url: string, private http: HttpClient) { }

  getPersonByUidandPwd(uid:any, pwd:any): Observable<any>{
    //return this.http.get(this.url+"/phonetype.json");
    return this.http.get(this.hostURL+"/personByUidandPwd/"+uid+"/"+pwd)
  }
  getPersonAllData(): Observable<any>{
    //return this.http.get(this.url+"/personall.json");
    return this.http.get(this.hostURL+"/personAll");
  }
  getPersonDetailData(ssn: any): Observable<any>{
    //return this.http.get(this.url+"/persondetail.json");
    return this.http.get(this.hostURL+"/personBySsn/"+ssn)
  }
  getPersonTypeData(): Observable<any>{
    //return this.http.get(this.url+"/persontype.json");
    return this.http.get(this.hostURL+"/personTypes")
  }
  getPersonTypeId(type: string): Observable<any>{
    //return this.http.get(this.url+"/personTypeId.json");
    return this.http.get(this.hostURL+"/personTypeByType/"+type)
  }
  getPhoneTypeData(): Observable<any>{
    //return this.http.get(this.url+"/phonetype.json");
    return this.http.get(this.hostURL+"/phoneTypes")
  }
  postPerson(formData: any): Observable<any>{
    return this.http.post(this.hostURL+"/postPerson", formData);
  }  

  deletePerson(id: string): Observable<any>{
    return this.http.delete(this.hostURL+"/deletePerson/"+id);
  } 

}
