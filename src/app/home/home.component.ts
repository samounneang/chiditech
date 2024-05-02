import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,MatButtonToggleModule,
  ],
  template: `
    <section class = "from-search">
    <!--< <form>
        <input type="text" placeholder="Filter by course" #filter (input)="filterResults(filter.value)">
        button class="primary" type="button" (click)="filterResults(filter.value)">Search</button> 
      </form>-->
      
      <mat-button-toggle-group name="fontStyle" aria-label="Font Style">
      <mat-button-toggle value="bold">Basic</mat-button-toggle>
      <mat-button-toggle value="italic">Advance</mat-button-toggle>
      <mat-button-toggle value="underline">Professional</mat-button-toggle>
    </mat-button-toggle-group>
    

    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation">
      </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.title.toLowerCase().includes(text.toLowerCase())
    );
  }
}