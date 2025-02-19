import { InteractionRuleInfo } from './InteractionRuleInfo';
import { LiveEventCallBackConfig } from './LiveEventCallBackConfig';
import { LiveVideoScriptInfo } from './LiveVideoScriptInfo';
import { PlayPolicy } from './PlayPolicy';
import { ReviewConfig } from './ReviewConfig';
import { SharedConfig } from './SharedConfig';
import { VideoConfig } from './VideoConfig';


export class CreateSmartLiveRoomReq {
    private 'room_name'?: string;
    private 'room_description'?: string;
    private 'room_type'?: CreateSmartLiveRoomReqRoomTypeEnum | string;
    private 'scene_scripts'?: Array<LiveVideoScriptInfo>;
    private 'interaction_rules'?: Array<InteractionRuleInfo>;
    private 'play_policy'?: PlayPolicy;
    private 'video_config'?: VideoConfig;
    private 'output_urls'?: Array<string>;
    private 'stream_keys'?: Array<string>;
    private 'backup_model_asset_ids'?: Array<string>;
    private 'live_event_callback_config'?: LiveEventCallBackConfig;
    private 'review_config'?: ReviewConfig;
    private 'shared_config'?: SharedConfig;
    private 'view_mode'?: CreateSmartLiveRoomReqViewModeEnum | string;
    public constructor(roomName?: string) { 
        this['room_name'] = roomName;
    }
    public withRoomName(roomName: string): CreateSmartLiveRoomReq {
        this['room_name'] = roomName;
        return this;
    }
    public set roomName(roomName: string  | undefined) {
        this['room_name'] = roomName;
    }
    public get roomName(): string | undefined {
        return this['room_name'];
    }
    public withRoomDescription(roomDescription: string): CreateSmartLiveRoomReq {
        this['room_description'] = roomDescription;
        return this;
    }
    public set roomDescription(roomDescription: string  | undefined) {
        this['room_description'] = roomDescription;
    }
    public get roomDescription(): string | undefined {
        return this['room_description'];
    }
    public withRoomType(roomType: CreateSmartLiveRoomReqRoomTypeEnum | string): CreateSmartLiveRoomReq {
        this['room_type'] = roomType;
        return this;
    }
    public set roomType(roomType: CreateSmartLiveRoomReqRoomTypeEnum | string  | undefined) {
        this['room_type'] = roomType;
    }
    public get roomType(): CreateSmartLiveRoomReqRoomTypeEnum | string | undefined {
        return this['room_type'];
    }
    public withSceneScripts(sceneScripts: Array<LiveVideoScriptInfo>): CreateSmartLiveRoomReq {
        this['scene_scripts'] = sceneScripts;
        return this;
    }
    public set sceneScripts(sceneScripts: Array<LiveVideoScriptInfo>  | undefined) {
        this['scene_scripts'] = sceneScripts;
    }
    public get sceneScripts(): Array<LiveVideoScriptInfo> | undefined {
        return this['scene_scripts'];
    }
    public withInteractionRules(interactionRules: Array<InteractionRuleInfo>): CreateSmartLiveRoomReq {
        this['interaction_rules'] = interactionRules;
        return this;
    }
    public set interactionRules(interactionRules: Array<InteractionRuleInfo>  | undefined) {
        this['interaction_rules'] = interactionRules;
    }
    public get interactionRules(): Array<InteractionRuleInfo> | undefined {
        return this['interaction_rules'];
    }
    public withPlayPolicy(playPolicy: PlayPolicy): CreateSmartLiveRoomReq {
        this['play_policy'] = playPolicy;
        return this;
    }
    public set playPolicy(playPolicy: PlayPolicy  | undefined) {
        this['play_policy'] = playPolicy;
    }
    public get playPolicy(): PlayPolicy | undefined {
        return this['play_policy'];
    }
    public withVideoConfig(videoConfig: VideoConfig): CreateSmartLiveRoomReq {
        this['video_config'] = videoConfig;
        return this;
    }
    public set videoConfig(videoConfig: VideoConfig  | undefined) {
        this['video_config'] = videoConfig;
    }
    public get videoConfig(): VideoConfig | undefined {
        return this['video_config'];
    }
    public withOutputUrls(outputUrls: Array<string>): CreateSmartLiveRoomReq {
        this['output_urls'] = outputUrls;
        return this;
    }
    public set outputUrls(outputUrls: Array<string>  | undefined) {
        this['output_urls'] = outputUrls;
    }
    public get outputUrls(): Array<string> | undefined {
        return this['output_urls'];
    }
    public withStreamKeys(streamKeys: Array<string>): CreateSmartLiveRoomReq {
        this['stream_keys'] = streamKeys;
        return this;
    }
    public set streamKeys(streamKeys: Array<string>  | undefined) {
        this['stream_keys'] = streamKeys;
    }
    public get streamKeys(): Array<string> | undefined {
        return this['stream_keys'];
    }
    public withBackupModelAssetIds(backupModelAssetIds: Array<string>): CreateSmartLiveRoomReq {
        this['backup_model_asset_ids'] = backupModelAssetIds;
        return this;
    }
    public set backupModelAssetIds(backupModelAssetIds: Array<string>  | undefined) {
        this['backup_model_asset_ids'] = backupModelAssetIds;
    }
    public get backupModelAssetIds(): Array<string> | undefined {
        return this['backup_model_asset_ids'];
    }
    public withLiveEventCallbackConfig(liveEventCallbackConfig: LiveEventCallBackConfig): CreateSmartLiveRoomReq {
        this['live_event_callback_config'] = liveEventCallbackConfig;
        return this;
    }
    public set liveEventCallbackConfig(liveEventCallbackConfig: LiveEventCallBackConfig  | undefined) {
        this['live_event_callback_config'] = liveEventCallbackConfig;
    }
    public get liveEventCallbackConfig(): LiveEventCallBackConfig | undefined {
        return this['live_event_callback_config'];
    }
    public withReviewConfig(reviewConfig: ReviewConfig): CreateSmartLiveRoomReq {
        this['review_config'] = reviewConfig;
        return this;
    }
    public set reviewConfig(reviewConfig: ReviewConfig  | undefined) {
        this['review_config'] = reviewConfig;
    }
    public get reviewConfig(): ReviewConfig | undefined {
        return this['review_config'];
    }
    public withSharedConfig(sharedConfig: SharedConfig): CreateSmartLiveRoomReq {
        this['shared_config'] = sharedConfig;
        return this;
    }
    public set sharedConfig(sharedConfig: SharedConfig  | undefined) {
        this['shared_config'] = sharedConfig;
    }
    public get sharedConfig(): SharedConfig | undefined {
        return this['shared_config'];
    }
    public withViewMode(viewMode: CreateSmartLiveRoomReqViewModeEnum | string): CreateSmartLiveRoomReq {
        this['view_mode'] = viewMode;
        return this;
    }
    public set viewMode(viewMode: CreateSmartLiveRoomReqViewModeEnum | string  | undefined) {
        this['view_mode'] = viewMode;
    }
    public get viewMode(): CreateSmartLiveRoomReqViewModeEnum | string | undefined {
        return this['view_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSmartLiveRoomReqRoomTypeEnum {
    NORMAL = 'NORMAL',
    TEMP = 'TEMP',
    TEMPLATE = 'TEMPLATE'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateSmartLiveRoomReqViewModeEnum {
    LANDSCAPE = 'LANDSCAPE',
    VERTICAL = 'VERTICAL'
}
