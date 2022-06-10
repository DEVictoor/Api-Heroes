import { Module } from '@nestjs/common';
import { variables } from './config/variables';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
// import { ItemsModule } from './items/items.module';
import { HeroesModule } from './heroes/heroes.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${variables.DB_USERNAME}:${variables.DB_PASSWORD}@cluster0.ygckm.mongodb.net/heroes?retryWrites=true&w=majority`,
    ),
    // UsersModule,
    AuthModule,
    // ItemsModule,
    HeroesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
