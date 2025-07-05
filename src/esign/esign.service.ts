import { Injectable } from '@nestjs/common';

@Injectable()
export class EsignService {
  async submitForEsign(payload: any): Promise<any> {
    // Mocked eSign flow
    return {
      message: 'eSign flow simulated successfully',
      submittedFile: payload.pdfPath,
      signers: [
        payload.role1Email,
        payload.role2Email,
        payload.role3Email
      ],
      status: 'Simulated and ready for signature'
    };
  }
}
