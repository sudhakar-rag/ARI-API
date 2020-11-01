import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class AwsS3Service {
    constructor(
        private readonly lambda: AWS.S3
    ) {

    }

    /**
     * invokeLambda
     */
    public async invokeLambda(params: InvokeLambdaInterface): Promise<any> {
        try {
            return params;
        } catch (error) {
            console.log(error);
            return {};
        }
    }
}

export interface InvokeLambdaInterface {
    FunctionName: string;
    Payload: string;
}
