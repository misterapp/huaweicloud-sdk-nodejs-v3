

export class UpdateFuncSnapshotRequest {
    public action?: UpdateFuncSnapshotRequestActionEnum | string;
    private 'function_urn'?: string;
    public constructor(action?: string, functionUrn?: string) { 
        this['action'] = action;
        this['function_urn'] = functionUrn;
    }
    public withAction(action: UpdateFuncSnapshotRequestActionEnum | string): UpdateFuncSnapshotRequest {
        this['action'] = action;
        return this;
    }
    public withFunctionUrn(functionUrn: string): UpdateFuncSnapshotRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateFuncSnapshotRequestActionEnum {
    ENABLE = 'enable',
    DISABLE = 'disable'
}
