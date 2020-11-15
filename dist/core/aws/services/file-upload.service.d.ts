import * as AWS from 'aws-sdk';
import { ConfigService } from '../../config/config.service';
export declare class FileUploadService {
    private readonly configService;
    private readonly s3;
    constructor(configService: ConfigService, s3: AWS.S3);
    upload(folder: string, file: any): Promise<any>;
}
