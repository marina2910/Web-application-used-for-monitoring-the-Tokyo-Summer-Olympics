import { Component, OnInit } from '@angular/core';
import { CompetitionService } from '../competition.service';
import { CompetitorsService } from '../competitors.service';
import { Competition } from '../models/Competition';
import { Sports } from '../models/Sports';
import { Sportsman } from '../models/Sportsmen';
import { User } from '../models/User';
import { SportsService } from '../sports.service';
import { SportsmenService } from '../sportsmen.service';

@Component({
  selector: 'app-delegate',
  templateUrl: './delegate.component.html',
  styleUrls: ['./delegate.component.css']
})
export class DelegateComponent implements OnInit {

  constructor(private sportsmenService: SportsmenService, private sportsService: SportsService,
    private competitorService: CompetitorsService, private competitionService: CompetitionService) {
    this.loggedIn = JSON.parse(localStorage.getItem('user'));
    this.newSportman = new Sportsman();
  }

  ngOnInit(): void {
    this.getMySportsmen();
    this.getAllSports();
  }

  getMySportsmen() {
    this.sportsmenService.getMySportsmen(this.loggedIn.country).subscribe((sportsmen: Sportsman[]) => {
      this.mySportsmen = sportsmen;
    })
  }
  getAllSports() {
    this.sportsService.getAll().subscribe((sports: Sports[]) => {
      this.allSports = sports;
      for (let i = 0; i < this.allSports.length; i++) {
        if (!this.sportNames.includes(this.allSports[i].name)) {
          this.sportNames.push(this.allSports[i].name);
          console.log(this.allSports[i].name);
        }
      }
    });
  }

  insertNewSportsman() {
    let update = false;
    this.warning = "";
    this.message = "";
    this.newSportman.country = this.loggedIn.country;

    if (this.newSportman.name == "") { this.warning = "You have to insert name and surname!"; return; }
    if (this.newSportman.sport == "") { this.warning = this.warning + "\n You have to select sport!"; return; }
    if (this.newSportman.gender == "") { this.warning = this.warning + "\n You have to select gender!"; return; }

    this.sportsmenService.checkIfExists(this.newSportman).subscribe((result: Sportsman) => {
      if (result != null) {
        let foundSportsman = result;
        if (foundSportsman.name == this.newSportman.name && foundSportsman.sport != this.newSportman.sport) { this.warning = this.warning + "\n Sportsman is already compiting in " + foundSportsman.sport; return; }
        this.newSportman.discipline.push(this.selectedDiscipline)
        this.sportsmenService.updateMySportsman(this.newSportman).subscribe((result: JSON) => {
          if (result['mess'] == 'ok') this.message = 'You succesfully added new discipline for ' + this.newSportman.name + '!';
        });
      } else {
        this.newSportman.discipline.push(this.selectedDiscipline)
        this.sportsmenService.insertSportsman(this.newSportman).subscribe((result: JSON) => {
          if (result['mess'] == 'ok') this.message = 'You succesfully added ' + this.newSportman.name + '!';
        })
      }
      this.newSportman.country = ""
      this.newSportman.name = ""
      this.newSportman.sport = ""
      this.newSportman.discipline = []
      this.newSportman.gender = ""
      this.getMySportsmen();
    })
  }

  findDisciplines(name: string) {
    this.warning2 = "";
    for (let i = 0; i < this.allSports.length; i++)
      if (name == this.allSports[i].name) {
        this.chosedSport = this.allSports[i]
        this.disciplineNames = this.allSports[i].discipline; break;
      }
    this.findSportsmen('');
  }
  findSportsmen(discipline: string) {
    this.chosedSportsmen = [];
    for (let i = 0; i < this.mySportsmen.length; i++) {
      if (this.selectedSport == this.mySportsmen[i].sport)
        if (discipline != '') {
          if (this.mySportsmen[i].discipline.includes(discipline))
            this.chosedSportsmen.push(this.mySportsmen[i]);
        }
        else
          this.chosedSportsmen.push(this.mySportsmen[i]);
    }

    if (this.chosedSportsmen.length == 0) this.warning2 += " Your delegacy has no sportsmen in this sport."
    if (this.chosedSport.type == "e" && this.chosedSport.min > this.chosedSportsmen.length) {
      this.warning2 = "Minimum of members for this sport is: " + this.chosedSport.min + ". \n Your delegacy has only " + this.chosedSportsmen.length;
    }
  }

  registerForCompetition() {
    this.warning2 = "";
    if (this.selectedSport == '') this.warning2 += " You have to select sport.";
    else if (this.chosedSportsmen.length == 0) this.warning2 += " Your delegacy has no sportsmen in this sport."
    else if (this.chosedSport.discipline.length != 0 && this.selectedDiscipline == '') this.warning2 += " You have to select discipline."
    else if (this.selectedType == '') this.warning2 += " You have to select type";
    else if (this.selectedGender == '') this.warning2 += " You have to select gender";
    else if (this.selectedSportsman.length == 0) this.warning2 += " You have to select sportsmen.";
    let newCompetition: Competition = new Competition();
    newCompetition.sport = this.selectedSport;
    newCompetition.discipline = this.selectedDiscipline;
    newCompetition.type = this.selectedType
    newCompetition.gender = this.selectedGender;
    this.competitionService.checkIfExists(newCompetition).subscribe((result: Competition) => {
      if (result == null) this.competitorService.insertCompetitors(this.selectedSportsman, this.selectedSport, this.selectedDiscipline, this.selectedType, this.loggedIn.country, this.selectedGender).subscribe((result: JSON) => {
        if (result['mess'] == 'ok') {
          console.log('ok');
        }
      }); else {
        this.warning2 = "The competition already started. You are late."
      }
    })

  }

  mySportsmen: Sportsman[] = [];
  allSports: Sports[] = [];
  sportNames: String[] = [];
  disciplineNames: String[] = [];
  loggedIn: User;

  newSportman: Sportsman;
  loaded: number
  message: string;
  warning: string;

  chosedSportsmen: Sportsman[] = []; //for registration
  chosedSport: Sports; //for registration
  selectedDiscipline: string = '';
  selectedSport: string = '';
  selectedSportsman: string[] = [];
  selectedType: string = '';
  selectedGender: string = '';
  warning2: string = '';
}
