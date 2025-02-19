import { UpdateElasticResourcePoolQueueScalingPolicyInfo } from './UpdateElasticResourcePoolQueueScalingPolicyInfo';


export class UpdateElasticResourcePoolQueueRequest {
    private 'elastic_resource_pool_name'?: string;
    private 'queue_name'?: string;
    public body?: UpdateElasticResourcePoolQueueScalingPolicyInfo;
    public constructor(elasticResourcePoolName?: string, queueName?: string) { 
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
        this['queue_name'] = queueName;
    }
    public withElasticResourcePoolName(elasticResourcePoolName: string): UpdateElasticResourcePoolQueueRequest {
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
        return this;
    }
    public set elasticResourcePoolName(elasticResourcePoolName: string  | undefined) {
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
    }
    public get elasticResourcePoolName(): string | undefined {
        return this['elastic_resource_pool_name'];
    }
    public withQueueName(queueName: string): UpdateElasticResourcePoolQueueRequest {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withBody(body: UpdateElasticResourcePoolQueueScalingPolicyInfo): UpdateElasticResourcePoolQueueRequest {
        this['body'] = body;
        return this;
    }
}