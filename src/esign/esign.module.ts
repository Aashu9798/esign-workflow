import { Module } from '@nestjs/common';
import { EsignController } from './esign.controller';
import { EsignService } from './esign.service';

@Module({
  controllers: [EsignController],
  providers: [EsignService],
})
export class EsignModule {}
