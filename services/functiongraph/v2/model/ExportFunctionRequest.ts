

export class ExportFunctionRequest {
    private 'function_urn'?: string;
    public config?: boolean;
    public code?: boolean;
    public type?: string;
    public constructor(functionUrn?: string) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): ExportFunctionRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withConfig(config: boolean): ExportFunctionRequest {
        this['config'] = config;
        return this;
    }
    public withCode(code: boolean): ExportFunctionRequest {
        this['code'] = code;
        return this;
    }
    public withType(type: string): ExportFunctionRequest {
        this['type'] = type;
        return this;
    }
}