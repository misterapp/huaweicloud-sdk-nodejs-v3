import { PortList } from './PortList';
import { TagList } from './TagList';


export class CreateEndpointServiceRequestBody {
    private 'port_id'?: string;
    private 'service_name'?: string;
    private 'vpc_id'?: string;
    private 'approval_enabled'?: boolean;
    private 'service_type'?: string;
    private 'server_type'?: CreateEndpointServiceRequestBodyServerTypeEnum | string;
    public ports?: Array<PortList>;
    private 'tcp_proxy'?: CreateEndpointServiceRequestBodyTcpProxyEnum | string;
    public tags?: Array<TagList>;
    public description?: string;
    private 'enable_policy'?: boolean;
    public constructor(portId?: string, vpcId?: string, serverType?: string, ports?: Array<PortList>) { 
        this['port_id'] = portId;
        this['vpc_id'] = vpcId;
        this['server_type'] = serverType;
        this['ports'] = ports;
    }
    public withPortId(portId: string): CreateEndpointServiceRequestBody {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withServiceName(serviceName: string): CreateEndpointServiceRequestBody {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withVpcId(vpcId: string): CreateEndpointServiceRequestBody {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withApprovalEnabled(approvalEnabled: boolean): CreateEndpointServiceRequestBody {
        this['approval_enabled'] = approvalEnabled;
        return this;
    }
    public set approvalEnabled(approvalEnabled: boolean  | undefined) {
        this['approval_enabled'] = approvalEnabled;
    }
    public get approvalEnabled(): boolean | undefined {
        return this['approval_enabled'];
    }
    public withServiceType(serviceType: string): CreateEndpointServiceRequestBody {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withServerType(serverType: CreateEndpointServiceRequestBodyServerTypeEnum | string): CreateEndpointServiceRequestBody {
        this['server_type'] = serverType;
        return this;
    }
    public set serverType(serverType: CreateEndpointServiceRequestBodyServerTypeEnum | string  | undefined) {
        this['server_type'] = serverType;
    }
    public get serverType(): CreateEndpointServiceRequestBodyServerTypeEnum | string | undefined {
        return this['server_type'];
    }
    public withPorts(ports: Array<PortList>): CreateEndpointServiceRequestBody {
        this['ports'] = ports;
        return this;
    }
    public withTcpProxy(tcpProxy: CreateEndpointServiceRequestBodyTcpProxyEnum | string): CreateEndpointServiceRequestBody {
        this['tcp_proxy'] = tcpProxy;
        return this;
    }
    public set tcpProxy(tcpProxy: CreateEndpointServiceRequestBodyTcpProxyEnum | string  | undefined) {
        this['tcp_proxy'] = tcpProxy;
    }
    public get tcpProxy(): CreateEndpointServiceRequestBodyTcpProxyEnum | string | undefined {
        return this['tcp_proxy'];
    }
    public withTags(tags: Array<TagList>): CreateEndpointServiceRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withDescription(description: string): CreateEndpointServiceRequestBody {
        this['description'] = description;
        return this;
    }
    public withEnablePolicy(enablePolicy: boolean): CreateEndpointServiceRequestBody {
        this['enable_policy'] = enablePolicy;
        return this;
    }
    public set enablePolicy(enablePolicy: boolean  | undefined) {
        this['enable_policy'] = enablePolicy;
    }
    public get enablePolicy(): boolean | undefined {
        return this['enable_policy'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateEndpointServiceRequestBodyServerTypeEnum {
    VM = 'VM',
    VIP = 'VIP',
    LB = 'LB'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateEndpointServiceRequestBodyTcpProxyEnum {
    CLOSE = 'close',
    TOA_OPEN = 'toa_open',
    PROXY_OPEN = 'proxy_open',
    OPEN = 'open',
    PROXY_VNI = 'proxy_vni'
}
