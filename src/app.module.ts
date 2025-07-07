import { Module } from '@nestjs/common';
import { PdfModule } from './pdf/pdf.module';
import { EsignModule } from './esign/esign.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PdfModule,
    EsignModule,
  ],
})
export class AppModule {}
