

export class JobMapInfo {
    private 'old_job_id'?: number;
    private 'new_job_id'?: number;
    public remark?: string;
    public constructor() { 
    }
    public withOldJobId(oldJobId: number): JobMapInfo {
        this['old_job_id'] = oldJobId;
        return this;
    }
    public set oldJobId(oldJobId: number  | undefined) {
        this['old_job_id'] = oldJobId;
    }
    public get oldJobId(): number | undefined {
        return this['old_job_id'];
    }
    public withNewJobId(newJobId: number): JobMapInfo {
        this['new_job_id'] = newJobId;
        return this;
    }
    public set newJobId(newJobId: number  | undefined) {
        this['new_job_id'] = newJobId;
    }
    public get newJobId(): number | undefined {
        return this['new_job_id'];
    }
    public withRemark(remark: string): JobMapInfo {
        this['remark'] = remark;
        return this;
    }
}