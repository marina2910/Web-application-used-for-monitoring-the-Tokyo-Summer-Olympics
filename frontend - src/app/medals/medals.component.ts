import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Country } from '../models/Countries';

@Component({
  selector: 'app-medals',
  templateUrl: './medals.component.html',
  styleUrls: ['./medals.component.css']
})
export class MedalsComponent implements OnInit {

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.getAllCountries();

  }

  getAllCountries() {
    this.countriesService.getAll().subscribe((countries: Country[]) => {
      this.allCountries = countries;
      this.totalRecords = countries.length;
      this.itemsPerPage = 10;
      this.allCountries.sort((a: Country, b: Country) => {
        if (a.golden != b.golden)
          return b.golden - a.golden;
        else if (a.silver != b.silver)
          return b.silver - a.silver;
        else if (a.bronze != b.bronze)
          return b.bronze - a.bronze;
        else
          return 0

      })

      for (let i = 0; i < this.allCountries.length; i++) {
        this.allCountries[i].total = this.allCountries[i].golden + this.allCountries[i].silver + this.allCountries[i].bronze;
        this.allCountries[i].rank = i + 1;
      }
    })
  }

  sortCountries() {
    let a: Country;
    let b: Country;
    for (let i = 0; i < this.allCountries.length - 1; i++) {
      a = this.allCountries[i]
      for (let j = 1; j < this.allCountries.length; j++) {
        b = this.allCountries[j]

        if (a.golden == b.golden && a.silver == b.silver && a.bronze > b.bronze)
          continue;
        else if (a.golden == b.golden && a.silver > b.silver)
          continue;
        else if (a.golden == b.golden && a.silver > b.silver)
          continue;
        else if (a.golden == b.golden && a.silver == b.silver && a.bronze == b.bronze)
          continue;
        else {
          let temp: Country = this.allCountries[i];
          this.allCountries[i] = this.allCountries[j]
          this.allCountries[j] = temp;
        }
      }
      this.allCountries[i].rank = i + 1;
    }
  }
  allCountries: Country[] = [];
  rank: Number;
  totalRecords: Number;
  page: Number = 1;
  itemsPerPage: Number;
}
