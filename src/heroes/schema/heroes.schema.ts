import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HeroeDocument = Document & Heroe;

@Schema()
export class Heroe {
  @Prop()
  name: string;

  @Prop()
  lastName: string;

  @Prop()
  birthday: Date;

  @Prop()
  placeBirth: string;

  @Prop()
  height: string;

  @Prop()
  spouce: string;

  @Prop()
  children: string;

  @Prop()
  parents: string;

  @Prop()
  observations: string;

  @Prop()
  image: string;
}

export const HeroeSchema = SchemaFactory.createForClass(Heroe);
