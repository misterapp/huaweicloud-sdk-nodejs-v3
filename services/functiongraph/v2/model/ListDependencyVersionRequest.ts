

export class ListDependencyVersionRequest {
    private 'depend_id'?: string;
    public marker?: string;
    public maxitems?: string;
    public constructor(dependId?: string) { 
        this['depend_id'] = dependId;
    }
    public withDependId(dependId: string): ListDependencyVersionRequest {
        this['depend_id'] = dependId;
        return this;
    }
    public set dependId(dependId: string  | undefined) {
        this['depend_id'] = dependId;
    }
    public get dependId(): string | undefined {
        return this['depend_id'];
    }
    public withMarker(marker: string): ListDependencyVersionRequest {
        this['marker'] = marker;
        return this;
    }
    public withMaxitems(maxitems: string): ListDependencyVersionRequest {
        this['maxitems'] = maxitems;
        return this;
    }
}