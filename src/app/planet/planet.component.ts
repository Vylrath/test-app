import { Component } from '@angular/core';
import {PlanetResults} from '../planet';
import {PlanetService} from '../planet.service';

@Component({
  selector: 'app-planet',
  imports: [],
  templateUrl: './planet.component.html',
  styleUrl: './planet.component.scss',
})
export class PlanetComponent {
  constructor(private planetService: PlanetService) {}

  planets? : PlanetResults;

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.planetService.getPlanets().subscribe({
      next: (data : PlanetResults) => {
        this.planets = data;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Data fetching completed');
      }
    });
  }
}
