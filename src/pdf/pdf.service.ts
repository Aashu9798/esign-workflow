import { join, resolve } from 'path';
import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class PdfService {
  async getFilePath(filename: string): Promise<string> {
    const filePath = resolve('uploads', filename); // ✅ use resolve instead of join
    if (!fs.existsSync(filePath)) {
      throw new NotFoundException('File not found');
    }
    return filePath;
  }
}
