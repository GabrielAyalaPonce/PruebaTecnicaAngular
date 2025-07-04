import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CarService } from '../../services/car.service'; // Corrige la ruta y el nombre

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // HttpClientModule está aquí
  templateUrl: './car.html',
  styleUrls: ['./car.css']
})
export class CarComponent {
  cars: any[] = [];

  constructor(private carService: CarService, private router: Router) {} // Usa PascalCase

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars().subscribe({
      next: (res: any) => {
        console.log('Respuesta:', res);
        this.cars = res.Results || res;
      },
      error: (err: any) => {
        console.error('Error al obtener los carros:', err);
      }
    });
  }

  onSubmit() {
    this.getCars();
  }
}