import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesService } from '../countries.service';
import { Country } from '../models/Countries';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor(private router : Router, 
    private countriesService : CountriesService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll () {
    this.countriesService.getAll().subscribe((countries: Country [])=> {
      this.allCountries = countries;
      this.totalRecords = countries.length;
      this.itemsPerPage = 10;
    })
  }

  allCountries : Country[] = [];  
  totalRecords: Number;
  page: Number = 1;
  itemsPerPage: Number;
  

}
