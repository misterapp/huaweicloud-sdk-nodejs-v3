import { UploadPackageGroupDetailsResp } from './UploadPackageGroupDetailsResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UploadJarsResponse extends SdkResponse {
    public status?: string;
    public description?: string;
    public resources?: Array<string>;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'group_name'?: string;
    public owner?: string;
    private 'is_async'?: boolean;
    public details?: Array<UploadPackageGroupDetailsResp>;
    private 'module_name'?: string;
    private 'module_type'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): UploadJarsResponse {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): UploadJarsResponse {
        this['description'] = description;
        return this;
    }
    public withResources(resources: Array<string>): UploadJarsResponse {
        this['resources'] = resources;
        return this;
    }
    public withCreateTime(createTime: number): UploadJarsResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): UploadJarsResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withGroupName(groupName: string): UploadJarsResponse {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withOwner(owner: string): UploadJarsResponse {
        this['owner'] = owner;
        return this;
    }
    public withIsAsync(isAsync: boolean): UploadJarsResponse {
        this['is_async'] = isAsync;
        return this;
    }
    public set isAsync(isAsync: boolean  | undefined) {
        this['is_async'] = isAsync;
    }
    public get isAsync(): boolean | undefined {
        return this['is_async'];
    }
    public withDetails(details: Array<UploadPackageGroupDetailsResp>): UploadJarsResponse {
        this['details'] = details;
        return this;
    }
    public withModuleName(moduleName: string): UploadJarsResponse {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
    }
    public withModuleType(moduleType: string): UploadJarsResponse {
        this['module_type'] = moduleType;
        return this;
    }
    public set moduleType(moduleType: string  | undefined) {
        this['module_type'] = moduleType;
    }
    public get moduleType(): string | undefined {
        return this['module_type'];
    }
}