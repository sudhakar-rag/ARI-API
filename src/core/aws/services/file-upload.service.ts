import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { v4 as uuid } from 'uuid';
import * as path from 'path';
import { ConfigService } from '../../config/config.service';

/**
 * A file upload service that stores files in AWS S3 bucket.
 */
@Injectable()
export class FileUploadService {
  constructor(
    private readonly configService: ConfigService,
    private readonly s3: AWS.S3,
  ) {
  }

  /**
   * Upload a file to S3.
   * @param folder a custom folder name (can be nested, ex: a/b/c)
   * @param file the file object as it comes from `multer`
   */
  public async upload(folder: string, file: any): Promise<any> {
    const bucketName = this.configService.get('S3_BUCKET_NAME');
    const fileKey = `${folder}/${uuid().replace(/-/g, '')}${path.extname(file.originalname)}`;

    await this.s3.putObject({
      ACL: 'public-read',
      Body: file.buffer,
      Bucket: bucketName,
      Key: fileKey,
      ContentType: file.mimetype,
    }).promise();

    return `https://${bucketName}.s3.amazonaws.com/${fileKey}`;
  }
}
