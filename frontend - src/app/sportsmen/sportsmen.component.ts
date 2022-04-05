import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Country } from '../models/Countries';
import { Sports } from '../models/Sports';
import { Sportsman } from '../models/Sportsmen';
import { SportsService } from '../sports.service';
import { SportsmenService } from '../sportsmen.service';

@Component({
  selector: 'app-sportsmen',
  templateUrl: './sportsmen.component.html',
  styleUrls: ['./sportsmen.component.css']
})
export class SportsmenComponent implements OnInit {

  constructor(private countriesService: CountriesService,
    private sportsService: SportsService,
    private sportsmenService: SportsmenService) {


  }

  ngOnInit(): void {
    this.selectedSportsman = new Sportsman();
    // this.getAll()

    this.sportsmenService.getAll().subscribe((sportsmen: Sportsman[]) => {
      this.allSportsman = sportsmen;
      this.loaded++

    })
    this.countriesService.getAll().subscribe((countries: Country[]) => {
      this.allCountries = countries;
      this.loaded++

    })
    this.sportsService.getAll().subscribe((sports: Sports[]) => {
      this.allSports = sports;
      this.loaded++
      for (let i = 0; i < this.allSports.length; i++) {
        if (!this.sportNames.includes(this.allSports[i].name)) {
          this.sportNames.push(this.allSports[i].name);
          console.log(this.allSports[i].name);
        }
      }
    });

  }

  getAll() {
    this.getAllCountries();
    this.getAllSportsman();
    this.getAllSports();
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

  getAllCountries() {
    this.countriesService.getAll().subscribe((countries: Country[]) => {
      this.allCountries = countries;
    })
  }

  getAllSportsman() {
    this.sportsmenService.getAll().subscribe((sportsmen: Sportsman[]) => {
      this.allSportsman = sportsmen;
    })
  }

  getSportsman() {
    if (this.selectedDiscipline != '') {
      this.selectedSportsman.discipline.push(this.selectedDiscipline);
    } else
      this.selectedSportsman.discipline.push(this.selectedDiscipline);
    this.sportsmenService.getSelectedSportstman(this.selectedSportsman).subscribe((sportsmen: Sportsman[]) => {
      this.allSportsman = sportsmen;

      this.selectedSportsman.name="";
      this.selectedSportsman.gender="";
      this.selectedSportsman.discipline=[];
      this.selectedSportsman.sport="";
      this.selectedSportsman.country="";
      this.disciplineNames = [];
    })
  }

  findDisciplines(name: string) {
    for (let i = 0; i < this.allSports.length; i++)
      if (name == this.allSports[i].name) {
        this.disciplineNames = this.allSports[i].discipline; break;
      }
  }
  selectedSport: Sports;
  allSportsman: Sportsman[] = [];
  selectedSportsman: Sportsman;
  disciplineNames: String[] = [];
  sportNames: String[] = [];
  allCountries: Country[] = [];
  allSports: Sports[] = [];
  loaded: number = 0;
  selectedDiscipline: string = "";
}
