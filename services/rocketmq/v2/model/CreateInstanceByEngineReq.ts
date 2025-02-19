import { BssParam } from './BssParam';


export class CreateInstanceByEngineReq {
    public name?: string;
    public description?: string;
    public engine?: CreateInstanceByEngineReqEngineEnum | string;
    private 'engine_version'?: CreateInstanceByEngineReqEngineVersionEnum | string;
    private 'storage_space'?: number;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    private 'available_zones'?: Array<string>;
    private 'product_id'?: CreateInstanceByEngineReqProductIdEnum | string;
    private 'ssl_enable'?: boolean;
    private 'storage_spec_code'?: CreateInstanceByEngineReqStorageSpecCodeEnum | string;
    private 'enterprise_project_id'?: string;
    private 'enable_acl'?: boolean;
    private 'ipv6_enable'?: boolean;
    private 'enable_publicip'?: boolean;
    private 'publicip_id'?: string;
    private 'broker_num'?: number;
    private 'bss_param'?: BssParam;
    public constructor(name?: string, engine?: string, engineVersion?: string, storageSpace?: number, vpcId?: string, subnetId?: string, securityGroupId?: string, availableZones?: Array<string>, productId?: string, storageSpecCode?: string, brokerNum?: number) { 
        this['name'] = name;
        this['engine'] = engine;
        this['engine_version'] = engineVersion;
        this['storage_space'] = storageSpace;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['security_group_id'] = securityGroupId;
        this['available_zones'] = availableZones;
        this['product_id'] = productId;
        this['storage_spec_code'] = storageSpecCode;
        this['broker_num'] = brokerNum;
    }
    public withName(name: string): CreateInstanceByEngineReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateInstanceByEngineReq {
        this['description'] = description;
        return this;
    }
    public withEngine(engine: CreateInstanceByEngineReqEngineEnum | string): CreateInstanceByEngineReq {
        this['engine'] = engine;
        return this;
    }
    public withEngineVersion(engineVersion: CreateInstanceByEngineReqEngineVersionEnum | string): CreateInstanceByEngineReq {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: CreateInstanceByEngineReqEngineVersionEnum | string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): CreateInstanceByEngineReqEngineVersionEnum | string | undefined {
        return this['engine_version'];
    }
    public withStorageSpace(storageSpace: number): CreateInstanceByEngineReq {
        this['storage_space'] = storageSpace;
        return this;
    }
    public set storageSpace(storageSpace: number  | undefined) {
        this['storage_space'] = storageSpace;
    }
    public get storageSpace(): number | undefined {
        return this['storage_space'];
    }
    public withVpcId(vpcId: string): CreateInstanceByEngineReq {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): CreateInstanceByEngineReq {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): CreateInstanceByEngineReq {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withAvailableZones(availableZones: Array<string>): CreateInstanceByEngineReq {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string>  | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones(): Array<string> | undefined {
        return this['available_zones'];
    }
    public withProductId(productId: CreateInstanceByEngineReqProductIdEnum | string): CreateInstanceByEngineReq {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: CreateInstanceByEngineReqProductIdEnum | string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): CreateInstanceByEngineReqProductIdEnum | string | undefined {
        return this['product_id'];
    }
    public withSslEnable(sslEnable: boolean): CreateInstanceByEngineReq {
        this['ssl_enable'] = sslEnable;
        return this;
    }
    public set sslEnable(sslEnable: boolean  | undefined) {
        this['ssl_enable'] = sslEnable;
    }
    public get sslEnable(): boolean | undefined {
        return this['ssl_enable'];
    }
    public withStorageSpecCode(storageSpecCode: CreateInstanceByEngineReqStorageSpecCodeEnum | string): CreateInstanceByEngineReq {
        this['storage_spec_code'] = storageSpecCode;
        return this;
    }
    public set storageSpecCode(storageSpecCode: CreateInstanceByEngineReqStorageSpecCodeEnum | string  | undefined) {
        this['storage_spec_code'] = storageSpecCode;
    }
    public get storageSpecCode(): CreateInstanceByEngineReqStorageSpecCodeEnum | string | undefined {
        return this['storage_spec_code'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateInstanceByEngineReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEnableAcl(enableAcl: boolean): CreateInstanceByEngineReq {
        this['enable_acl'] = enableAcl;
        return this;
    }
    public set enableAcl(enableAcl: boolean  | undefined) {
        this['enable_acl'] = enableAcl;
    }
    public get enableAcl(): boolean | undefined {
        return this['enable_acl'];
    }
    public withIpv6Enable(ipv6Enable: boolean): CreateInstanceByEngineReq {
        this['ipv6_enable'] = ipv6Enable;
        return this;
    }
    public set ipv6Enable(ipv6Enable: boolean  | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable(): boolean | undefined {
        return this['ipv6_enable'];
    }
    public withEnablePublicip(enablePublicip: boolean): CreateInstanceByEngineReq {
        this['enable_publicip'] = enablePublicip;
        return this;
    }
    public set enablePublicip(enablePublicip: boolean  | undefined) {
        this['enable_publicip'] = enablePublicip;
    }
    public get enablePublicip(): boolean | undefined {
        return this['enable_publicip'];
    }
    public withPublicipId(publicipId: string): CreateInstanceByEngineReq {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string  | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId(): string | undefined {
        return this['publicip_id'];
    }
    public withBrokerNum(brokerNum: number): CreateInstanceByEngineReq {
        this['broker_num'] = brokerNum;
        return this;
    }
    public set brokerNum(brokerNum: number  | undefined) {
        this['broker_num'] = brokerNum;
    }
    public get brokerNum(): number | undefined {
        return this['broker_num'];
    }
    public withBssParam(bssParam: BssParam): CreateInstanceByEngineReq {
        this['bss_param'] = bssParam;
        return this;
    }
    public set bssParam(bssParam: BssParam  | undefined) {
        this['bss_param'] = bssParam;
    }
    public get bssParam(): BssParam | undefined {
        return this['bss_param'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceByEngineReqEngineEnum {
    RELIABILITY = 'reliability'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceByEngineReqEngineVersionEnum {
    E_4_8_0 = '4.8.0'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceByEngineReqProductIdEnum {
    C6_4U8G_CLUSTER_SMALL = 'c6.4u8g.cluster.small',
    C6_4U8G_CLUSTER = 'c6.4u8g.cluster',
    C6_8U16G_CLUSTER = 'c6.8u16g.cluster',
    C6_12U24G_CLUSTER = 'c6.12u24g.cluster',
    C6_16U32G_CLUSTER = 'c6.16u32g.cluster'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceByEngineReqStorageSpecCodeEnum {
    DMS_PHYSICAL_STORAGE_HIGH_V2 = 'dms.physical.storage.high.v2',
    DMS_PHYSICAL_STORAGE_ULTRA_V2 = 'dms.physical.storage.ultra.v2'
}
