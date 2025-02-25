import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlanetComponent} from './planet/planet.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlanetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-app';
}
