import { Component, OnInit } from '@angular/core';
import { Sports } from '../models/Sports';
import { User } from '../models/User';
import { SportsService } from '../sports.service';
import { UserService } from '../user.service';
import { CompetitionService } from '../competition.service'
import { Competition } from '../models/Competition'
import { LocationService } from '../location.service';
import { CompetitorsService } from '../competitors.service';
import { Competitors } from '../models/Competitor';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent implements OnInit {

  constructor(private userService: UserService, private sportService: SportsService,
    private locationService: LocationService, private competitorsService: CompetitorsService,
    private competitionService: CompetitionService) {
  }

  ngOnInit(): void {
    this.newCompetition = new Competition();
    this.newSport = new Sports();

    this.getAllUsers();
    this.getAllSports();
    this.getAllLocations();
    this.getAllCompetitions();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((users: User[]) => {
      this.allUsers = users;
      for (let i = 0; i < this.allUsers.length; i++) {
        if (this.allUsers[i].type == 2 && this.allUsers[i].approved == true) this.allDelegates.push(this.allUsers[i])
      }
    })
  }
  getAllLocations() {
    this.locationService.getAll().subscribe((locations: Location[]) => {
      this.allLocations = locations;
    })
  }
  getAllSports() {
    this.sportService.getAll().subscribe((sports: Sports[]) => {
      this.allSports = sports;
      for (let i = 0; i < this.allSports.length; i++) {
        if (!this.sportNames.includes(this.allSports[i].name)) {
          this.sportNames.push(this.allSports[i].name);
        }
        if (this.allSports[i].type == 'i')
          this.allIndividualSports.push(this.allSports[i])
        else if (this.allSports[i].type == 'e')
          this.allEquipSports.push(this.allSports[i])
      }
    });
  }

  getAllCompetitions() {
    this.competitionService.getAll().subscribe((comp: Competition[])=> {
      this.allCompetitions = comp;
      for(let i = 0; i<this.allCompetitions.length; i++) {
        if(this.allCompetitions[i].identificator > this.newIdentificator)
          this.newIdentificator = this.allCompetitions[i].identificator;
      }
    })
  }

  approve(user: User) {
    this.userService.approve(user).subscribe((result) => {
      if (result['mess'] == 'ok') console.log('ok');
      const index = this.allUsers.indexOf(user);
      this.allUsers.splice(index, 1);
    })

  }

  decline(user: User) {
    this.userService.decline(user).subscribe((result) => {
      if (result['mess'] == 'ok') console.log('ok');
      const index = this.allUsers.indexOf(user);
      this.allUsers.splice(index, 1);
    })
  }
  addSport() {
    this.warning = ''
    this.message = ''
    if (this.newSport.name == '') { this.warning = 'You have to insert sport name!'; return; }
    if (this.newSport.type == '') { this.warning = 'You have to select type!'; return; }

    this.sportService.checkIfExists(this.newSport.name).subscribe((result) => {
      if (result == null)
        this.sportService.addSport(this.newSport).subscribe((result) => {
          if (result['mess'] == 'ok') {
            this.message = 'You have successfuly added new sport!'
          }
        })
      else
        this.sportService.updateSport(this.newSport).subscribe((result) => {
          if (result['mess'] == 'ok') {
            this.message = 'You have successfuly added new sport!'
          }
        })
    })
  }


  findDisciplines(name: string) {
    for (let i = 0; i < this.allSports.length; i++)
      if (name == this.allSports[i].name) {
        this.disciplineNames = this.allSports[i].discipline; break;
      }
  }

  selectCompetitors() {

    this.message2 = '';
    this.warning2 = '';
    this.message3 = '';
    this.warning3 = '';
    if (this.newCompetition.sport == '' || this.newCompetition.discipline == '' ||
      this.newCompetition.location == '' || this.newCompetition.gender == '' ||
      this.newCompetition.resultType == '' ||
      this.newCompetition.minSportsmen == 0 || this.newCompetition.maxSportsmen == 0 ||
      this.newCompetition.roundNumber == 0) { this.warning2 = 'You have to insert all fields!'; return; }
    else if (this.newCompetition.startDate > this.newCompetition.endDate) {
      this.warning2 = 'Competition start date must be before competition end date.'; return;
    }
    this.newCompetition.type = 'i';
    this.competitorsService.getBySport(this.newCompetition).subscribe((competitors: Competitors[]) => {
      this.allCompetitors = competitors;
      this.selected = true;
    })
  }

  createCompetition() {
    this.message2 = '';
    this.warning2 = '';
    //  this.selected = false; //prebaci na kraj
    if (this.newCompetition.competitors.length < this.newCompetition.minSportsmen ||
      this.newCompetition.competitors.length > this.newCompetition.maxSportsmen) {
      this.warning3 = "You must chose at least " + this.newCompetition.minSportsmen + "competitors and maximum of " +
        this.newCompetition.maxSportsmen + " competitors!"; return;
    }

    this.newCompetition.type = 'i';
    this.newCompetition.identificator = this.newIdentificator++;
    this.competitionService.checkIfExists(this.newCompetition).subscribe((result: Competition) => {
      if (result == null){
        this.competitionService.insertCompetition(this.newCompetition).subscribe((result: JSON) => {
        if (result['mess'] == 'ok') {
          this.message3 = 'You have created new competition!'
          this.warning3 = '';
          this.selected = false;
          this.newCompetition = new Competition();
        }
      });}
      else {
        this.warning3 = "Competition already exists!";
      }
    })

  }

  allUsers: User[] = [];
  allDelegates: User[] = [];
  allSports: Sports[] = [];
  allLocations: Location[] = [];
  allIndividualSports: Sports[] = [];
  allEquipSports: Sports[] = [];
  allCompetitors: Competitors[] = [];
  allCompetitions: Competition[] = [];

  newSport: Sports;
  newCompetition: Competition;
  disciplineNames: String[] = [];
  sportNames: String[] = [];
  startDate: Date;
  endDate: Date;
  selectedCompetitors: string[] = [];
  newIdentificator: number = 0;

  //used when adding sport
  message: string;
  warning: string;

  //used when adding competition
  message2: string;
  warning2: string;
  message3: string;
  warning3: string;
  selected: boolean;
}
