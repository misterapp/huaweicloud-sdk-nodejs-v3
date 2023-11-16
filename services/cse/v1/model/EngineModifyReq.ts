

export class EngineModifyReq {
    public flavor?: string;
    public inputs?: { [key: string]: string; };
    public constructor() { 
    }
    public withFlavor(flavor: string): EngineModifyReq {
        this['flavor'] = flavor;
        return this;
    }
    public withInputs(inputs: { [key: string]: string; }): EngineModifyReq {
        this['inputs'] = inputs;
        return this;
    }
}