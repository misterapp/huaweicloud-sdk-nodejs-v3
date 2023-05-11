import { PageInfo } from './PageInfo';
import { PolicyState } from './PolicyState';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPolicyStatesByAssignmentIdResponse extends SdkResponse {
    public value?: Array<PolicyState>;
    private 'page_info'?: PageInfo | undefined;
    public constructor() { 
        super();
    }
    public withValue(value: Array<PolicyState>): ListPolicyStatesByAssignmentIdResponse {
        this['value'] = value;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListPolicyStatesByAssignmentIdResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
}