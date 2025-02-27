import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import type { Card } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars: Card[] = [
    { id: uuid(), brand: 'Audi', price: 1000 },
    { id: uuid(), brand: 'BMW', price: 2000 },
    { id: uuid(), brand: 'Mercedes', price: 3000 },
  ];

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  findAll() {
    return this.cars;
  }
}
