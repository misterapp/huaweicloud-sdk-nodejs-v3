import { AclAccountRoleModifyBody } from './AclAccountRoleModifyBody';


export class UpdateAclAccountRoleRequest {
    private 'instance_id'?: string;
    private 'account_id'?: string;
    public body?: AclAccountRoleModifyBody;
    public constructor(instanceId?: string, accountId?: string) { 
        this['instance_id'] = instanceId;
        this['account_id'] = accountId;
    }
    public withInstanceId(instanceId: string): UpdateAclAccountRoleRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAccountId(accountId: string): UpdateAclAccountRoleRequest {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withBody(body: AclAccountRoleModifyBody): UpdateAclAccountRoleRequest {
        this['body'] = body;
        return this;
    }
}