import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CalculateController } from './Calculate/calculate.controller';
import { CalculateService } from './Calculate/calculate.service';

@Module({
  imports: [HttpModule],
  controllers: [CalculateController],
  providers: [CalculateService],
})
export class AppModule {}
