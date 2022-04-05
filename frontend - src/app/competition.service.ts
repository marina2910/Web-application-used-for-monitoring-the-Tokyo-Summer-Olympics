import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Competition } from './models/Competition';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http : HttpClient) { }
  uri = 'http://localhost:4000'

  checkIfExists(newCompetition: Competition ) {
    const data = {
      sport: newCompetition.sport, 
      discipline: newCompetition.discipline,
      type: newCompetition.type,
      gender: newCompetition.gender
    }
    
    return this.http.post(`${this.uri}/competition/exists`, data)
  }

  insertCompetition(newCompetition: Competition) {
    const data = {
      sport: newCompetition.sport, 
      discipline: newCompetition.discipline,
      location: newCompetition.location,
      startDate: newCompetition.startDate,
      endDate: newCompetition.endDate,
      type: newCompetition.type,
      competitors: newCompetition.competitors,
      delegate: newCompetition.delegate,
      minSportsmen: newCompetition.minSportsmen,
      maxSportsmen : newCompetition.maxSportsmen,
      resultType: newCompetition.resultType,
      roundNumber: newCompetition.roundNumber,
      gender: newCompetition.gender,
      identificator: newCompetition.identificator
    }
    return this.http.post(`${this.uri}/competition/insert`, data)
  }

  getAll () {
    return this.http.get(`${this.uri}/competition/getAll`)    
  }

}
