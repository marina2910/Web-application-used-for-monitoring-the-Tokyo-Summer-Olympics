import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sportsman } from './models/Sportsmen';

@Injectable({
  providedIn: 'root'
})
export class SportsmenService {

  constructor(private http : HttpClient) { }

  
  uri = 'http://localhost:4000'
  
  getAll() {
    return this.http.get(`${this.uri}/sportsmen/getAll`)
  }

  checkIfExists(sportsman: Sportsman) {
    const data = {
      name : sportsman.name,
      country : sportsman.country
    }
    
    return this.http.post(`${this.uri}/sportsmen/exists`, data);
  }

  getSelectedSportstman(sportsman : Sportsman) {
    let discp = sportsman.discipline.pop()
    if(discp == null || discp == undefined || discp == "") discp = ""
    const data = {
      name : sportsman.name,
      country : sportsman.country,
      discipline: discp,
      sport : sportsman.sport,
      gender : sportsman.gender
    }
    
    return this.http.post(`${this.uri}/sportsmen/selected`, data);
  }

  getMySportsmen (country : string) {
    const data = {
      country: country
    }
    return this.http.post(`${this.uri}/sportsmen/countrySportsmen`, data);
  }

  updateMySportsman(sportsman : Sportsman) {
    const data = {
      name : sportsman.name,
      country : sportsman.country,
      discipline : sportsman.discipline.pop(),
      sport : sportsman.sport,
    }
    return this.http.post(`${this.uri}/sportsmen/update`, data);
  }
  insertSportsman (sportsman : Sportsman) {
    let discipline = sportsman.discipline.pop();
    if(discipline == undefined) {discipline=""}
    const data = {
      name : sportsman.name,
      country : sportsman.country,
      discipline : discipline,
      sport : sportsman.sport,
      gender : sportsman.gender
    }
    return this.http.post(`${this.uri}/sportsmen/insert`, data);
  }
 }
