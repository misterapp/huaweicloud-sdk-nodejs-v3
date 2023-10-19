

export class ListAppQuotaBindableAppsRequest {
    private 'instance_id'?: string;
    private 'app_quota_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'app_name'?: string;
    public constructor(instanceId?: string, appQuotaId?: string) { 
        this['instance_id'] = instanceId;
        this['app_quota_id'] = appQuotaId;
    }
    public withInstanceId(instanceId: string): ListAppQuotaBindableAppsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAppQuotaId(appQuotaId: string): ListAppQuotaBindableAppsRequest {
        this['app_quota_id'] = appQuotaId;
        return this;
    }
    public set appQuotaId(appQuotaId: string  | undefined) {
        this['app_quota_id'] = appQuotaId;
    }
    public get appQuotaId(): string | undefined {
        return this['app_quota_id'];
    }
    public withOffset(offset: number): ListAppQuotaBindableAppsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAppQuotaBindableAppsRequest {
        this['limit'] = limit;
        return this;
    }
    public withAppName(appName: string): ListAppQuotaBindableAppsRequest {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
}