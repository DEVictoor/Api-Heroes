import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { Heroe, HeroeDocument } from './schema/heroes.schema';
import { Model } from 'mongoose';

@Injectable()
export class HeroesService {
  constructor(
    @InjectModel(Heroe.name) private readonly heroeModule: Model<HeroeDocument>,
  ) {}

  async create(createHeroDto: CreateHeroDto) {
    const itemCreated = await this.heroeModule.create(createHeroDto);
    return itemCreated;
  }

  async findAll() {
    const allItem = await this.heroeModule.find();
    return allItem;
  }

  async findOne(id: string) {
    // console.log(id);
    const heroe = await this.heroeModule.findById(id);
    return heroe;
  }

  async update(id: string, updateHeroDto: UpdateHeroDto) {
    const updateById = await this.heroeModule.findByIdAndUpdate(
      id,
      updateHeroDto,
    );
    return updateById;
  }

  async remove(id: string) {
    await this.heroeModule.findByIdAndDelete(id);
    return 'Deleted';
  }
}
