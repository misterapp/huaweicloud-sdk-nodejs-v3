import { V2UserData } from './V2UserData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUsersOfStreamResponse extends SdkResponse {
    private 'data_list'?: Array<V2UserData> | undefined;
    private 'X-Request-Id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<V2UserData>): ListUsersOfStreamResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<V2UserData> | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList() {
        return this['data_list'];
    }
    public withXRequestId(xRequestId: string): ListUsersOfStreamResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
}