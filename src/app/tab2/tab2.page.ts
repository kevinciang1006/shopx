import { Component } from '@angular/core';
import { CountriesDB } from '../@fake-db/countries';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  countries = CountriesDB;

  constructor() {}

}
