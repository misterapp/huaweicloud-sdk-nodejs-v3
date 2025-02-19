import { SqlsResp } from './SqlsResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSqlJobTemplatesResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'sql_count'?: number;
    public sqls?: Array<SqlsResp>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ListSqlJobTemplatesResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ListSqlJobTemplatesResponse {
        this['message'] = message;
        return this;
    }
    public withSqlCount(sqlCount: number): ListSqlJobTemplatesResponse {
        this['sql_count'] = sqlCount;
        return this;
    }
    public set sqlCount(sqlCount: number  | undefined) {
        this['sql_count'] = sqlCount;
    }
    public get sqlCount(): number | undefined {
        return this['sql_count'];
    }
    public withSqls(sqls: Array<SqlsResp>): ListSqlJobTemplatesResponse {
        this['sqls'] = sqls;
        return this;
    }
}