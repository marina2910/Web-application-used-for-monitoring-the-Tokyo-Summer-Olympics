import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sports } from './models/Sports';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(private http : HttpClient) { }

  
  uri = 'http://localhost:4000'
  
  getAll() {
    return this.http.get(`${this.uri}/sport/getAll`)
  }

  addSport (sport: Sports) {
    const data = {
      name : sport.name,
      discipline : sport.discipline,
      type : sport.type,
      min : sport.min,
      max : sport.max
    }
    return this.http.post(`${this.uri}/sport/addSport`, data);
  }

  checkIfExists (name:string) {
    const data = {
      name: name
    }
    return this.http.post(`${this.uri}/sport/exists`, data);
  }

  updateSport(newSport: Sports) {
    
    const data = {
      name: newSport.name,
      discipline: newSport.discipline
    }
    return this.http.post(`${this.uri}/sport/update`, data);
  }
}
