
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateRecordCallbackConfigResponse extends SdkResponse {
    public id?: string;
    private 'publish_domain'?: string | undefined;
    public app?: string;
    private 'notify_callback_url'?: string | undefined;
    private 'notify_event_subscription'?: Array<UpdateRecordCallbackConfigResponseNotifyEventSubscriptionEnum> | undefined;
    private 'sign_type'?: UpdateRecordCallbackConfigResponseSignTypeEnum | undefined;
    private 'create_time'?: string | undefined;
    private 'update_time'?: string | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateRecordCallbackConfigResponse {
        this['id'] = id;
        return this;
    }
    public withPublishDomain(publishDomain: string): UpdateRecordCallbackConfigResponse {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain() {
        return this['publish_domain'];
    }
    public withApp(app: string): UpdateRecordCallbackConfigResponse {
        this['app'] = app;
        return this;
    }
    public withNotifyCallbackUrl(notifyCallbackUrl: string): UpdateRecordCallbackConfigResponse {
        this['notify_callback_url'] = notifyCallbackUrl;
        return this;
    }
    public set notifyCallbackUrl(notifyCallbackUrl: string | undefined) {
        this['notify_callback_url'] = notifyCallbackUrl;
    }
    public get notifyCallbackUrl() {
        return this['notify_callback_url'];
    }
    public withNotifyEventSubscription(notifyEventSubscription: Array<UpdateRecordCallbackConfigResponseNotifyEventSubscriptionEnum>): UpdateRecordCallbackConfigResponse {
        this['notify_event_subscription'] = notifyEventSubscription;
        return this;
    }
    public set notifyEventSubscription(notifyEventSubscription: Array<UpdateRecordCallbackConfigResponseNotifyEventSubscriptionEnum> | undefined) {
        this['notify_event_subscription'] = notifyEventSubscription;
    }
    public get notifyEventSubscription() {
        return this['notify_event_subscription'];
    }
    public withSignType(signType: UpdateRecordCallbackConfigResponseSignTypeEnum): UpdateRecordCallbackConfigResponse {
        this['sign_type'] = signType;
        return this;
    }
    public set signType(signType: UpdateRecordCallbackConfigResponseSignTypeEnum | undefined) {
        this['sign_type'] = signType;
    }
    public get signType() {
        return this['sign_type'];
    }
    public withCreateTime(createTime: string): UpdateRecordCallbackConfigResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): UpdateRecordCallbackConfigResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateRecordCallbackConfigResponseNotifyEventSubscriptionEnum {
    RECORD_NEW_FILE_START = 'RECORD_NEW_FILE_START',
    RECORD_FILE_COMPLETE = 'RECORD_FILE_COMPLETE',
    RECORD_OVER = 'RECORD_OVER',
    RECORD_FAILED = 'RECORD_FAILED'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateRecordCallbackConfigResponseSignTypeEnum {
    MD5 = 'MD5',
    HMACSHA256 = 'HMACSHA256'
}
