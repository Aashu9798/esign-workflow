import { Injectable } from '@nestjs/common';

@Injectable()
export class EsignService {
  async submitForEsign(payload: any): Promise<any> {
    const fakeTags = [
      {
        step: 1,
        role: 'Role1',
        email: 'a@domain.com',
        action: 'Uploaded PDF and added tags for Role2 and Role3',
      },
      {
        step: 2,
        role: 'Role2',
        email: 'b@domain.com',
        action: 'Signed and forwarded to Role3',
      },
      {
          step: 3,
          role: 'Role3',
          email: 'c@domain.com',
          action: 'Signed the document',
      }    
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
