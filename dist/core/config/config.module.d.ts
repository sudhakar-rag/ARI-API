import { DynamicModule } from '@nestjs/common';
export interface ConfigModuleOptions {
    folder: string;
}
export declare class ConfigModule {
    static register(options: ConfigModuleOptions): DynamicModule;
}
