import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HeroeDocument = Document & Heroe;

@Schema()
export class Heroe {
  @Prop()
  name: string;

  @Prop()
  edad: number;

  @Prop()
  description: string;

  @Prop()
  image: string;
}

export const HeroeSchema = SchemaFactory.createForClass(Heroe);
