import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'
  
  getAll() {
    return this.http.get(`${this.uri}/location/getAll`)
  }
}
