import { Module } from '@nestjs/common';
import { CalculateController } from './Calculate/calculate.controller';
import { CalculateService } from './Calculate/calculate.service';

@Module({
  imports: [],
  controllers: [CalculateController],
  providers: [CalculateService],
})
export class AppModule {}
