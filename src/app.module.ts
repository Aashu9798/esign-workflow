import { Module } from '@nestjs/common';
import { PdfModule } from './pdf/pdf.module';
import { EsignModule } from './esign/esign.module';

@Module({
  imports: [
    PdfModule,
    EsignModule,
    // Optionally, you can import a config module here as well.
  ],
})
export class AppModule {}
