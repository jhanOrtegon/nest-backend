import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findOneById(id);
  }

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Post()
  createCar(@Body() payload: unknown) {
    return payload;
  }

  @Patch('/:id')
  updateCar(@Body() payload: unknown) {
    return payload;
  }

  @Delete('/:id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }
}
