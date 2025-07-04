import { Component } from '@angular/core';
import { CarComponent } from './pages/cars/car';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarComponent], // No necesitas importar nada si solo usas <app-car>
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'carsEndpoint';
}