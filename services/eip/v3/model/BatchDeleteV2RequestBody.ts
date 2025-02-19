import { BatchDeleteV2RequestBodySysTags } from './BatchDeleteV2RequestBodySysTags';
import { BatchDeleteV2RequestBodyTags } from './BatchDeleteV2RequestBodyTags';


export class BatchDeleteV2RequestBody {
    public tags?: Array<BatchDeleteV2RequestBodyTags>;
    private 'sys_tags'?: Array<BatchDeleteV2RequestBodySysTags>;
    public constructor(tags?: Array<BatchDeleteV2RequestBodyTags>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<BatchDeleteV2RequestBodyTags>): BatchDeleteV2RequestBody {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<BatchDeleteV2RequestBodySysTags>): BatchDeleteV2RequestBody {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<BatchDeleteV2RequestBodySysTags>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<BatchDeleteV2RequestBodySysTags> | undefined {
        return this['sys_tags'];
    }
}