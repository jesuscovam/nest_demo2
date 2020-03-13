import { Module } from '@nestjs/common';

import { ActivitiesModule } from './activities/activities.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeModuleConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeModuleConfig),
    ActivitiesModule],
 
})
export class AppModule {}
