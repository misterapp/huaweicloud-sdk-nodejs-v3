import { StreamGraphInfo } from './StreamGraphInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFlinkJobExecutionGraphResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'execute_graph'?: StreamGraphInfo;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ShowFlinkJobExecutionGraphResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ShowFlinkJobExecutionGraphResponse {
        this['message'] = message;
        return this;
    }
    public withExecuteGraph(executeGraph: StreamGraphInfo): ShowFlinkJobExecutionGraphResponse {
        this['execute_graph'] = executeGraph;
        return this;
    }
    public set executeGraph(executeGraph: StreamGraphInfo  | undefined) {
        this['execute_graph'] = executeGraph;
    }
    public get executeGraph(): StreamGraphInfo | undefined {
        return this['execute_graph'];
    }
}