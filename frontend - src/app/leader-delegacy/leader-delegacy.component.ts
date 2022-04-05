import { Component, OnInit } from '@angular/core';
import { CompetitionService } from '../competition.service'
import { Competition } from '../models/Competition';

@Component({
  selector: 'app-leader-delegacy',
  templateUrl: './leader-delegacy.component.html',
  styleUrls: ['./leader-delegacy.component.css']
})
export class LeaderDelegacyComponent implements OnInit {

  constructor(private competitionService: CompetitionService) { }

  ngOnInit(): void {

    this.startingDateTime = new Date();
    this.getAllCompetitions();
  }

  getAllCompetitions() {
    this.competitionService.getAll().subscribe((competition: Competition[]) => {
      this.allCompetitions = competition;
    })
  }

  schedule(competition: Competition) {
    this.checkAvaliableLocation(competition);
  }

  checkAvaliableLocation(competition: Competition) {
    
  }

  allCompetitions: Competition[] = [];
  startingDateTime: Date;
}
