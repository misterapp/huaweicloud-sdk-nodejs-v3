

export class QueueDetails {
    private 'queue_id'?: number;
    private 'queue_name'?: string;
    public description?: string;
    public owner?: string;
    private 'create_time'?: number;
    private 'queue_type'?: string;
    private 'cu_count'?: number;
    private 'charging_mode'?: number;
    private 'resource_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'cidr_in_vpc'?: string;
    private 'cidr_in_mgntsubnet'?: string;
    private 'cidr_in_subnet'?: string;
    private 'resource_mode'?: number;
    public platform?: string;
    private 'is_restarting'?: boolean;
    public labels?: string;
    public feature?: string;
    private 'resource_type'?: string;
    private 'cu_spec'?: number;
    private 'cu_scale_out_limit'?: number;
    private 'cu_scale_in_limit'?: number;
    private 'elastic_resource_pool_name'?: string;
    public constructor() { 
    }
    public withQueueId(queueId: number): QueueDetails {
        this['queue_id'] = queueId;
        return this;
    }
    public set queueId(queueId: number  | undefined) {
        this['queue_id'] = queueId;
    }
    public get queueId(): number | undefined {
        return this['queue_id'];
    }
    public withQueueName(queueName: string): QueueDetails {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withDescription(description: string): QueueDetails {
        this['description'] = description;
        return this;
    }
    public withOwner(owner: string): QueueDetails {
        this['owner'] = owner;
        return this;
    }
    public withCreateTime(createTime: number): QueueDetails {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withQueueType(queueType: string): QueueDetails {
        this['queue_type'] = queueType;
        return this;
    }
    public set queueType(queueType: string  | undefined) {
        this['queue_type'] = queueType;
    }
    public get queueType(): string | undefined {
        return this['queue_type'];
    }
    public withCuCount(cuCount: number): QueueDetails {
        this['cu_count'] = cuCount;
        return this;
    }
    public set cuCount(cuCount: number  | undefined) {
        this['cu_count'] = cuCount;
    }
    public get cuCount(): number | undefined {
        return this['cu_count'];
    }
    public withChargingMode(chargingMode: number): QueueDetails {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: number  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): number | undefined {
        return this['charging_mode'];
    }
    public withResourceId(resourceId: string): QueueDetails {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): QueueDetails {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCidrInVpc(cidrInVpc: string): QueueDetails {
        this['cidr_in_vpc'] = cidrInVpc;
        return this;
    }
    public set cidrInVpc(cidrInVpc: string  | undefined) {
        this['cidr_in_vpc'] = cidrInVpc;
    }
    public get cidrInVpc(): string | undefined {
        return this['cidr_in_vpc'];
    }
    public withCidrInMgntsubnet(cidrInMgntsubnet: string): QueueDetails {
        this['cidr_in_mgntsubnet'] = cidrInMgntsubnet;
        return this;
    }
    public set cidrInMgntsubnet(cidrInMgntsubnet: string  | undefined) {
        this['cidr_in_mgntsubnet'] = cidrInMgntsubnet;
    }
    public get cidrInMgntsubnet(): string | undefined {
        return this['cidr_in_mgntsubnet'];
    }
    public withCidrInSubnet(cidrInSubnet: string): QueueDetails {
        this['cidr_in_subnet'] = cidrInSubnet;
        return this;
    }
    public set cidrInSubnet(cidrInSubnet: string  | undefined) {
        this['cidr_in_subnet'] = cidrInSubnet;
    }
    public get cidrInSubnet(): string | undefined {
        return this['cidr_in_subnet'];
    }
    public withResourceMode(resourceMode: number): QueueDetails {
        this['resource_mode'] = resourceMode;
        return this;
    }
    public set resourceMode(resourceMode: number  | undefined) {
        this['resource_mode'] = resourceMode;
    }
    public get resourceMode(): number | undefined {
        return this['resource_mode'];
    }
    public withPlatform(platform: string): QueueDetails {
        this['platform'] = platform;
        return this;
    }
    public withIsRestarting(isRestarting: boolean): QueueDetails {
        this['is_restarting'] = isRestarting;
        return this;
    }
    public set isRestarting(isRestarting: boolean  | undefined) {
        this['is_restarting'] = isRestarting;
    }
    public get isRestarting(): boolean | undefined {
        return this['is_restarting'];
    }
    public withLabels(labels: string): QueueDetails {
        this['labels'] = labels;
        return this;
    }
    public withFeature(feature: string): QueueDetails {
        this['feature'] = feature;
        return this;
    }
    public withResourceType(resourceType: string): QueueDetails {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withCuSpec(cuSpec: number): QueueDetails {
        this['cu_spec'] = cuSpec;
        return this;
    }
    public set cuSpec(cuSpec: number  | undefined) {
        this['cu_spec'] = cuSpec;
    }
    public get cuSpec(): number | undefined {
        return this['cu_spec'];
    }
    public withCuScaleOutLimit(cuScaleOutLimit: number): QueueDetails {
        this['cu_scale_out_limit'] = cuScaleOutLimit;
        return this;
    }
    public set cuScaleOutLimit(cuScaleOutLimit: number  | undefined) {
        this['cu_scale_out_limit'] = cuScaleOutLimit;
    }
    public get cuScaleOutLimit(): number | undefined {
        return this['cu_scale_out_limit'];
    }
    public withCuScaleInLimit(cuScaleInLimit: number): QueueDetails {
        this['cu_scale_in_limit'] = cuScaleInLimit;
        return this;
    }
    public set cuScaleInLimit(cuScaleInLimit: number  | undefined) {
        this['cu_scale_in_limit'] = cuScaleInLimit;
    }
    public get cuScaleInLimit(): number | undefined {
        return this['cu_scale_in_limit'];
    }
    public withElasticResourcePoolName(elasticResourcePoolName: string): QueueDetails {
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
        return this;
    }
    public set elasticResourcePoolName(elasticResourcePoolName: string  | undefined) {
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
    }
    public get elasticResourcePoolName(): string | undefined {
        return this['elastic_resource_pool_name'];
    }
}