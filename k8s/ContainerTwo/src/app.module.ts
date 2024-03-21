import { Module } from '@nestjs/common';
import { ProcessController } from './Process/process.controller';
import { ProcessService } from './Process/process.service';

@Module({
  imports: [],
  controllers: [ProcessController],
  providers: [ProcessService],
})
export class AppModule {}
