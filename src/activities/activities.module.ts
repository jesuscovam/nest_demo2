import { Module } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityRespository } from './activity.respository';

@Module({
  imports: [TypeOrmModule.forFeature([ActivityRespository])],
  providers: [ActivitiesService],
  controllers: [ActivitiesController]
})
export class ActivitiesModule {}
