import { DeleteDiagnosisReportRequest } from './DeleteDiagnosisReportRequest';


export class DeleteDiagnosisTaskRequest {
    private 'instance_id'?: string;
    public body?: DeleteDiagnosisReportRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): DeleteDiagnosisTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DeleteDiagnosisReportRequest): DeleteDiagnosisTaskRequest {
        this['body'] = body;
        return this;
    }
}