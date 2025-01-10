import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class RestfulService extends DataService {

  constructor(http: HttpClient) {
    super("assets", http); 
  }
}
