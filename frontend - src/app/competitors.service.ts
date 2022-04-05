import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Competition } from './models/Competition';

@Injectable({
  providedIn: 'root'
})
export class CompetitorsService {
  
  constructor(private http: HttpClient) { }
  uri = 'http://localhost:4000'
  getAll() {
    return this.http.get(`${this.uri}/competitors/getAll`)
  }

  insertCompetitors(names: string[], sport: string, discipline: string, type:string, country: string, gender: string) {
    const data = {
      names: names,
      sport: sport, 
      discipline: discipline,
      type: type,
      country : country,
      gender: gender
    }
    return this.http.post(`${this.uri}/competitors/insert`, data)
  }

  getBySport(competition: Competition) {
    const data = {
      sport: competition.sport, 
      discipline: competition.discipline,
      type: competition.type,
      gender: competition.gender
    }
    return this.http.post(`${this.uri}/competitors/getBySport`, data)
  }

}
