import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HeroeDocument = Document & Heroe;

@Schema()
export class Heroe {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  edad: number;

  @Prop()
  image: string;
}

export const HeroeSchema = SchemaFactory.createForClass(Heroe);
