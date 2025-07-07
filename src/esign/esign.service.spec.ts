import { EsignService } from './esign.service';

describe('EsignService', () => {
  let service: EsignService;

  beforeEach(() => {
    service = new EsignService();
  });

  it('should return simulated eSign result', async () => {
    const payload = {
      pdfPath: 'uploads/sample.pdf',
      role1Email: 'a@domain.com',
      role2Email: 'b@domain.com',
      role3Email: 'c@domain.com',
    };

    const result = await service.submitForEsign(payload);

    expect(result.status).toBe('Simulated and ready for signature');
    expect(result.signers.length).toBe(3);
  });
});
