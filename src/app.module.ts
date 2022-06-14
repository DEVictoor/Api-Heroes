import { Module } from '@nestjs/common';
import { variables } from './config/Variables';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { HeroesModule } from './heroes/heroes.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${variables.DB_USERNAME}:${variables.DB_PASSWORD}@cluster0.ygckm.mongodb.net/heroes?retryWrites=true&w=majority`,
    ),
    AuthModule,
    HeroesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
