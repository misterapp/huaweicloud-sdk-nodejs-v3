import { ReplyAudioInfo } from './ReplyAudioInfo';
import { SmartLayerConfig } from './SmartLayerConfig';


export class TriggerProcess {
    private 'time_window'?: number;
    private 'reply_mode'?: TriggerProcessReplyModeEnum | string;
    private 'layer_config'?: SmartLayerConfig;
    private 'reply_texts'?: Array<string>;
    private 'reply_audios'?: Array<ReplyAudioInfo>;
    private 'reply_order'?: TriggerProcessReplyOrderEnum | string;
    public constructor() { 
    }
    public withTimeWindow(timeWindow: number): TriggerProcess {
        this['time_window'] = timeWindow;
        return this;
    }
    public set timeWindow(timeWindow: number  | undefined) {
        this['time_window'] = timeWindow;
    }
    public get timeWindow(): number | undefined {
        return this['time_window'];
    }
    public withReplyMode(replyMode: TriggerProcessReplyModeEnum | string): TriggerProcess {
        this['reply_mode'] = replyMode;
        return this;
    }
    public set replyMode(replyMode: TriggerProcessReplyModeEnum | string  | undefined) {
        this['reply_mode'] = replyMode;
    }
    public get replyMode(): TriggerProcessReplyModeEnum | string | undefined {
        return this['reply_mode'];
    }
    public withLayerConfig(layerConfig: SmartLayerConfig): TriggerProcess {
        this['layer_config'] = layerConfig;
        return this;
    }
    public set layerConfig(layerConfig: SmartLayerConfig  | undefined) {
        this['layer_config'] = layerConfig;
    }
    public get layerConfig(): SmartLayerConfig | undefined {
        return this['layer_config'];
    }
    public withReplyTexts(replyTexts: Array<string>): TriggerProcess {
        this['reply_texts'] = replyTexts;
        return this;
    }
    public set replyTexts(replyTexts: Array<string>  | undefined) {
        this['reply_texts'] = replyTexts;
    }
    public get replyTexts(): Array<string> | undefined {
        return this['reply_texts'];
    }
    public withReplyAudios(replyAudios: Array<ReplyAudioInfo>): TriggerProcess {
        this['reply_audios'] = replyAudios;
        return this;
    }
    public set replyAudios(replyAudios: Array<ReplyAudioInfo>  | undefined) {
        this['reply_audios'] = replyAudios;
    }
    public get replyAudios(): Array<ReplyAudioInfo> | undefined {
        return this['reply_audios'];
    }
    public withReplyOrder(replyOrder: TriggerProcessReplyOrderEnum | string): TriggerProcess {
        this['reply_order'] = replyOrder;
        return this;
    }
    public set replyOrder(replyOrder: TriggerProcessReplyOrderEnum | string  | undefined) {
        this['reply_order'] = replyOrder;
    }
    public get replyOrder(): TriggerProcessReplyOrderEnum | string | undefined {
        return this['reply_order'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TriggerProcessReplyModeEnum {
    SYSTEM_REPLY = 'SYSTEM_REPLY',
    CALLBACK = 'CALLBACK',
    SHOW_LAYER = 'SHOW_LAYER'
}
/**
    * @export
    * @enum {string}
    */
export enum TriggerProcessReplyOrderEnum {
    RANDOM = 'RANDOM',
    ORDER = 'ORDER'
}
