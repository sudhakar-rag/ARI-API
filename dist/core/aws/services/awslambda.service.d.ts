import * as AWS from 'aws-sdk';
export declare class AwsS3Service {
    private readonly lambda;
    constructor(lambda: AWS.S3);
    invokeLambda(params: InvokeLambdaInterface): Promise<any>;
}
export interface InvokeLambdaInterface {
    FunctionName: string;
    Payload: string;
}
