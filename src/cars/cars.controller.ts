import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import type { Card } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
@UsePipes(ValidationPipe)
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOneById(id);
  }

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Post()
  createCar(@Body() payload: CreateCarDto) {
    return payload;
  }

  @Patch('/:id')
  updateCar(@Body() payload: Card) {
    return payload;
  }

  @Delete('/:id')
  deleteCar(@Param('id') id: string) {
    return { id };
  }
}
