import { PrecheckClusterRequestBody } from './PrecheckClusterRequestBody';


export class CreatePreCheckRequest {
    private 'cluster_id'?: string;
    public body?: PrecheckClusterRequestBody;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CreatePreCheckRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: PrecheckClusterRequestBody): CreatePreCheckRequest {
        this['body'] = body;
        return this;
    }
}