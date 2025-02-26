import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    { id: 1, brand: 'Audi', price: 1000 },
    { id: 2, brand: 'BMW', price: 2000 },
    { id: 3, brand: 'Mercedes', price: 3000 },
  ];

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  findAll() {
    return this.cars;
  }
}
