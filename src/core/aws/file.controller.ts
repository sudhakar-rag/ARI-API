import { Controller } from '@nestjs/common/decorators/core/controller.decorator';
import { Post, UseInterceptors, HttpCode, UploadedFile, Param } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiOkResponse, ApiTags, ApiBearerAuth, ApiConsumes, ApiBody, ApiParam } from '@nestjs/swagger';
import { FileUploadService } from './services/file-upload.service';

@ApiTags('file')
@ApiBearerAuth()
@Controller('file')
export class FileController {
  constructor(private readonly file: FileUploadService) {
  }

  @ApiOperation({ description: 'Upload a file.' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: { type: 'object', properties: { file: { type: 'string', format: 'binary' } } }
  })
  @ApiParam({
    required: true,
    name: 'folder',
    description: 'Destination folder for uploaded file. Max 2MB file size allowed.',
  })
  @ApiOkResponse({ description: 'The full URL of the file.' })
  @HttpCode(200)
  @Post(':folder')
  @UseInterceptors(FileInterceptor('file', {
    limits: {
      fileSize: 2 * 1024 * 1024 // 2MB file size limit
    }
  }))
  public async upload(@Param('folder') folder: string, @UploadedFile() file: any): Promise<any> {
    return await this.file.upload(folder, file);
  }
}
