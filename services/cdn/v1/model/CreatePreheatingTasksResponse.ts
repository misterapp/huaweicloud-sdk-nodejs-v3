
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePreheatingTasksResponse extends SdkResponse {
    private 'preheating_task'?: string;
    public constructor() { 
        super();
    }
    public withPreheatingTask(preheatingTask: string): CreatePreheatingTasksResponse {
        this['preheating_task'] = preheatingTask;
        return this;
    }
    public set preheatingTask(preheatingTask: string  | undefined) {
        this['preheating_task'] = preheatingTask;
    }
    public get preheatingTask(): string | undefined {
        return this['preheating_task'];
    }
}