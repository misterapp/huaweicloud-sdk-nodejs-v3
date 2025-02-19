

export class ListResourcePackagesRespMoudle {
    private 'module_name'?: string;
    private 'module_type'?: string;
    public status?: string;
    public description?: string;
    public resources?: Array<string>;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public constructor() { 
    }
    public withModuleName(moduleName: string): ListResourcePackagesRespMoudle {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
    }
    public withModuleType(moduleType: string): ListResourcePackagesRespMoudle {
        this['module_type'] = moduleType;
        return this;
    }
    public set moduleType(moduleType: string  | undefined) {
        this['module_type'] = moduleType;
    }
    public get moduleType(): string | undefined {
        return this['module_type'];
    }
    public withStatus(status: string): ListResourcePackagesRespMoudle {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): ListResourcePackagesRespMoudle {
        this['description'] = description;
        return this;
    }
    public withResources(resources: Array<string>): ListResourcePackagesRespMoudle {
        this['resources'] = resources;
        return this;
    }
    public withCreateTime(createTime: number): ListResourcePackagesRespMoudle {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ListResourcePackagesRespMoudle {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}