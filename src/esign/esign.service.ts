import { Injectable } from '@nestjs/common';

@Injectable()
export class EsignService {
  async submitForEsign(payload: any): Promise<any> {
    const fakeTags = [
      { x: 100, y: 150, page: 1, role: 'Role1' },
      { x: 200, y: 250, page: 2, role: 'Role2' },
      { x: 300, y: 350, page: 3, role: 'Role3' },
    ];

    return {
      message: 'eSign flow simulated successfully',
      submittedFile: payload.pdfPath,
      signers: [
        payload.role1Email,
        payload.role2Email,
        payload.role3Email
      ],
      tags: fakeTags,
      status: 'Simulated and ready for signature'
    };
  }
}
