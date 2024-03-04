import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CalculateController } from './Calculate/calculate.controller';
import { CalculateService } from './Calculate/calculate.service';
import { StoreFileController } from './StoreFile/storeFile.controller';
import { StoreFileService } from './StoreFile/storeFile.service';

@Module({
  imports: [HttpModule],
  controllers: [CalculateController, StoreFileController],
  providers: [CalculateService, StoreFileService],
})
export class AppModule {}
