

export class DeleteGatewayResponseTypeV2Request {
    private 'instance_id'?: string;
    private 'group_id'?: string;
    private 'response_id'?: string;
    private 'response_type'?: DeleteGatewayResponseTypeV2RequestResponseTypeEnum | string;
    public constructor(instanceId?: string, groupId?: string, responseId?: string, responseType?: string) { 
        this['instance_id'] = instanceId;
        this['group_id'] = groupId;
        this['response_id'] = responseId;
        this['response_type'] = responseType;
    }
    public withInstanceId(instanceId: string): DeleteGatewayResponseTypeV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGroupId(groupId: string): DeleteGatewayResponseTypeV2Request {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withResponseId(responseId: string): DeleteGatewayResponseTypeV2Request {
        this['response_id'] = responseId;
        return this;
    }
    public set responseId(responseId: string  | undefined) {
        this['response_id'] = responseId;
    }
    public get responseId(): string | undefined {
        return this['response_id'];
    }
    public withResponseType(responseType: DeleteGatewayResponseTypeV2RequestResponseTypeEnum | string): DeleteGatewayResponseTypeV2Request {
        this['response_type'] = responseType;
        return this;
    }
    public set responseType(responseType: DeleteGatewayResponseTypeV2RequestResponseTypeEnum | string  | undefined) {
        this['response_type'] = responseType;
    }
    public get responseType(): DeleteGatewayResponseTypeV2RequestResponseTypeEnum | string | undefined {
        return this['response_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteGatewayResponseTypeV2RequestResponseTypeEnum {
    AUTH_FAILURE = 'AUTH_FAILURE',
    AUTH_HEADER_MISSING = 'AUTH_HEADER_MISSING',
    AUTHORIZER_FAILURE = 'AUTHORIZER_FAILURE',
    AUTHORIZER_CONF_FAILURE = 'AUTHORIZER_CONF_FAILURE',
    AUTHORIZER_IDENTITIES_FAILURE = 'AUTHORIZER_IDENTITIES_FAILURE',
    BACKEND_UNAVAILABLE = 'BACKEND_UNAVAILABLE',
    BACKEND_TIMEOUT = 'BACKEND_TIMEOUT',
    THROTTLED = 'THROTTLED',
    UNAUTHORIZED = 'UNAUTHORIZED',
    ACCESS_DENIED = 'ACCESS_DENIED',
    NOT_FOUND = 'NOT_FOUND',
    REQUEST_PARAMETERS_FAILURE = 'REQUEST_PARAMETERS_FAILURE',
    DEFAULT_4XX = 'DEFAULT_4XX',
    DEFAULT_5XX = 'DEFAULT_5XX',
    THIRD_AUTH_FAILURE = 'THIRD_AUTH_FAILURE',
    THIRD_AUTH_IDENTITIES_FAILURE = 'THIRD_AUTH_IDENTITIES_FAILURE',
    THIRD_AUTH_CONF_FAILURE = 'THIRD_AUTH_CONF_FAILURE'
}
