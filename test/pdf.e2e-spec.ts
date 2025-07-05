import { PdfService } from './pdf.service';
import { NotFoundException } from '@nestjs/common';

describe('PdfService', () => {
  let service: PdfService;

  beforeEach(() => {
    service = new PdfService();
  });

  it('should throw NotFoundException if file does not exist', async () => {
    await expect(service.getFilePath('nonexistent.pdf'))
      .rejects
      .toThrow(NotFoundException);
  });
});
