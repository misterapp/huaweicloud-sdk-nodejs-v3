

export class ProjectPrivilege {
    private 'object'?: string;
    private 'applicant_project_id'?: string;
    public privileges?: Array<string>;
    public constructor() { 
    }
    public withModelObject(modelObject: string): ProjectPrivilege {
        this['object'] = modelObject;
        return this;
    }
    public set modelObject(modelObject: string  | undefined) {
        this['object'] = modelObject;
    }
    public get modelObject(): string | undefined {
        return this['object'];
    }
    public withApplicantProjectId(applicantProjectId: string): ProjectPrivilege {
        this['applicant_project_id'] = applicantProjectId;
        return this;
    }
    public set applicantProjectId(applicantProjectId: string  | undefined) {
        this['applicant_project_id'] = applicantProjectId;
    }
    public get applicantProjectId(): string | undefined {
        return this['applicant_project_id'];
    }
    public withPrivileges(privileges: Array<string>): ProjectPrivilege {
        this['privileges'] = privileges;
        return this;
    }
}