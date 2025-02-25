import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { PlanetResults} from './planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService{
  constructor(private http: HttpClient) { }

  getPlanets(): Observable<PlanetResults> {
    return this.http.get<PlanetResults>('https://swapi.dev/api/planets');
  }
}
