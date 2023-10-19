

export class PlaneId {
    private 'plane_id'?: string;
    public constructor(planeId?: string) { 
        this['plane_id'] = planeId;
    }
    public withPlaneId(planeId: string): PlaneId {
        this['plane_id'] = planeId;
        return this;
    }
    public set planeId(planeId: string  | undefined) {
        this['plane_id'] = planeId;
    }
    public get planeId(): string | undefined {
        return this['plane_id'];
    }
}