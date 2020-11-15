import { ConfigOptions } from './interfaces';
export declare class ConfigService {
    private readonly envConfig;
    constructor(options: ConfigOptions);
    get(key: string): string;
}
