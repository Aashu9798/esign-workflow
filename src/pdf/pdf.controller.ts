import { Controller, Post, UseInterceptors, UploadedFile, Get, Param, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { PdfService } from './pdf.service';
import { Response } from 'express';
import { extname } from 'path';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  // Endpoint to handle file upload
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads', // Ensure this folder exists or create it dynamically
      filename: (req, file, callback) => {
        // Generate a unique file name
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
      },
    }),
  }))
  
  async uploadPdf(@UploadedFile() file: Express.Multer.File) {
  console.log('Uploaded file:', file);
  if (!file) {
    throw new Error('No file uploaded');
  }
  return { message: 'PDF uploaded successfully', filePath: file.path };
}



  // Endpoint to preview PDF (simply serve the file)
  @Get('preview/:filename')
    async previewPdf(@Param('filename') filename: string, @Res() res: Response) {
    const filePath = await this.pdfService.getFilePath(filename);
    return res.sendFile(filePath); // ✅ DO NOT pass `{ root: '.' }`
    }

}
