import { LiveDetectRespVideoresult } from './LiveDetectRespVideoresult';
import { WarningList } from './WarningList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DetectLiveByBase64IntlResponse extends SdkResponse {
    private 'video-result'?: LiveDetectRespVideoresult;
    private 'warning-list'?: Array<WarningList>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withVideoResult(videoResult: LiveDetectRespVideoresult): DetectLiveByBase64IntlResponse {
        this['video-result'] = videoResult;
        return this;
    }
    public set videoResult(videoResult: LiveDetectRespVideoresult  | undefined) {
        this['video-result'] = videoResult;
    }
    public get videoResult(): LiveDetectRespVideoresult | undefined {
        return this['video-result'];
    }
    public withWarningList(warningList: Array<WarningList>): DetectLiveByBase64IntlResponse {
        this['warning-list'] = warningList;
        return this;
    }
    public set warningList(warningList: Array<WarningList>  | undefined) {
        this['warning-list'] = warningList;
    }
    public get warningList(): Array<WarningList> | undefined {
        return this['warning-list'];
    }
    public withXRequestId(xRequestId: string): DetectLiveByBase64IntlResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}