import { Controller, Post, Body } from '@nestjs/common';
import { EsignService } from './esign.service';

@Controller('esign')
export class EsignController {
  constructor(private readonly esignService: EsignService) {}

  // Endpoint to add eSign tags and submit for signing.
  @Post('submit')
  async submitForEsign(@Body() payload: any) {
    // payload can include document id, tag coordinates, and role information.
    const result = await this.esignService.submitForEsign(payload);
    return result;
  }
}
