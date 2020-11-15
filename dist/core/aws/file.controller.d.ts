import { FileUploadService } from './services/file-upload.service';
export declare class FileController {
    private readonly file;
    constructor(file: FileUploadService);
    upload(folder: string, file: any): Promise<any>;
}
