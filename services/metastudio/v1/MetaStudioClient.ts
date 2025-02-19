import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
import FormData from 'form-data';

import { ActionMarkItem } from './model/ActionMarkItem';
import { AnimationAssetMeta } from './model/AnimationAssetMeta';
import { AnimationConfig } from './model/AnimationConfig';
import { AnimationItem } from './model/AnimationItem';
import { AssetExtraMeta } from './model/AssetExtraMeta';
import { AssetFileInfo } from './model/AssetFileInfo';
import { AuditResultAdminAuditResult } from './model/AuditResultAdminAuditResult';
import { AuditResultSystemAuditResult } from './model/AuditResultSystemAuditResult';
import { AuditResultSystemAuditResultErrors } from './model/AuditResultSystemAuditResultErrors';
import { AuditionFile } from './model/AuditionFile';
import { BackgroundConfigInfo } from './model/BackgroundConfigInfo';
import { BackgroundMusicConfig } from './model/BackgroundMusicConfig';
import { BusinessCardImageConfig } from './model/BusinessCardImageConfig';
import { BusinessCardImageUrl } from './model/BusinessCardImageUrl';
import { BusinessCardTextConfig } from './model/BusinessCardTextConfig';
import { CallBackConfig } from './model/CallBackConfig';
import { Cancel2DDigitalHumanVideoRequest } from './model/Cancel2DDigitalHumanVideoRequest';
import { Cancel2DDigitalHumanVideoResponse } from './model/Cancel2DDigitalHumanVideoResponse';
import { CancelPhotoDigitalHumanVideoRequest } from './model/CancelPhotoDigitalHumanVideoRequest';
import { CancelPhotoDigitalHumanVideoResponse } from './model/CancelPhotoDigitalHumanVideoResponse';
import { ChatSubtitleConfig } from './model/ChatSubtitleConfig';
import { ChatVideoConfigRsp } from './model/ChatVideoConfigRsp';
import { CheckTextLanguageRequest } from './model/CheckTextLanguageRequest';
import { CheckTextLanguageResponse } from './model/CheckTextLanguageResponse';
import { CommentData } from './model/CommentData';
import { CommentLogInfo } from './model/CommentLogInfo';
import { CommitVoiceTrainingJobRequest } from './model/CommitVoiceTrainingJobRequest';
import { CommitVoiceTrainingJobResponse } from './model/CommitVoiceTrainingJobResponse';
import { ComponentInfo } from './model/ComponentInfo';
import { ConfirmFileUploadRequest } from './model/ConfirmFileUploadRequest';
import { ConfirmFileUploadRequestBody } from './model/ConfirmFileUploadRequestBody';
import { ConfirmFileUploadResponse } from './model/ConfirmFileUploadResponse';
import { ConfirmTrainingSegmentRequest } from './model/ConfirmTrainingSegmentRequest';
import { ConfirmTrainingSegmentResponse } from './model/ConfirmTrainingSegmentResponse';
import { ControlDigitalHumanLiveReq } from './model/ControlDigitalHumanLiveReq';
import { ControlSmartLiveReq } from './model/ControlSmartLiveReq';
import { CopyVideoScriptsRequest } from './model/CopyVideoScriptsRequest';
import { CopyVideoScriptsResponse } from './model/CopyVideoScriptsResponse';
import { Create2DDigitalHumanVideoReq } from './model/Create2DDigitalHumanVideoReq';
import { Create2DDigitalHumanVideoRequest } from './model/Create2DDigitalHumanVideoRequest';
import { Create2DDigitalHumanVideoResponse } from './model/Create2DDigitalHumanVideoResponse';
import { Create2dModelTrainingJobReq } from './model/Create2dModelTrainingJobReq';
import { Create2dModelTrainingJobRequest } from './model/Create2dModelTrainingJobRequest';
import { Create2dModelTrainingJobResponse } from './model/Create2dModelTrainingJobResponse';
import { CreateDialogUrlReq } from './model/CreateDialogUrlReq';
import { CreateDialogUrlRequest } from './model/CreateDialogUrlRequest';
import { CreateDialogUrlResponse } from './model/CreateDialogUrlResponse';
import { CreateDigitalAssetRequest } from './model/CreateDigitalAssetRequest';
import { CreateDigitalAssetRequestBody } from './model/CreateDigitalAssetRequestBody';
import { CreateDigitalAssetResponse } from './model/CreateDigitalAssetResponse';
import { CreateDigitalHumanBusinessCardReq } from './model/CreateDigitalHumanBusinessCardReq';
import { CreateDigitalHumanBusinessCardRequest } from './model/CreateDigitalHumanBusinessCardRequest';
import { CreateDigitalHumanBusinessCardResponse } from './model/CreateDigitalHumanBusinessCardResponse';
import { CreateFASReq } from './model/CreateFASReq';
import { CreateFacialAnimationsRequest } from './model/CreateFacialAnimationsRequest';
import { CreateFacialAnimationsResponse } from './model/CreateFacialAnimationsResponse';
import { CreateFileRequest } from './model/CreateFileRequest';
import { CreateFileResponse } from './model/CreateFileResponse';
import { CreateInteractionRuleGroupRequest } from './model/CreateInteractionRuleGroupRequest';
import { CreateInteractionRuleGroupResponse } from './model/CreateInteractionRuleGroupResponse';
import { CreateOnceCodeRequest } from './model/CreateOnceCodeRequest';
import { CreateOnceCodeResponse } from './model/CreateOnceCodeResponse';
import { CreatePhotoDetectionReq } from './model/CreatePhotoDetectionReq';
import { CreatePhotoDetectionRequest } from './model/CreatePhotoDetectionRequest';
import { CreatePhotoDetectionResponse } from './model/CreatePhotoDetectionResponse';
import { CreatePhotoDigitalHumanVideoReq } from './model/CreatePhotoDigitalHumanVideoReq';
import { CreatePhotoDigitalHumanVideoRequest } from './model/CreatePhotoDigitalHumanVideoRequest';
import { CreatePhotoDigitalHumanVideoResponse } from './model/CreatePhotoDigitalHumanVideoResponse';
import { CreatePictureModelingByUrlJobRequest } from './model/CreatePictureModelingByUrlJobRequest';
import { CreatePictureModelingByUrlJobResponse } from './model/CreatePictureModelingByUrlJobResponse';
import { CreatePictureModelingJobRequest } from './model/CreatePictureModelingJobRequest';
import { CreatePictureModelingJobRequestBody } from './model/CreatePictureModelingJobRequestBody';
import { CreatePictureModelingJobResponse } from './model/CreatePictureModelingJobResponse';
import { CreateRobotReq } from './model/CreateRobotReq';
import { CreateRobotRequest } from './model/CreateRobotRequest';
import { CreateRobotResponse } from './model/CreateRobotResponse';
import { CreateSmartChatRoomReq } from './model/CreateSmartChatRoomReq';
import { CreateSmartChatRoomRequest } from './model/CreateSmartChatRoomRequest';
import { CreateSmartChatRoomResponse } from './model/CreateSmartChatRoomResponse';
import { CreateSmartLiveRoomReq } from './model/CreateSmartLiveRoomReq';
import { CreateSmartLiveRoomRequest } from './model/CreateSmartLiveRoomRequest';
import { CreateSmartLiveRoomResponse } from './model/CreateSmartLiveRoomResponse';
import { CreateStyleRequestBody } from './model/CreateStyleRequestBody';
import { CreateTTSAReq } from './model/CreateTTSAReq';
import { CreateTrainingAdvanceJobRequest } from './model/CreateTrainingAdvanceJobRequest';
import { CreateTrainingAdvanceJobResponse } from './model/CreateTrainingAdvanceJobResponse';
import { CreateTrainingBasicJobRequest } from './model/CreateTrainingBasicJobRequest';
import { CreateTrainingBasicJobResponse } from './model/CreateTrainingBasicJobResponse';
import { CreateTrainingJobReq } from './model/CreateTrainingJobReq';
import { CreateTrainingJobRspSegmentUploadingUrl } from './model/CreateTrainingJobRspSegmentUploadingUrl';
import { CreateTrainingMiddleJobRequest } from './model/CreateTrainingMiddleJobRequest';
import { CreateTrainingMiddleJobResponse } from './model/CreateTrainingMiddleJobResponse';
import { CreateTtsAuditionRequest } from './model/CreateTtsAuditionRequest';
import { CreateTtsAuditionRequestBody } from './model/CreateTtsAuditionRequestBody';
import { CreateTtsAuditionResponse } from './model/CreateTtsAuditionResponse';
import { CreateTtsaRequest } from './model/CreateTtsaRequest';
import { CreateTtsaResponse } from './model/CreateTtsaResponse';
import { CreateType } from './model/CreateType';
import { CreateVideoMotionCaptureJobRequest } from './model/CreateVideoMotionCaptureJobRequest';
import { CreateVideoMotionCaptureJobResponse } from './model/CreateVideoMotionCaptureJobResponse';
import { CreateVideoScriptsReq } from './model/CreateVideoScriptsReq';
import { CreateVideoScriptsRequest } from './model/CreateVideoScriptsRequest';
import { CreateVideoScriptsResponse } from './model/CreateVideoScriptsResponse';
import { Delete2dModelTrainingJobRequest } from './model/Delete2dModelTrainingJobRequest';
import { Delete2dModelTrainingJobResponse } from './model/Delete2dModelTrainingJobResponse';
import { DeleteAssetRequest } from './model/DeleteAssetRequest';
import { DeleteAssetResponse } from './model/DeleteAssetResponse';
import { DeleteDigitalHumanBusinessCardRequest } from './model/DeleteDigitalHumanBusinessCardRequest';
import { DeleteDigitalHumanBusinessCardResponse } from './model/DeleteDigitalHumanBusinessCardResponse';
import { DeleteFileRequest } from './model/DeleteFileRequest';
import { DeleteFileResponse } from './model/DeleteFileResponse';
import { DeleteInteractionRuleGroupRequest } from './model/DeleteInteractionRuleGroupRequest';
import { DeleteInteractionRuleGroupResponse } from './model/DeleteInteractionRuleGroupResponse';
import { DeleteRobotRequest } from './model/DeleteRobotRequest';
import { DeleteRobotResponse } from './model/DeleteRobotResponse';
import { DeleteSmartChatRoomRequest } from './model/DeleteSmartChatRoomRequest';
import { DeleteSmartChatRoomResponse } from './model/DeleteSmartChatRoomResponse';
import { DeleteSmartLiveRoomRequest } from './model/DeleteSmartLiveRoomRequest';
import { DeleteSmartLiveRoomResponse } from './model/DeleteSmartLiveRoomResponse';
import { DeleteVideoScriptRequest } from './model/DeleteVideoScriptRequest';
import { DeleteVideoScriptResponse } from './model/DeleteVideoScriptResponse';
import { DeleteVoiceTrainingJobRequest } from './model/DeleteVoiceTrainingJobRequest';
import { DeleteVoiceTrainingJobResponse } from './model/DeleteVoiceTrainingJobResponse';
import { DigitalAssetInfo } from './model/DigitalAssetInfo';
import { DigitalAssetSummary } from './model/DigitalAssetSummary';
import { DigitalHumanBusinessCardJobInfo } from './model/DigitalHumanBusinessCardJobInfo';
import { DigitalHumanModelingJobInfo } from './model/DigitalHumanModelingJobInfo';
import { DigitalHumanVideo } from './model/DigitalHumanVideo';
import { EmotionConfig } from './model/EmotionConfig';
import { ErrorResponse } from './model/ErrorResponse';
import { Execute2dModelTrainingCommandByUserReq } from './model/Execute2dModelTrainingCommandByUserReq';
import { Execute2dModelTrainingCommandByUserRequest } from './model/Execute2dModelTrainingCommandByUserRequest';
import { Execute2dModelTrainingCommandByUserResponse } from './model/Execute2dModelTrainingCommandByUserResponse';
import { ExecuteSmartLiveCommandRequest } from './model/ExecuteSmartLiveCommandRequest';
import { ExecuteSmartLiveCommandResponse } from './model/ExecuteSmartLiveCommandResponse';
import { ExecuteVideoMotionCaptureCommandRequest } from './model/ExecuteVideoMotionCaptureCommandRequest';
import { ExecuteVideoMotionCaptureCommandResponse } from './model/ExecuteVideoMotionCaptureCommandResponse';
import { ExternalVoiceAssetMeta } from './model/ExternalVoiceAssetMeta';
import { FilesCreateReq } from './model/FilesCreateReq';
import { HitCondition } from './model/HitCondition';
import { HitConditionTag } from './model/HitConditionTag';
import { HuaweiEiCbs } from './model/HuaweiEiCbs';
import { HumanModel2DAssetMeta } from './model/HumanModel2DAssetMeta';
import { HumanModelAssetMeta } from './model/HumanModelAssetMeta';
import { HumanModelMetaProperties } from './model/HumanModelMetaProperties';
import { HumanPosition2D } from './model/HumanPosition2D';
import { HumanSize2D } from './model/HumanSize2D';
import { IflytekAiuiConfig } from './model/IflytekAiuiConfig';
import { IflytekSpark } from './model/IflytekSpark';
import { ImageLayerConfig } from './model/ImageLayerConfig';
import { InferenceActionMarkInfo } from './model/InferenceActionMarkInfo';
import { InferenceVideoMarkInfo } from './model/InferenceVideoMarkInfo';
import { InputInfo } from './model/InputInfo';
import { InteractionRuleDetailInfo } from './model/InteractionRuleDetailInfo';
import { InteractionRuleGroup } from './model/InteractionRuleGroup';
import { InteractionRuleGroupDetail } from './model/InteractionRuleGroupDetail';
import { InteractionRuleInfo } from './model/InteractionRuleInfo';
import { JobState } from './model/JobState';
import { JobTag } from './model/JobTag';
import { JobType } from './model/JobType';
import { LanguageCheckInfoReq } from './model/LanguageCheckInfoReq';
import { LanguageEnum } from './model/LanguageEnum';
import { LayerConfig } from './model/LayerConfig';
import { LayerPositionConfig } from './model/LayerPositionConfig';
import { LayerSizeConfig } from './model/LayerSizeConfig';
import { List2dModelTrainingJobRequest } from './model/List2dModelTrainingJobRequest';
import { List2dModelTrainingJobResponse } from './model/List2dModelTrainingJobResponse';
import { ListAssetSummaryRequest } from './model/ListAssetSummaryRequest';
import { ListAssetSummaryResponse } from './model/ListAssetSummaryResponse';
import { ListAssetSummarysReq } from './model/ListAssetSummarysReq';
import { ListAssetsRequest } from './model/ListAssetsRequest';
import { ListAssetsResponse } from './model/ListAssetsResponse';
import { ListDigitalHumanBusinessCardRequest } from './model/ListDigitalHumanBusinessCardRequest';
import { ListDigitalHumanBusinessCardResponse } from './model/ListDigitalHumanBusinessCardResponse';
import { ListDigitalHumanVideoRequest } from './model/ListDigitalHumanVideoRequest';
import { ListDigitalHumanVideoResponse } from './model/ListDigitalHumanVideoResponse';
import { ListFacialAnimationsDataRequest } from './model/ListFacialAnimationsDataRequest';
import { ListFacialAnimationsDataResponse } from './model/ListFacialAnimationsDataResponse';
import { ListInteractionRuleGroupsRequest } from './model/ListInteractionRuleGroupsRequest';
import { ListInteractionRuleGroupsResponse } from './model/ListInteractionRuleGroupsResponse';
import { ListPictureModelingJobsRequest } from './model/ListPictureModelingJobsRequest';
import { ListPictureModelingJobsResponse } from './model/ListPictureModelingJobsResponse';
import { ListRobotRequest } from './model/ListRobotRequest';
import { ListRobotResponse } from './model/ListRobotResponse';
import { ListSmartChatRoomsRequest } from './model/ListSmartChatRoomsRequest';
import { ListSmartChatRoomsResponse } from './model/ListSmartChatRoomsResponse';
import { ListSmartLiveJobsRequest } from './model/ListSmartLiveJobsRequest';
import { ListSmartLiveJobsResponse } from './model/ListSmartLiveJobsResponse';
import { ListSmartLiveRequest } from './model/ListSmartLiveRequest';
import { ListSmartLiveResponse } from './model/ListSmartLiveResponse';
import { ListSmartLiveRoomsRequest } from './model/ListSmartLiveRoomsRequest';
import { ListSmartLiveRoomsResponse } from './model/ListSmartLiveRoomsResponse';
import { ListStylesRequest } from './model/ListStylesRequest';
import { ListStylesResponse } from './model/ListStylesResponse';
import { ListTtsaDataRequest } from './model/ListTtsaDataRequest';
import { ListTtsaDataResponse } from './model/ListTtsaDataResponse';
import { ListTtsaJobsRequest } from './model/ListTtsaJobsRequest';
import { ListTtsaJobsResponse } from './model/ListTtsaJobsResponse';
import { ListVideoMotionCaptureJobsRequest } from './model/ListVideoMotionCaptureJobsRequest';
import { ListVideoMotionCaptureJobsResponse } from './model/ListVideoMotionCaptureJobsResponse';
import { ListVideoScriptsRequest } from './model/ListVideoScriptsRequest';
import { ListVideoScriptsResponse } from './model/ListVideoScriptsResponse';
import { ListVoiceTrainingJobRequest } from './model/ListVoiceTrainingJobRequest';
import { ListVoiceTrainingJobResponse } from './model/ListVoiceTrainingJobResponse';
import { LiveAudioConfig } from './model/LiveAudioConfig';
import { LiveEvent } from './model/LiveEvent';
import { LiveEventCallBackConfig } from './model/LiveEventCallBackConfig';
import { LiveEventReportRequest } from './model/LiveEventReportRequest';
import { LiveEventReportResponse } from './model/LiveEventReportResponse';
import { LiveShootScriptItem } from './model/LiveShootScriptItem';
import { LiveVideoScriptInfo } from './model/LiveVideoScriptInfo';
import { LiveWarningItem } from './model/LiveWarningItem';
import { MaterialAssetMeta } from './model/MaterialAssetMeta';
import { MaterialComponentInfo } from './model/MaterialComponentInfo';
import { MobvoiVoiceAssetMeta } from './model/MobvoiVoiceAssetMeta';
import { ModelInfo } from './model/ModelInfo';
import { MotionItem } from './model/MotionItem';
import { MultipartUploadInfo } from './model/MultipartUploadInfo';
import { OperationLogInfo } from './model/OperationLogInfo';
import { OutputAssetConfig } from './model/OutputAssetConfig';
import { OutputAssetInfo } from './model/OutputAssetInfo';
import { OutputInfo } from './model/OutputInfo';
import { PPTAssetMeta } from './model/PPTAssetMeta';
import { PPTPageInfo } from './model/PPTPageInfo';
import { Pages } from './model/Pages';
import { PhotoVideoConfig } from './model/PhotoVideoConfig';
import { PictureModelingByUrlReq } from './model/PictureModelingByUrlReq';
import { PictureModelingInfo } from './model/PictureModelingInfo';
import { PlayPolicy } from './model/PlayPolicy';
import { RTCRoomInfoList } from './model/RTCRoomInfoList';
import { RTCUserInfo } from './model/RTCUserInfo';
import { ReplyAudioInfo } from './model/ReplyAudioInfo';
import { ReportLiveEventReq } from './model/ReportLiveEventReq';
import { RestoreAssetRequest } from './model/RestoreAssetRequest';
import { RestoreAssetResponse } from './model/RestoreAssetResponse';
import { ReviewConfig } from './model/ReviewConfig';
import { RobotInfo } from './model/RobotInfo';
import { SceneAssetMeta } from './model/SceneAssetMeta';
import { SceneComponentInfo } from './model/SceneComponentInfo';
import { SharedConfig } from './model/SharedConfig';
import { ShootScript } from './model/ShootScript';
import { ShootScriptAudioFileItem } from './model/ShootScriptAudioFileItem';
import { ShootScriptAudioFiles } from './model/ShootScriptAudioFiles';
import { ShootScriptDetail } from './model/ShootScriptDetail';
import { ShootScriptItem } from './model/ShootScriptItem';
import { ShootScriptItemBaseInfo } from './model/ShootScriptItemBaseInfo';
import { ShootScriptShowItem } from './model/ShootScriptShowItem';
import { Show2DDigitalHumanVideoRequest } from './model/Show2DDigitalHumanVideoRequest';
import { Show2DDigitalHumanVideoResponse } from './model/Show2DDigitalHumanVideoResponse';
import { Show2dModelTrainingJobRequest } from './model/Show2dModelTrainingJobRequest';
import { Show2dModelTrainingJobResponse } from './model/Show2dModelTrainingJobResponse';
import { ShowAssetRequest } from './model/ShowAssetRequest';
import { ShowAssetResponse } from './model/ShowAssetResponse';
import { ShowDigitalHumanBusinessCardRequest } from './model/ShowDigitalHumanBusinessCardRequest';
import { ShowDigitalHumanBusinessCardResponse } from './model/ShowDigitalHumanBusinessCardResponse';
import { ShowJobAuditResultRequest } from './model/ShowJobAuditResultRequest';
import { ShowJobAuditResultResponse } from './model/ShowJobAuditResultResponse';
import { ShowJobUploadingAddressRequest } from './model/ShowJobUploadingAddressRequest';
import { ShowJobUploadingAddressResponse } from './model/ShowJobUploadingAddressResponse';
import { ShowJobUploadingAddressRspPackageUrl } from './model/ShowJobUploadingAddressRspPackageUrl';
import { ShowJobUploadingAddressRspSegmentUrl } from './model/ShowJobUploadingAddressRspSegmentUrl';
import { ShowPhotoDetectionRequest } from './model/ShowPhotoDetectionRequest';
import { ShowPhotoDetectionResponse } from './model/ShowPhotoDetectionResponse';
import { ShowPhotoDigitalHumanVideoRequest } from './model/ShowPhotoDigitalHumanVideoRequest';
import { ShowPhotoDigitalHumanVideoResponse } from './model/ShowPhotoDigitalHumanVideoResponse';
import { ShowPictureModelingJobRequest } from './model/ShowPictureModelingJobRequest';
import { ShowPictureModelingJobResponse } from './model/ShowPictureModelingJobResponse';
import { ShowRobotRequest } from './model/ShowRobotRequest';
import { ShowRobotResponse } from './model/ShowRobotResponse';
import { ShowSmartChatJobRequest } from './model/ShowSmartChatJobRequest';
import { ShowSmartChatJobResponse } from './model/ShowSmartChatJobResponse';
import { ShowSmartChatRoomRequest } from './model/ShowSmartChatRoomRequest';
import { ShowSmartChatRoomResponse } from './model/ShowSmartChatRoomResponse';
import { ShowSmartLiveRequest } from './model/ShowSmartLiveRequest';
import { ShowSmartLiveResponse } from './model/ShowSmartLiveResponse';
import { ShowSmartLiveRoomRequest } from './model/ShowSmartLiveRoomRequest';
import { ShowSmartLiveRoomResponse } from './model/ShowSmartLiveRoomResponse';
import { ShowTrainingSegmentInfoRequest } from './model/ShowTrainingSegmentInfoRequest';
import { ShowTrainingSegmentInfoResponse } from './model/ShowTrainingSegmentInfoResponse';
import { ShowTtsAuditionFileRequest } from './model/ShowTtsAuditionFileRequest';
import { ShowTtsAuditionFileResponse } from './model/ShowTtsAuditionFileResponse';
import { ShowVideoMotionCaptureJobRequest } from './model/ShowVideoMotionCaptureJobRequest';
import { ShowVideoMotionCaptureJobResponse } from './model/ShowVideoMotionCaptureJobResponse';
import { ShowVideoScriptRequest } from './model/ShowVideoScriptRequest';
import { ShowVideoScriptResponse } from './model/ShowVideoScriptResponse';
import { ShowVoiceTrainingJobRequest } from './model/ShowVoiceTrainingJobRequest';
import { ShowVoiceTrainingJobResponse } from './model/ShowVoiceTrainingJobResponse';
import { SmartChatRoomBaseInfo } from './model/SmartChatRoomBaseInfo';
import { SmartImageLayerConfig } from './model/SmartImageLayerConfig';
import { SmartLayerConfig } from './model/SmartLayerConfig';
import { SmartLiveJob } from './model/SmartLiveJob';
import { SmartLiveRoomBaseInfo } from './model/SmartLiveRoomBaseInfo';
import { SmartVideoLayerConfig } from './model/SmartVideoLayerConfig';
import { StartSmartChatJobRequest } from './model/StartSmartChatJobRequest';
import { StartSmartChatJobResponse } from './model/StartSmartChatJobResponse';
import { StartSmartLiveReq } from './model/StartSmartLiveReq';
import { StartSmartLiveRequest } from './model/StartSmartLiveRequest';
import { StartSmartLiveResponse } from './model/StartSmartLiveResponse';
import { StopSmartChatJobRequest } from './model/StopSmartChatJobRequest';
import { StopSmartChatJobResponse } from './model/StopSmartChatJobResponse';
import { StopSmartLiveRequest } from './model/StopSmartLiveRequest';
import { StopSmartLiveResponse } from './model/StopSmartLiveResponse';
import { StopVideoMotionCaptureJobRequest } from './model/StopVideoMotionCaptureJobRequest';
import { StopVideoMotionCaptureJobResponse } from './model/StopVideoMotionCaptureJobResponse';
import { StyleAssetItem } from './model/StyleAssetItem';
import { StyleExtraMeta } from './model/StyleExtraMeta';
import { StyleInfo } from './model/StyleInfo';
import { SubtitleConfig } from './model/SubtitleConfig';
import { SystemProperty } from './model/SystemProperty';
import { TTSAJob } from './model/TTSAJob';
import { TextConfig } from './model/TextConfig';
import { TextLayerConfig } from './model/TextLayerConfig';
import { ThirdPartyModelConfig } from './model/ThirdPartyModelConfig';
import { TrainingJobBasicInfo } from './model/TrainingJobBasicInfo';
import { TrainingJobInfo } from './model/TrainingJobInfo';
import { TriggerProcess } from './model/TriggerProcess';
import { Update2dModelTrainingJobRequest } from './model/Update2dModelTrainingJobRequest';
import { Update2dModelTrainingJobResponse } from './model/Update2dModelTrainingJobResponse';
import { UpdateDigitalAssetRequest } from './model/UpdateDigitalAssetRequest';
import { UpdateDigitalAssetRequestBody } from './model/UpdateDigitalAssetRequestBody';
import { UpdateDigitalAssetResponse } from './model/UpdateDigitalAssetResponse';
import { UpdateDigitalHumanBusinessCardRequest } from './model/UpdateDigitalHumanBusinessCardRequest';
import { UpdateDigitalHumanBusinessCardResponse } from './model/UpdateDigitalHumanBusinessCardResponse';
import { UpdateInteractionRuleGroupRequest } from './model/UpdateInteractionRuleGroupRequest';
import { UpdateInteractionRuleGroupResponse } from './model/UpdateInteractionRuleGroupResponse';
import { UpdateRobotReq } from './model/UpdateRobotReq';
import { UpdateRobotRequest } from './model/UpdateRobotRequest';
import { UpdateRobotResponse } from './model/UpdateRobotResponse';
import { UpdateSmartChatRoomRequest } from './model/UpdateSmartChatRoomRequest';
import { UpdateSmartChatRoomResponse } from './model/UpdateSmartChatRoomResponse';
import { UpdateSmartLiveRoomRequest } from './model/UpdateSmartLiveRoomRequest';
import { UpdateSmartLiveRoomResponse } from './model/UpdateSmartLiveRoomResponse';
import { UpdateVideoScriptRequest } from './model/UpdateVideoScriptRequest';
import { UpdateVideoScriptResponse } from './model/UpdateVideoScriptResponse';
import { UpdateVideoScriptsReq } from './model/UpdateVideoScriptsReq';
import { VideoConfig } from './model/VideoConfig';
import { VideoLayerConfig } from './model/VideoLayerConfig';
import { VideoMotionCaptureInfo } from './model/VideoMotionCaptureInfo';
import { VideoMotionCaptureJobReq } from './model/VideoMotionCaptureJobReq';
import { VideoScriptBaseInfo } from './model/VideoScriptBaseInfo';
import { VideoScriptsCreateInfo } from './model/VideoScriptsCreateInfo';
import { VideoScriptsShowInfo } from './model/VideoScriptsShowInfo';
import { VideoScriptsSimpleInfo } from './model/VideoScriptsSimpleInfo';
import { VoiceConfig } from './model/VoiceConfig';
import { VoiceModelAssetMeta } from './model/VoiceModelAssetMeta';

export class MetaStudioClient {
    public static newBuilder(): ClientBuilder<MetaStudioClient> {
            return new ClientBuilder<MetaStudioClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 该接口用于创建对话链接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建对话链接
     * @param {CreateDialogUrlReq} createDialogUrlRequestBody 创建对话链接请求。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDialogUrl(createDialogUrlRequest?: CreateDialogUrlRequest): Promise<CreateDialogUrlResponse> {
        const options = ParamCreater().createDialogUrl(createDialogUrlRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询数字人智能交互任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数字人智能交互任务
     * @param {string} roomId 直播间ID，获取方法请参考[[创建智能交互对话直播间](https://support.huaweicloud.com/api-metastudio/CreateSmartChatRoom.html)](tag:hc,hk)[“创建智能交互对话直播间”](tag:cmcc)。
     * @param {string} jobId 任务ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSmartChatJob(showSmartChatJobRequest?: ShowSmartChatJobRequest): Promise<ShowSmartChatJobResponse> {
        const options = ParamCreater().showSmartChatJob(showSmartChatJobRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于启动数字人智能交互任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动数字人智能交互任务
     * @param {string} roomId 直播间ID，获取方法请参考[[创建智能交互对话直播间](https://support.huaweicloud.com/api-metastudio/CreateSmartChatRoom.html)](tag:hc,hk)[“创建智能交互对话直播间”](tag:cmcc)。
     * @param {string} robotId 应用ID，获取方法请参考[[创建应用](https://support.huaweicloud.com/api-metastudio/CreateRobot.html)](tag:hc,hk)[“创建应用”](tag:cmcc)。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startSmartChatJob(startSmartChatJobRequest?: StartSmartChatJobRequest): Promise<StartSmartChatJobResponse> {
        const options = ParamCreater().startSmartChatJob(startSmartChatJobRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于结束数字人智能交互任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 结束数字人智能交互任务
     * @param {string} roomId 直播间ID，获取方法请参考[[创建智能交互对话直播间](https://support.huaweicloud.com/api-metastudio/CreateSmartChatRoom.html)](tag:hc,hk)[“创建智能交互对话直播间”](tag:cmcc)。
     * @param {string} jobId 任务ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopSmartChatJob(stopSmartChatJobRequest?: StopSmartChatJobRequest): Promise<StopSmartChatJobResponse> {
        const options = ParamCreater().stopSmartChatJob(stopSmartChatJobRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于在资产库中添加上传新的媒体资产。可上传的资产类型包括：分身数字人模型、背景图片、素材图片、素材视频、PPT等。
     * * &gt; 资产类型是IMAGE时，通过system_properties来区分背景图片（BACKGROUND_IMG）、素材图片（MATERIAL_IMG）。
     * * &gt; 资产类型是VIDEO时，通过system_properties来区分素材视频（MATERIAL_VIDEO）、名片视频（BUSSINESS_CARD_VIDEO）。
     * * &gt; MetaStudio平台生成的视频，system_properties带CREATED_BY_PLATFORM。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建资产
     * @param {CreateDigitalAssetRequestBody} createDigitalAssetRequestBody 创建资产
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDigitalAsset(createDigitalAssetRequest?: CreateDigitalAssetRequest): Promise<CreateDigitalAssetResponse> {
        const options = ParamCreater().createDigitalAsset(createDigitalAssetRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除资产库中的媒体资产。调用该接口删除媒体资产时，媒体资产会放入回收站中，不会彻底删除。如需彻底删除资产，需增加“mode&#x3D;force”参数配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资产
     * @param {string} assetId 资产ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {string} [mode] 删除模式
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAsset(deleteAssetRequest?: DeleteAssetRequest): Promise<DeleteAssetResponse> {
        const options = ParamCreater().deleteAsset(deleteAssetRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询媒体资产库中指定的多个资产的概要信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资产概要
     * @param {ListAssetSummarysReq} listAssetSummaryRequestBody 资产概要查询。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAssetSummary(listAssetSummaryRequest?: ListAssetSummaryRequest): Promise<ListAssetSummaryResponse> {
        const options = ParamCreater().listAssetSummary(listAssetSummaryRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询资产库中的媒体资产列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资产列表
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {number} [limit] 每页显示的条目数量。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询。
     * @param {string} [name] 按名称模糊查询。
     * @param {string} [tag] 按标签模糊查询。
     * @param {string} [startTime] 起始时间。格式遵循：RFC 3339 如\&quot;2021-01-10T08:43:17Z\&quot;。
     * @param {string} [endTime] 结束时间。格式遵循：RFC 3339 如\&quot;2021-01-10T10:43:17Z\&quot;。
     * @param {string} [assetType] 资产类型。多个类型使用英文逗号分割。 * HUMAN_MODEL：数字人模型 * VOICE_MODEL：音色模型（仅系统管理员可上传） * SCENE：场景模型 * ANIMATION：动作动画 * VIDEO：视频文件 * IMAGE：图片文件 * PPT：幻灯片文件 * MATERIAL：风格化素材 * HUMAN_MODEL_2D: 2D数字人网络模型 * BUSINESS_CARD_TEMPLET: 数字人名片模板 * MUSIC: 音乐 * AUDIO: 音频
     * @param {string} [sortKey] 排序字段，目前只支持create_time。
     * @param {string} [sortDir] 排序方式。 * asc：升序 * desc：降序  默认asc升序。
     * @param {'SYSTEM' | 'CUSTOMIZATION' | 'ALL'} [assetSource] 资产来源。 * SYSTEM：系统资产 * CUSTOMIZATION：租户资产 * ALL：所有资产  默认查询租户资产。
     * @param {string} [assetState] 资产状态。多个资产状态使用英文逗号分割。 * CREATING：资产创建中，主文件尚未上传 * FAILED：主文件上传失败 * UNACTIVED：主文件上传成功，资产未激活，资产不可用于其他业务（用户可更新状态） * ACTIVED：主文件上传成功，资产激活，资产可用于其他业务（用户可更新状态） * DELETING：资产删除中，资产不可用，资产可恢复 * DELETED：资产文件已删除，资产不可用，资产不可恢复 * BLOCK：资产被冻结，资产不可用，不可查看文件。 默认查询所有状态的资产。
     * @param {string} [styleId] 基于风格化ID查询关联资产。 * system_male_001：男性风格01 * system_female_001：女性风格01 * system_male_002：男性风格02  * system_female_002：女性风格02
     * @param {string} [renderEngine] 可用引擎。 * UE：UE引擎 * MetaEngine：MetaEngine引擎 &gt; 该字段当前只对MetaEngine白名单用户生效
     * @param {string} [sex] 性别。多选使用英文逗号分隔。
     * @param {string} [language] 语言。多选使用英文逗号分隔。
     * @param {string} [systemProperty] 系统属性。  key和value间用\&quot;:\&quot;分隔，多个key之间用\&quot;,\&quot;分隔。  如system_property&#x3D;BACKGROUND_IMG:Yes,RENDER_ENGINE:MetaEngine。  不同Key对应Value取值如下：  公共资产属性： * BACKGROUND_IMG：视频制作的2D背景图片，可取值Yes * CREATED_BY_PLATFORM：是否平台生成，可取值Yes  分身数字人资产属性： * MATERIAL_IMG：素材图片，用作前景。可取值Yes * MATERIAL_VIDEO：素材视频，用作前景。可取值Yes * TO_BE_TRANSLATED_VIDEO: 视频翻译的源视频。可取值Yes  3D数字人资产属性： * STYLE_ID：风格Id * RENDER_ENGINE：引擎类型，可取值UE或MetaEngine * BACKGROUND_SCENE：视频制作的2D背景场景，可取值Horizontal（横屏）或者Vertical（竖屏）
     * @param {boolean} [actionEditable] 动作是否可编辑。仅在分身数字人模型查询时有效。
     * @param {boolean} [isMovable] 分身数字人是否资产走动。仅在分身数字人模型查询时有效。
     * @param {string} [voiceProvider] 可取值HUAWEI_METASTUDIO, MOBVOI。 HUAWEI_METASTUDIO：MetaStudio自研音色 MOBVOI：出门问问音色
     * @param {'SHARER' | 'SHAREE'} [role] 角色。 SHARER：共享方，SHAREE：被共享方
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAssets(listAssetsRequest?: ListAssetsRequest): Promise<ListAssetsResponse> {
        const options = ParamCreater().listAssets(listAssetsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于恢复被删除至回收站的媒体资产。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复被删除的资产
     * @param {string} assetId 资产ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restoreAsset(restoreAssetRequest?: RestoreAssetRequest): Promise<RestoreAssetResponse> {
        const options = ParamCreater().restoreAsset(restoreAssetRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询资产库中指定媒体资产的详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资产详情
     * @param {string} assetId 资产ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAsset(showAssetRequest?: ShowAssetRequest): Promise<ShowAssetResponse> {
        const options = ParamCreater().showAsset(showAssetRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于更新资产库中的媒体资产信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新资产
     * @param {string} assetId 资产ID。
     * @param {UpdateDigitalAssetRequestBody} updateDigitalAssetRequestBody 创建资产
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDigitalAsset(updateDigitalAssetRequest?: UpdateDigitalAssetRequest): Promise<UpdateDigitalAssetResponse> {
        const options = ParamCreater().updateDigitalAsset(updateDigitalAssetRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于数字人名片制作任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数字人名片制作
     * @param {CreateDigitalHumanBusinessCardReq} createDigitalHumanBusinessCardRequestBody 数字人名片制作创建请求。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDigitalHumanBusinessCard(createDigitalHumanBusinessCardRequest?: CreateDigitalHumanBusinessCardRequest): Promise<CreateDigitalHumanBusinessCardResponse> {
        const options = ParamCreater().createDigitalHumanBusinessCard(createDigitalHumanBusinessCardRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除数字人名片制作任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数字人名片制作任务
     * @param {string} jobId 任务ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDigitalHumanBusinessCard(deleteDigitalHumanBusinessCardRequest?: DeleteDigitalHumanBusinessCardRequest): Promise<DeleteDigitalHumanBusinessCardResponse> {
        const options = ParamCreater().deleteDigitalHumanBusinessCard(deleteDigitalHumanBusinessCardRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询数字人名片制作任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数字人名片制作任务列表
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询。
     * @param {number} [limit] 每页显示的条目数量。
     * @param {string} [state] 任务状态，默认所有状态。  可多个状态查询，使用英文逗号分隔。  如state&#x3D;CREATING,PUBLISHED
     * @param {string} [sortKey] 排序字段，目前只支持create_time。
     * @param {string} [sortDir] 排序方式。 * asc：升序 * desc：降序  默认asc升序。
     * @param {string} [createUntil] 过滤创建时间&lt;&#x3D;输入时间的记录。
     * @param {string} [createSince] 过滤创建时间&gt;&#x3D;输入时间的记录。
     * @param {string} [videoAssetName] 输出的视频资产名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDigitalHumanBusinessCard(listDigitalHumanBusinessCardRequest?: ListDigitalHumanBusinessCardRequest): Promise<ListDigitalHumanBusinessCardResponse> {
        const options = ParamCreater().listDigitalHumanBusinessCard(listDigitalHumanBusinessCardRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询数字人名片制作任务详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数字人名片制作任务详情
     * @param {string} jobId 任务ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDigitalHumanBusinessCard(showDigitalHumanBusinessCardRequest?: ShowDigitalHumanBusinessCardRequest): Promise<ShowDigitalHumanBusinessCardResponse> {
        const options = ParamCreater().showDigitalHumanBusinessCard(showDigitalHumanBusinessCardRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于更新数字人名片制作任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新数字人名片制作
     * @param {string} jobId 任务ID。
     * @param {CreateDigitalHumanBusinessCardReq} updateDigitalHumanBusinessCardRequestBody 数字人名片制作创建请求。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDigitalHumanBusinessCard(updateDigitalHumanBusinessCardRequest?: UpdateDigitalHumanBusinessCardRequest): Promise<UpdateDigitalHumanBusinessCardResponse> {
        const options = ParamCreater().updateDigitalHumanBusinessCard(updateDigitalHumanBusinessCardRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询视频制作任务列表。可查询分身数字人视频制作列表，照片数字人视频制作列表等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询视频制作任务列表
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询。
     * @param {number} [limit] 每页显示的条目数量。
     * @param {string} [state] 任务状态，默认所有状态。  可多个状态查询，使用英文逗号分隔。  如state&#x3D;CREATING,PUBLISHED
     * @param {string} [sortKey] 排序字段，目前只支持create_time。
     * @param {string} [sortDir] 排序方式。 * asc：升序 * desc：降序  默认asc升序。
     * @param {string} [createUntil] 过滤创建时间&lt;&#x3D;输入时间的记录。
     * @param {string} [createSince] 过滤创建时间&gt;&#x3D;输入时间的记录。
     * @param {string} [scriptId] 剧本ID。
     * @param {string} [assetName] 输出视频资产名称。
     * @param {string} [jobType] 任务类型。 * 2D_DIGITAL_HUMAN_VIDEO: 分身数字人视频制作任务 * PHOTO_DIGITAL_HUMAN_VIDEO: 照片数字人视频制作任务
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDigitalHumanVideo(listDigitalHumanVideoRequest?: ListDigitalHumanVideoRequest): Promise<ListDigitalHumanVideoResponse> {
        const options = ParamCreater().listDigitalHumanVideo(listDigitalHumanVideoRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于取消等待中的分身数字人视频制作任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消等待中的分身数字人视频制作任务
     * @param {string} jobId 任务ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancel2DDigitalHumanVideo(cancel2DDigitalHumanVideoRequest?: Cancel2DDigitalHumanVideoRequest): Promise<Cancel2DDigitalHumanVideoResponse> {
        const options = ParamCreater().cancel2DDigitalHumanVideo(cancel2DDigitalHumanVideoRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建分身数字人视频制作任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建分身数字人视频制作任务
     * @param {Create2DDigitalHumanVideoReq} create2DDigitalHumanVideoRequestBody 视频制作创建请求。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public create2DDigitalHumanVideo(create2DDigitalHumanVideoRequest?: Create2DDigitalHumanVideoRequest): Promise<Create2DDigitalHumanVideoResponse> {
        const options = ParamCreater().create2DDigitalHumanVideo(create2DDigitalHumanVideoRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询分身数字人视频制作任务详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询分身数字人视频制作任务详情
     * @param {string} jobId 任务ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {boolean} [showScript] 是否需要返回剧本参数配置。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public show2DDigitalHumanVideo(show2DDigitalHumanVideoRequest?: Show2DDigitalHumanVideoRequest): Promise<Show2DDigitalHumanVideoResponse> {
        const options = ParamCreater().show2DDigitalHumanVideo(show2DDigitalHumanVideoRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于取消等待中的照片分身数字人视频制作任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消等待中的照片分身数字人视频制作任务
     * @param {string} jobId 任务ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelPhotoDigitalHumanVideo(cancelPhotoDigitalHumanVideoRequest?: CancelPhotoDigitalHumanVideoRequest): Promise<CancelPhotoDigitalHumanVideoResponse> {
        const options = ParamCreater().cancelPhotoDigitalHumanVideo(cancelPhotoDigitalHumanVideoRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建照片检测任务，检测照片是否满足制作照片数字人的要求。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建照片检测任务
     * @param {CreatePhotoDetectionReq} createPhotoDetectionRequestBody 照片检测创建请求。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPhotoDetection(createPhotoDetectionRequest?: CreatePhotoDetectionRequest): Promise<CreatePhotoDetectionResponse> {
        const options = ParamCreater().createPhotoDetection(createPhotoDetectionRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建照片分身数字人视频制作任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建照片分身数字人视频制作任务
     * @param {CreatePhotoDigitalHumanVideoReq} createPhotoDigitalHumanVideoRequestBody 照片数字人制作创建请求。其中background_music_config无需传入。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPhotoDigitalHumanVideo(createPhotoDigitalHumanVideoRequest?: CreatePhotoDigitalHumanVideoRequest): Promise<CreatePhotoDigitalHumanVideoResponse> {
        const options = ParamCreater().createPhotoDigitalHumanVideo(createPhotoDigitalHumanVideoRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询照片检测任务详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询照片检测任务详情
     * @param {string} jobId 任务ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPhotoDetection(showPhotoDetectionRequest?: ShowPhotoDetectionRequest): Promise<ShowPhotoDetectionResponse> {
        const options = ParamCreater().showPhotoDetection(showPhotoDetectionRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询照片分身数字人视频制作任务详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询照片分身数字人视频制作任务详情
     * @param {string} jobId 任务ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {boolean} [showScript] 是否需要返回剧本参数配置。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPhotoDigitalHumanVideo(showPhotoDigitalHumanVideoRequest?: ShowPhotoDigitalHumanVideoRequest): Promise<ShowPhotoDigitalHumanVideoResponse> {
        const options = ParamCreater().showPhotoDigitalHumanVideo(showPhotoDigitalHumanVideoRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 资产文件上传完毕后，通过该接口确认上传完成。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 确认文件已上传
     * @param {string} fileId 文件ID。
     * @param {ConfirmFileUploadRequestBody} confirmFileUploadRequestBody 确认媒资上传
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public confirmFileUpload(confirmFileUploadRequest?: ConfirmFileUploadRequest): Promise<ConfirmFileUploadResponse> {
        const options = ParamCreater().confirmFileUpload(confirmFileUploadRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建文件并获取上传URL。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建文件并获取上传URL
     * @param {FilesCreateReq} createFileRequestBody 创建文件请求。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFile(createFileRequest?: CreateFileRequest): Promise<CreateFileResponse> {
        const options = ParamCreater().createFile(createFileRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除媒体资产库中指定的文件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除文件
     * @param {string} fileId 文件ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteFile(deleteFileRequest?: DeleteFileRequest): Promise<DeleteFileResponse> {
        const options = ParamCreater().deleteFile(deleteFileRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建一次性鉴权码，有效期5分钟，鉴权码只能使用一次，每次使用后需要重新获取。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建一次性鉴权码
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createOnceCode(createOnceCodeRequest?: CreateOnceCodeRequest): Promise<CreateOnceCodeResponse> {
        const options = ParamCreater().createOnceCode(createOnceCodeRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于从URL中获取图片进行照片建模任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 基于图片URL创建照片建模任务
     * @param {PictureModelingByUrlReq} createPictureModelingByUrlJobRequestBody 建模请求
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPictureModelingByUrlJob(createPictureModelingByUrlJobRequest?: CreatePictureModelingByUrlJobRequest): Promise<CreatePictureModelingByUrlJobResponse> {
        const options = ParamCreater().createPictureModelingByUrlJob(createPictureModelingByUrlJobRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建风格化照片建模任务。通过上传照片，生成风格化数字人模型。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建照片建模任务
     * @param {any} file 照片文件。 &gt; 只能上传jpg/jpeg/png格式文件， 最大分辨率为3840*2160
     * @param {string} styleId 数字人风格ID。 * system_male_001：男性风格01 * system_female_001：女性风格01 * system_male_002：男性风格02 * system_female_002：女性风格02
     * @param {string} name 数字人模型名称，首次创建时使用。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {string} [notifyUrl] 照片建模任务结束的回调地址。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPictureModelingJob(createPictureModelingJobRequest?: CreatePictureModelingJobRequest): Promise<CreatePictureModelingJobResponse> {
        const options = ParamCreater().createPictureModelingJob(createPictureModelingJobRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询风格化照片建模任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 照片建模任务列表查询
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询。
     * @param {number} [limit] 每页显示的条目数量。
     * @param {string} [state] 任务状态，默认所有状态。  可多个状态查询，使用英文逗号分隔。  如state&#x3D;CREATING,PUBLISHED
     * @param {string} [sortKey] 排序字段，目前只支持create_time。
     * @param {string} [sortDir] 排序方式。 * asc：升序 * desc：降序  默认asc升序。
     * @param {string} [createUntil] 过滤创建时间&lt;&#x3D;输入时间的记录。
     * @param {string} [createSince] 过滤创建时间&gt;&#x3D;输入时间的记录。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPictureModelingJobs(listPictureModelingJobsRequest?: ListPictureModelingJobsRequest): Promise<ListPictureModelingJobsResponse> {
        const options = ParamCreater().listPictureModelingJobs(listPictureModelingJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于风格化查询照片建模任务详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 照片建模任务详情查询
     * @param {string} jobId 任务ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPictureModelingJob(showPictureModelingJobRequest?: ShowPictureModelingJobRequest): Promise<ShowPictureModelingJobResponse> {
        const options = ParamCreater().showPictureModelingJob(showPictureModelingJobRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建应用
     * @param {CreateRobotReq} createRobotRequestBody 创建应用请求。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRobot(createRobotRequest?: CreateRobotRequest): Promise<CreateRobotResponse> {
        const options = ParamCreater().createRobot(createRobotRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除应用
     * @param {Array<string>} deleteRobotRequestBody 应用ID列表
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRobot(deleteRobotRequest?: DeleteRobotRequest): Promise<DeleteRobotResponse> {
        const options = ParamCreater().deleteRobot(deleteRobotRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询应用列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用列表
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询。
     * @param {number} [limit] 每页显示的条目数量。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRobot(listRobotRequest?: ListRobotRequest): Promise<ListRobotResponse> {
        const options = ParamCreater().listRobot(listRobotRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询应用详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用详情
     * @param {string} robotId 应用ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRobot(showRobotRequest?: ShowRobotRequest): Promise<ShowRobotResponse> {
        const options = ParamCreater().showRobot(showRobotRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改应用
     * @param {string} robotId 应用ID。
     * @param {UpdateRobotReq} updateRobotRequestBody 修改应用请求。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRobot(updateRobotRequest?: UpdateRobotRequest): Promise<UpdateRobotResponse> {
        const options = ParamCreater().updateRobot(updateRobotRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建智能交互对话直播间。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建智能交互对话直播间
     * @param {CreateSmartChatRoomReq} createSmartChatRoomRequestBody 创建智能交互对话直播间请求。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSmartChatRoom(createSmartChatRoomRequest?: CreateSmartChatRoomRequest): Promise<CreateSmartChatRoomResponse> {
        const options = ParamCreater().createSmartChatRoom(createSmartChatRoomRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除智能交互对话直播间。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除智能交互对话直播间
     * @param {string} roomId 剧本ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSmartChatRoom(deleteSmartChatRoomRequest?: DeleteSmartChatRoomRequest): Promise<DeleteSmartChatRoomResponse> {
        const options = ParamCreater().deleteSmartChatRoom(deleteSmartChatRoomRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于智能交互对话直播间列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询智能交互对话直播间列表
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询。
     * @param {number} [limit] 每页显示的条目数量。
     * @param {string} [roomName] 按智能交互对话直播间名称模糊查询。
     * @param {string} [modelName] 按形象名称模糊查询。
     * @param {string} [startTime] 最近智能交互对话任务起始时间。格式遵循：RFC 3339 如\&quot;2021-01-10T08:43:17Z\&quot;。
     * @param {string} [endTime] 最近智能交互对话任务结束时间。格式遵循：RFC 3339 如\&quot;2021-01-10T10:43:17Z\&quot;。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSmartChatRooms(listSmartChatRoomsRequest?: ListSmartChatRoomsRequest): Promise<ListSmartChatRoomsResponse> {
        const options = ParamCreater().listSmartChatRooms(listSmartChatRoomsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询智能交互对话直播间详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询智能交互对话直播间详情
     * @param {string} roomId 剧本ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSmartChatRoom(showSmartChatRoomRequest?: ShowSmartChatRoomRequest): Promise<ShowSmartChatRoomResponse> {
        const options = ParamCreater().showSmartChatRoom(showSmartChatRoomRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于智能交互对话直播间信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新智能交互对话直播间信息
     * @param {string} roomId 剧本ID。
     * @param {CreateSmartChatRoomReq} updateSmartChatRoomRequestBody 更新智能交互对话直播间请求。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSmartChatRoom(updateSmartChatRoomRequest?: UpdateSmartChatRoomRequest): Promise<UpdateSmartChatRoomResponse> {
        const options = ParamCreater().updateSmartChatRoom(updateSmartChatRoomRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于控制数字人直播过程。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 控制数字人直播过程
     * @param {string} roomId 剧本ID。
     * @param {string} jobId 任务ID。
     * @param {ControlSmartLiveReq} executeSmartLiveCommandRequestBody 控制数字人直播请求。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeSmartLiveCommand(executeSmartLiveCommandRequest?: ExecuteSmartLiveCommandRequest): Promise<ExecuteSmartLiveCommandResponse> {
        const options = ParamCreater().executeSmartLiveCommand(executeSmartLiveCommandRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询数字人智能直播任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数字人智能直播任务列表
     * @param {string} roomId 剧本ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询。
     * @param {number} [limit] 每页显示的条目数量。
     * @param {string} [state] 任务状态，默认所有状态。  可多个状态查询，使用英文逗号分隔。  如state&#x3D;CREATING,PUBLISHED
     * @param {string} [sortKey] 排序字段，目前只支持create_time。
     * @param {string} [sortDir] 排序方式。 * asc：升序 * desc：降序  默认asc升序。
     * @param {string} [createSince] 过滤创建时间&gt;&#x3D;输入时间的记录。
     * @param {string} [createUntil] 过滤创建时间&lt;&#x3D;输入时间的记录。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSmartLive(listSmartLiveRequest?: ListSmartLiveRequest): Promise<ListSmartLiveResponse> {
        const options = ParamCreater().listSmartLive(listSmartLiveRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询数字人智能直播任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数字人智能直播任务列表
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询。
     * @param {number} [limit] 每页显示的条目数量。
     * @param {string} [state] 任务状态，默认所有状态。  可多个状态查询，使用英文逗号分隔。  如state&#x3D;CREATING,PUBLISHED
     * @param {string} [sortKey] 排序字段，目前只支持create_time。
     * @param {string} [sortDir] 排序方式。 * asc：升序 * desc：降序  默认asc升序。
     * @param {string} [createSince] 过滤创建时间&gt;&#x3D;输入时间的记录。
     * @param {string} [createUntil] 过滤创建时间&lt;&#x3D;输入时间的记录。
     * @param {string} [roomName] 按直播间名称模糊查询。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSmartLiveJobs(listSmartLiveJobsRequest?: ListSmartLiveJobsRequest): Promise<ListSmartLiveJobsResponse> {
        const options = ParamCreater().listSmartLiveJobs(listSmartLiveJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于上报直播间事件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上报直播间事件
     * @param {string} roomId 剧本ID。
     * @param {string} jobId 任务ID。
     * @param {ReportLiveEventReq} liveEventReportRequestBody 上报直播间事件请求。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {string} [authKey] 鉴权Key。通过HmacSHA256生成的鉴权key
     * @param {number} [expiresTime] 鉴权key过期时间。从1970年1月1日（UTC/GMT的午夜）开始所经过的豪秒数。
     * @param {boolean} [refreshUrl] 是否刷新URL
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public liveEventReport(liveEventReportRequest?: LiveEventReportRequest): Promise<LiveEventReportResponse> {
        const options = ParamCreater().liveEventReport(liveEventReportRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询数字人智能直播任务详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数字人智能直播任务详情
     * @param {string} roomId 剧本ID。
     * @param {string} jobId 任务ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSmartLive(showSmartLiveRequest?: ShowSmartLiveRequest): Promise<ShowSmartLiveResponse> {
        const options = ParamCreater().showSmartLive(showSmartLiveRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于启动数字人智能直播任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动数字人智能直播任务
     * @param {string} roomId 剧本ID。
     * @param {StartSmartLiveReq} startSmartLiveRequestBody 数字人智能直播任务创建请求。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startSmartLive(startSmartLiveRequest?: StartSmartLiveRequest): Promise<StartSmartLiveResponse> {
        const options = ParamCreater().startSmartLive(startSmartLiveRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于结束数字人智能直播任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 结束数字人智能直播任务
     * @param {string} roomId 剧本ID。
     * @param {string} jobId 任务ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopSmartLive(stopSmartLiveRequest?: StopSmartLiveRequest): Promise<StopSmartLiveResponse> {
        const options = ParamCreater().stopSmartLive(stopSmartLiveRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检测音色与文本的语言一致性，音色与文本不一致会导致报错
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检测音色与文本的语言一致性
     * @param {LanguageCheckInfoReq} checkTextLanguageRequestBody 上传的音色语言信息和文本信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkTextLanguage(checkTextLanguageRequest?: CheckTextLanguageRequest): Promise<CheckTextLanguageResponse> {
        const options = ParamCreater().checkTextLanguage(checkTextLanguageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建智能直播间互动规则库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建智能直播间互动规则库
     * @param {InteractionRuleGroup} createInteractionRuleGroupRequestBody 创建智能直播间互动规则。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInteractionRuleGroup(createInteractionRuleGroupRequest?: CreateInteractionRuleGroupRequest): Promise<CreateInteractionRuleGroupResponse> {
        const options = ParamCreater().createInteractionRuleGroup(createInteractionRuleGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建智能直播间。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建智能直播间
     * @param {CreateSmartLiveRoomReq} createSmartLiveRoomRequestBody 创建智能直播间请求。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSmartLiveRoom(createSmartLiveRoomRequest?: CreateSmartLiveRoomRequest): Promise<CreateSmartLiveRoomResponse> {
        const options = ParamCreater().createSmartLiveRoom(createSmartLiveRoomRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除智能直播间互动规则库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除智能直播间互动规则库
     * @param {string} groupId 互动规则库ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInteractionRuleGroup(deleteInteractionRuleGroupRequest?: DeleteInteractionRuleGroupRequest): Promise<DeleteInteractionRuleGroupResponse> {
        const options = ParamCreater().deleteInteractionRuleGroup(deleteInteractionRuleGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除智能直播间。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除智能直播间
     * @param {string} roomId 剧本ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSmartLiveRoom(deleteSmartLiveRoomRequest?: DeleteSmartLiveRoomRequest): Promise<DeleteSmartLiveRoomResponse> {
        const options = ParamCreater().deleteSmartLiveRoom(deleteSmartLiveRoomRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于智能直播间互动规则库列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询智能直播间互动规则库列表
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询。
     * @param {number} [limit] 每页显示的条目数量。
     * @param {string} [createSince] 过滤创建时间&gt;&#x3D;输入时间的记录。
     * @param {string} [createUntil] 过滤创建时间&lt;&#x3D;输入时间的记录。
     * @param {string} [groupName] 规则库名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInteractionRuleGroups(listInteractionRuleGroupsRequest?: ListInteractionRuleGroupsRequest): Promise<ListInteractionRuleGroupsResponse> {
        const options = ParamCreater().listInteractionRuleGroups(listInteractionRuleGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于智能直播间列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询智能直播间列表
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询。
     * @param {number} [limit] 每页显示的条目数量。
     * @param {string} [roomName] 按直播间名称模糊查询。
     * @param {string} [dhId] 按数字人形象ID查询。
     * @param {string} [modelName] 按形象名称模糊查询。
     * @param {string} [liveState] 当前直播间直播状态。 WAITING，PROCESSING，SUCCESS，FAILED，CANCELED对应直播任务状态 NULL 对应没有直播任务 可多个状态查询，使用英文逗号分隔。
     * @param {string} [startTime] 最近直播任务起始时间。格式遵循：RFC 3339 如\&quot;2021-01-10T08:43:17Z\&quot;。
     * @param {string} [endTime] 最近直播任务结束时间。格式遵循：RFC 3339 如\&quot;2021-01-10T10:43:17Z\&quot;。
     * @param {string} [roomType] 按直播间类型查询。直播间类型。 * NORMAL: 普通直播间，直播间一直存在，可以反复开播 * TEMP: 临时直播间,直播任务结束后自动清理直播间。 * TEMPLATE: 直播间模板。
     * @param {string} [templateOwnType] 按照自己拥有的和别人分享以及公共的模板进行查询 * OWNED 自己拥有且暂未共享的 * SHARED_TO_OHTERS 分享给别人的 * SHARED_FROM_OHTERS 别人分享给我的 * PUBLIC 公共模板
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSmartLiveRooms(listSmartLiveRoomsRequest?: ListSmartLiveRoomsRequest): Promise<ListSmartLiveRoomsResponse> {
        const options = ParamCreater().listSmartLiveRooms(listSmartLiveRoomsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询智能直播剧本详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询智能直播剧本详情
     * @param {string} roomId 剧本ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSmartLiveRoom(showSmartLiveRoomRequest?: ShowSmartLiveRoomRequest): Promise<ShowSmartLiveRoomResponse> {
        const options = ParamCreater().showSmartLiveRoom(showSmartLiveRoomRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于更新智能直播间互动规则库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新智能直播间互动规则库
     * @param {string} groupId 互动规则库ID。
     * @param {InteractionRuleGroup} updateInteractionRuleGroupRequestBody 创建智能直播间互动规则。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInteractionRuleGroup(updateInteractionRuleGroupRequest?: UpdateInteractionRuleGroupRequest): Promise<UpdateInteractionRuleGroupResponse> {
        const options = ParamCreater().updateInteractionRuleGroup(updateInteractionRuleGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于智能直播间信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新智能直播间信息
     * @param {string} roomId 剧本ID。
     * @param {CreateSmartLiveRoomReq} updateSmartLiveRoomRequestBody 更新智能直播间请求。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSmartLiveRoom(updateSmartLiveRoomRequest?: UpdateSmartLiveRoomRequest): Promise<UpdateSmartLiveRoomResponse> {
        const options = ParamCreater().updateSmartLiveRoom(updateSmartLiveRoomRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数字人风格列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数字人风格列表
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询。
     * @param {number} [limit] 每页显示的条目数量。
     * @param {string} [state] 任务状态，默认所有状态。  可多个状态查询，使用英文逗号分隔。  如state&#x3D;CREATING,PUBLISHED
     * @param {string} [sortKey] 排序字段，目前只支持create_time。
     * @param {string} [sortDir] 排序方式。 * asc：升序 * desc：降序  默认asc升序。
     * @param {string} [createUntil] 过滤创建时间&lt;&#x3D;输入时间的记录。
     * @param {string} [createSince] 过滤创建时间&gt;&#x3D;输入时间的记录。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStyles(listStylesRequest?: ListStylesRequest): Promise<ListStylesResponse> {
        const options = ParamCreater().listStyles(listStylesRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 提交训练任务,执行该接口后,任务会进入审核状态,审核完成后会等待训练。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 提交语音训练任务
     * @param {string} jobId 任务id。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public commitVoiceTrainingJob(commitVoiceTrainingJobRequest?: CommitVoiceTrainingJobRequest): Promise<CommitVoiceTrainingJobResponse> {
        const options = ParamCreater().commitVoiceTrainingJob(commitVoiceTrainingJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 确认在线录音结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 确认在线录音结果
     * @param {string} jobId 任务id。
     * @param {number} index 语句索引。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public confirmTrainingSegment(confirmTrainingSegmentRequest?: ConfirmTrainingSegmentRequest): Promise<ConfirmTrainingSegmentResponse> {
        const options = ParamCreater().confirmTrainingSegment(confirmTrainingSegmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户创建语音训练基础版任务,该接口会返回一个obs上传地址，用于上传语音文件。
     * 仅支持zip包方式上传语音文件：
     * * 语音文件打包成zip上传：上传的训练数据为一个zip格式压缩文件,其中包含一段wav格式的长音频文件。
     * 
     * &gt; * 文件上传后，调用“提交语音训练任务”接口，启动审核和训练。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建高级版语音训练任务
     * @param {CreateTrainingJobReq} createTrainingAdvanceJobRequestBody 创建任务请求。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTrainingAdvanceJob(createTrainingAdvanceJobRequest?: CreateTrainingAdvanceJobRequest): Promise<CreateTrainingAdvanceJobResponse> {
        const options = ParamCreater().createTrainingAdvanceJob(createTrainingAdvanceJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户创建语音训练基础版任务,该接口会返回一个obs上传地址，用于上传语音文件。
     * 支持2种方式上传语音文件：
     * * 语音文件和文本文件打包成zip上传：语音文件已经切分成20个wav文件，每个语音文件对应一个txt文本文件，所有文件打包成zip文件。语音文件命名规则：0.wav~19.wav；文本文件命名规则：0.txt~19.txt。
     * * 语音文件和文本文件逐句上传：每次上传一句语料的语音文件和文本文件，再调用“确认在线录音结果”接口确认语音和文本内容是否一致。确认成功后再上传和确认下一句。
     * 
     * &gt; * 文件上传后，调用“提交语音训练任务”接口，启动审核和训练。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建基础版语音训练任务
     * @param {CreateTrainingJobReq} createTrainingBasicJobRequestBody 创建任务请求。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTrainingBasicJob(createTrainingBasicJobRequest?: CreateTrainingBasicJobRequest): Promise<CreateTrainingBasicJobResponse> {
        const options = ParamCreater().createTrainingBasicJob(createTrainingBasicJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户创建语音训练基础版任务,该接口会返回一个obs上传地址，用于上传语音文件。
     * 支持2种方式上传语音文件：
     * * 语音文件和文本文件打包成zip上传：语音文件已经切分成100个wav文件，每个语音文件对应一个txt文本文件，所有文件打包成zip文件。语音文件命名规则：0.wav~99.wav；文本文件命名规则：0.txt~99.txt。
     * * 语音文件和文本文件逐句上传：每次上传一句语料的语音文件和文本文件，再调用“确认在线录音结果”接口确认语音和文本内容是否一致。确认成功后再上传和确认下一句。
     * 
     * &gt; * 文件上传后，调用“提交语音训练任务”接口，启动审核和训练。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建进阶版语音训练任务
     * @param {CreateTrainingJobReq} createTrainingMiddleJobRequestBody 创建任务请求。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTrainingMiddleJob(createTrainingMiddleJobRequest?: CreateTrainingMiddleJobRequest): Promise<CreateTrainingMiddleJobResponse> {
        const options = ParamCreater().createTrainingMiddleJob(createTrainingMiddleJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除语音训练任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除语音训练任务
     * @param {string} jobId 任务id。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVoiceTrainingJob(deleteVoiceTrainingJobRequest?: DeleteVoiceTrainingJobRequest): Promise<DeleteVoiceTrainingJobResponse> {
        const options = ParamCreater().deleteVoiceTrainingJob(deleteVoiceTrainingJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询语音训练任务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询语音训练任务列表
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询。
     * @param {number} [limit] 每页显示的条目数量。
     * @param {string} [createUntil] 过滤创建时间&lt;&#x3D;输入时间的记录。
     * @param {string} [createSince] 过滤创建时间&gt;&#x3D;输入时间的记录。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {string} [state] 任务状态，默认所有状态。 可多个状态查询，使用英文逗号分隔。 如state&#x3D;FAILED,WAITING
     * @param {string} [jobId] 任务id。
     * @param {string} [voiceName] 声音名称。
     * @param {string} [tag] 任务标签。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVoiceTrainingJob(listVoiceTrainingJobRequest?: ListVoiceTrainingJobRequest): Promise<ListVoiceTrainingJobResponse> {
        const options = ParamCreater().listVoiceTrainingJob(listVoiceTrainingJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取语音训练任务审核结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取语音训练任务审核结果
     * @param {string} jobId 任务id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobAuditResult(showJobAuditResultRequest?: ShowJobAuditResultRequest): Promise<ShowJobAuditResultResponse> {
        const options = ParamCreater().showJobAuditResult(showJobAuditResultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取语音文件上传地址
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取语音文件上传地址
     * @param {string} jobId 任务id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobUploadingAddress(showJobUploadingAddressRequest?: ShowJobUploadingAddressRequest): Promise<ShowJobUploadingAddressResponse> {
        const options = ParamCreater().showJobUploadingAddress(showJobUploadingAddressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取在线录音确认结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取在线录音确认结果
     * @param {string} jobId 任务id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTrainingSegmentInfo(showTrainingSegmentInfoRequest?: ShowTrainingSegmentInfoRequest): Promise<ShowTrainingSegmentInfoResponse> {
        const options = ParamCreater().showTrainingSegmentInfo(showTrainingSegmentInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询语音训练任务详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询语音训练任务详情
     * @param {string} jobId 任务id。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVoiceTrainingJob(showVoiceTrainingJobRequest?: ShowVoiceTrainingJobRequest): Promise<ShowVoiceTrainingJobResponse> {
        const options = ParamCreater().showVoiceTrainingJob(showVoiceTrainingJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建分身数字人模型训练任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建分身数字人模型训练任务
     * @param {Create2dModelTrainingJobReq} create2dModelTrainingJobRequestBody 创建分身数字人模型训练任务请求。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public create2dModelTrainingJob(create2dModelTrainingJobRequest?: Create2dModelTrainingJobRequest): Promise<Create2dModelTrainingJobResponse> {
        const options = ParamCreater().create2dModelTrainingJob(create2dModelTrainingJobRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除分身数字人模型训练任务。同时需要删除训练任务相关的训练视频、身份证照片、授权文件、模型资产等。
     * &gt; * 该接口应当在任务处于以下状态时调用：WAIT_FILE_UPLOAD、AUTO_VERIFY_FAILED、MANUAL_VERIFYING、MANUAL_VERIFY_FAILED、TRAINING_DATA_PREPROCESS_FAILED、TRAIN_FAILED、INFERENCE_DATA_PREPROCESS_FAILED、JOB_SUCCESS、WAIT_USER_CONFIRM、JOB_REJECT、JOB_FINISH
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除分身数字人模型训练任务
     * @param {string} jobId 任务ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public delete2dModelTrainingJob(delete2dModelTrainingJobRequest?: Delete2dModelTrainingJobRequest): Promise<Delete2dModelTrainingJobResponse> {
        const options = ParamCreater().delete2dModelTrainingJob(delete2dModelTrainingJobRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于租户执行分身数字人模型训练任务命令，如提交训练审核等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 租户执行分身数字人模型训练任务命令
     * @param {string} jobId 任务ID。
     * @param {Execute2dModelTrainingCommandByUserReq} execute2dModelTrainingCommandByUserRequestBody 租户执行分身数字人模型训练任务命令请求。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public execute2dModelTrainingCommandByUser(execute2dModelTrainingCommandByUserRequest?: Execute2dModelTrainingCommandByUserRequest): Promise<Execute2dModelTrainingCommandByUserResponse> {
        const options = ParamCreater().execute2dModelTrainingCommandByUser(execute2dModelTrainingCommandByUserRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询分身数字人模型训练任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询分身数字人模型训练任务列表
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询。
     * @param {number} [limit] 每页显示的条目数量。
     * @param {string} [state] 任务状态，默认所有状态。  可多个状态查询，使用英文逗号分隔。  如state&#x3D;CREATING,PUBLISHED
     * @param {string} [sortKey] 排序字段，目前只支持create_time。
     * @param {string} [sortDir] 排序方式。 * asc：升序 * desc：降序  默认asc升序。
     * @param {string} [createUntil] 过滤创建时间&lt;&#x3D;输入时间的记录。
     * @param {string} [createSince] 过滤创建时间&gt;&#x3D;输入时间的记录。
     * @param {string} [batchName] 任务批次名称。
     * @param {string} [tag] 任务标签。
     * @param {string} [jobId] 任务ID。
     * @param {string} [name] 分身数字人模型名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public list2dModelTrainingJob(list2dModelTrainingJobRequest?: List2dModelTrainingJobRequest): Promise<List2dModelTrainingJobResponse> {
        const options = ParamCreater().list2dModelTrainingJob(list2dModelTrainingJobRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询分身数字人模型训练任务详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询分身数字人模型训练任务详情
     * @param {string} jobId 任务ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public show2dModelTrainingJob(show2dModelTrainingJobRequest?: Show2dModelTrainingJobRequest): Promise<Show2dModelTrainingJobResponse> {
        const options = ParamCreater().show2dModelTrainingJob(show2dModelTrainingJobRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于更新分身数字人模型训练任务。用于在自动审核或者人工审核不通过情况下，更新训练视频、身份证照片等。
     * &gt; * 该接口只能在AUTO_VERIFY_FAILED或者MANUAL_VERIFY_FAILED状态下调用
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新分身数字人模型训练任务
     * @param {string} jobId 任务ID。
     * @param {Create2dModelTrainingJobReq} update2dModelTrainingJobRequestBody 更新分身数字人模型训练任务请求。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public update2dModelTrainingJob(update2dModelTrainingJobRequest?: Update2dModelTrainingJobRequest): Promise<Update2dModelTrainingJobResponse> {
        const options = ParamCreater().update2dModelTrainingJob(update2dModelTrainingJobRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建驱动数字人表情的任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建语音驱动表情动画任务
     * @param {CreateFASReq} [createFacialAnimationsRequestBody] 数字人语音驱动表情任务创建请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFacialAnimations(createFacialAnimationsRequest?: CreateFacialAnimationsRequest): Promise<CreateFacialAnimationsResponse> {
        const options = ParamCreater().createFacialAnimations(createFacialAnimationsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建驱动数字人表情、动作及语音的任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建语音驱动任务
     * @param {CreateTTSAReq} createTTSARequestBody 数字人语音驱动任务创建请求。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTtsa(createTtsaRequest?: CreateTtsaRequest): Promise<CreateTtsaResponse> {
        const options = ParamCreater().createTtsa(createTtsaRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于获取生成的数字人表情驱动数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取语音驱动表情数据
     * @param {string} jobId 表情驱动任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFacialAnimationsData(listFacialAnimationsDataRequest?: ListFacialAnimationsDataRequest): Promise<ListFacialAnimationsDataResponse> {
        const options = ParamCreater().listFacialAnimationsData(listFacialAnimationsDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于获取生成的数字人驱动数据，包括语音、表情、动作等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取语音驱动数据
     * @param {string} jobId 任务ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {number} [offset] 偏移量，表示生成内容时间偏移，目前每次返回2秒内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTtsaData(listTtsaDataRequest?: ListTtsaDataRequest): Promise<ListTtsaDataResponse> {
        const options = ParamCreater().listTtsaData(listTtsaDataRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询驱动数字人表情、动作及语音的任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取语音驱动任务列表
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询。
     * @param {number} [limit] 每页显示的条目数量。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTtsaJobs(listTtsaJobsRequest?: ListTtsaJobsRequest): Promise<ListTtsaJobsResponse> {
        const options = ParamCreater().listTtsaJobs(listTtsaJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建生成播报内容的语音试听文件任务。第三方音色试听需要收费，收费标准参考：https://marketplace.huaweicloud.com/product/OFFI919400645308506112#productid&#x3D;OFFI919400645308506112
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建TTS试听任务
     * @param {CreateTtsAuditionRequestBody} createTtsAuditionRequestBody 创建文本转音频试听请求。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用uuId，若不携带，则后台自动生成
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTtsAudition(createTtsAuditionRequest?: CreateTtsAuditionRequest): Promise<CreateTtsAuditionResponse> {
        const options = ParamCreater().createTtsAudition(createTtsAuditionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于获取TTS试听文件下载链接，返回List中包含当前已生产的试听文件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取TTS试听文件
     * @param {string} jobId 任务ID。
     * @param {string} [xRequestId] 请求requestId，用来标识一路请求，用于问题跟踪定位，建议使用uuId，若不携带，则后台自动生成
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTtsAuditionFile(showTtsAuditionFileRequest?: ShowTtsAuditionFileRequest): Promise<ShowTtsAuditionFileResponse> {
        const options = ParamCreater().showTtsAuditionFile(showTtsAuditionFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建视频驱动任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建视频驱动任务
     * @param {VideoMotionCaptureJobReq} createVideoMotionCaptureJobRequestBody 视频驱动任务创建请求。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {string} [xUserPrivilege] 测试用户判断。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVideoMotionCaptureJob(createVideoMotionCaptureJobRequest?: CreateVideoMotionCaptureJobRequest): Promise<CreateVideoMotionCaptureJobResponse> {
        const options = ParamCreater().createVideoMotionCaptureJob(createVideoMotionCaptureJobRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于控制数字人驱动。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 控制数字人驱动
     * @param {string} jobId 任务ID。
     * @param {ControlDigitalHumanLiveReq} executeVideoMotionCaptureCommandRequestBody 控制数字人驱动。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeVideoMotionCaptureCommand(executeVideoMotionCaptureCommandRequest?: ExecuteVideoMotionCaptureCommandRequest): Promise<ExecuteVideoMotionCaptureCommandResponse> {
        const options = ParamCreater().executeVideoMotionCaptureCommand(executeVideoMotionCaptureCommandRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询视频驱动任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询视频驱动任务列表
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询。
     * @param {number} [limit] 每页显示的条目数量。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVideoMotionCaptureJobs(listVideoMotionCaptureJobsRequest?: ListVideoMotionCaptureJobsRequest): Promise<ListVideoMotionCaptureJobsResponse> {
        const options = ParamCreater().listVideoMotionCaptureJobs(listVideoMotionCaptureJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询视频驱动任务详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询视频驱动任务详情
     * @param {string} jobId 任务ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVideoMotionCaptureJob(showVideoMotionCaptureJobRequest?: ShowVideoMotionCaptureJobRequest): Promise<ShowVideoMotionCaptureJobResponse> {
        const options = ParamCreater().showVideoMotionCaptureJob(showVideoMotionCaptureJobRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于停止视频驱动任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止视频驱动任务
     * @param {string} jobId 任务ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopVideoMotionCaptureJob(stopVideoMotionCaptureJobRequest?: StopVideoMotionCaptureJobRequest): Promise<StopVideoMotionCaptureJobResponse> {
        const options = ParamCreater().stopVideoMotionCaptureJob(stopVideoMotionCaptureJobRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于复制视频制作剧本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 复制视频制作剧本
     * @param {string} scriptId 剧本ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public copyVideoScripts(copyVideoScriptsRequest?: CopyVideoScriptsRequest): Promise<CopyVideoScriptsResponse> {
        const options = ParamCreater().copyVideoScripts(copyVideoScriptsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建视频制作剧本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建视频制作剧本
     * @param {CreateVideoScriptsReq} createVideoScriptsRequestBody 创建视频制作脚本请求。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVideoScripts(createVideoScriptsRequest?: CreateVideoScriptsRequest): Promise<CreateVideoScriptsResponse> {
        const options = ParamCreater().createVideoScripts(createVideoScriptsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除视频制作剧本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除视频制作剧本
     * @param {string} scriptId 剧本ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVideoScript(deleteVideoScriptRequest?: DeleteVideoScriptRequest): Promise<DeleteVideoScriptResponse> {
        const options = ParamCreater().deleteVideoScript(deleteVideoScriptRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询视频制作剧本列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询视频制作剧本列表
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询。
     * @param {number} [limit] 每页显示的条目数量。
     * @param {string} [name] 按名称模糊查询。
     * @param {'VIDEO_DRAFT' | 'SYSTEM_VIDEO_TEMPLET'} [scriptCatalog] 剧本类型。默认查询VIDEO_DRAFT。 * VIDEO_DRAFT：视频草稿。 * SYSTEM_VIDEO_TEMPLET： 系统视频模板。
     * @param {'LANDSCAPE' | 'VERTICAL'} [viewMode] 横竖屏类型（内部参数，不对外开放）。默认值是LANDSCAPE。 * LANDSCAPE：横屏。 * VERTICAL： 竖屏。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVideoScripts(listVideoScriptsRequest?: ListVideoScriptsRequest): Promise<ListVideoScriptsResponse> {
        const options = ParamCreater().listVideoScripts(listVideoScriptsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询视频制作剧本详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询视频制作剧本详情
     * @param {string} scriptId 剧本ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVideoScript(showVideoScriptRequest?: ShowVideoScriptRequest): Promise<ShowVideoScriptResponse> {
        const options = ParamCreater().showVideoScript(showVideoScriptRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于更新视频制作剧本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新视频制作剧本
     * @param {string} scriptId 剧本ID。
     * @param {UpdateVideoScriptsReq} updateVideoScriptRequestBody 更新数字人请求。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 第三方用户ID。 &gt; * 不允许输入中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVideoScript(updateVideoScriptRequest?: UpdateVideoScriptRequest): Promise<UpdateVideoScriptResponse> {
        const options = ParamCreater().updateVideoScript(updateVideoScriptRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 该接口用于创建对话链接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDialogUrl(createDialogUrlRequest?: CreateDialogUrlRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/digital-human-chat/create-dialog-url",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (createDialogUrlRequest !== null && createDialogUrlRequest !== undefined) {
                if (createDialogUrlRequest instanceof CreateDialogUrlRequest) {
                    body = createDialogUrlRequest.body
                    authorization = createDialogUrlRequest.authorization;
                    xSdkDate = createDialogUrlRequest.xSdkDate;
                    xProjectId = createDialogUrlRequest.xProjectId;
                    xAppUserId = createDialogUrlRequest.xAppUserId;
                } else {
                    body = createDialogUrlRequest['body'];
                    authorization = createDialogUrlRequest['Authorization'];
                    xSdkDate = createDialogUrlRequest['X-Sdk-Date'];
                    xProjectId = createDialogUrlRequest['X-Project-Id'];
                    xAppUserId = createDialogUrlRequest['X-App-UserId'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询数字人智能交互任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSmartChatJob(showSmartChatJobRequest?: ShowSmartChatJobRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/digital-human-chat/smart-chat-rooms/{room_id}/smart-chat-jobs/{job_id}/state",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let roomId;
            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (showSmartChatJobRequest !== null && showSmartChatJobRequest !== undefined) {
                if (showSmartChatJobRequest instanceof ShowSmartChatJobRequest) {
                    roomId = showSmartChatJobRequest.roomId;
                    jobId = showSmartChatJobRequest.jobId;
                    authorization = showSmartChatJobRequest.authorization;
                    xSdkDate = showSmartChatJobRequest.xSdkDate;
                    xProjectId = showSmartChatJobRequest.xProjectId;
                    xAppUserId = showSmartChatJobRequest.xAppUserId;
                } else {
                    roomId = showSmartChatJobRequest['room_id'];
                    jobId = showSmartChatJobRequest['job_id'];
                    authorization = showSmartChatJobRequest['Authorization'];
                    xSdkDate = showSmartChatJobRequest['X-Sdk-Date'];
                    xProjectId = showSmartChatJobRequest['X-Project-Id'];
                    xAppUserId = showSmartChatJobRequest['X-App-UserId'];
                }
            }

        
            if (roomId === null || roomId === undefined) {
            throw new RequiredError('roomId','Required parameter roomId was null or undefined when calling showSmartChatJob.');
            }
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showSmartChatJob.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'room_id': roomId,'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于启动数字人智能交互任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startSmartChatJob(startSmartChatJobRequest?: StartSmartChatJobRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/digital-human-chat/smart-chat-rooms/{room_id}/smart-chat-jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let roomId;
            
            let robotId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (startSmartChatJobRequest !== null && startSmartChatJobRequest !== undefined) {
                if (startSmartChatJobRequest instanceof StartSmartChatJobRequest) {
                    roomId = startSmartChatJobRequest.roomId;
                    robotId = startSmartChatJobRequest.robotId;
                    authorization = startSmartChatJobRequest.authorization;
                    xSdkDate = startSmartChatJobRequest.xSdkDate;
                    xProjectId = startSmartChatJobRequest.xProjectId;
                    xAppUserId = startSmartChatJobRequest.xAppUserId;
                } else {
                    roomId = startSmartChatJobRequest['room_id'];
                    robotId = startSmartChatJobRequest['robot_id'];
                    authorization = startSmartChatJobRequest['Authorization'];
                    xSdkDate = startSmartChatJobRequest['X-Sdk-Date'];
                    xProjectId = startSmartChatJobRequest['X-Project-Id'];
                    xAppUserId = startSmartChatJobRequest['X-App-UserId'];
                }
            }

        
            if (roomId === null || roomId === undefined) {
            throw new RequiredError('roomId','Required parameter roomId was null or undefined when calling startSmartChatJob.');
            }
            if (robotId === null || robotId === undefined) {
                throw new RequiredError('robotId','Required parameter robotId was null or undefined when calling startSmartChatJob.');
            }
            if (robotId !== null && robotId !== undefined) {
                localVarQueryParameter['robot_id'] = robotId;
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'room_id': roomId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于结束数字人智能交互任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopSmartChatJob(stopSmartChatJobRequest?: StopSmartChatJobRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/digital-human-chat/smart-chat-rooms/{room_id}/smart-chat-jobs/{job_id}/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let roomId;
            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (stopSmartChatJobRequest !== null && stopSmartChatJobRequest !== undefined) {
                if (stopSmartChatJobRequest instanceof StopSmartChatJobRequest) {
                    roomId = stopSmartChatJobRequest.roomId;
                    jobId = stopSmartChatJobRequest.jobId;
                    authorization = stopSmartChatJobRequest.authorization;
                    xSdkDate = stopSmartChatJobRequest.xSdkDate;
                    xProjectId = stopSmartChatJobRequest.xProjectId;
                    xAppUserId = stopSmartChatJobRequest.xAppUserId;
                } else {
                    roomId = stopSmartChatJobRequest['room_id'];
                    jobId = stopSmartChatJobRequest['job_id'];
                    authorization = stopSmartChatJobRequest['Authorization'];
                    xSdkDate = stopSmartChatJobRequest['X-Sdk-Date'];
                    xProjectId = stopSmartChatJobRequest['X-Project-Id'];
                    xAppUserId = stopSmartChatJobRequest['X-App-UserId'];
                }
            }

        
            if (roomId === null || roomId === undefined) {
            throw new RequiredError('roomId','Required parameter roomId was null or undefined when calling stopSmartChatJob.');
            }
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling stopSmartChatJob.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'room_id': roomId,'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于在资产库中添加上传新的媒体资产。可上传的资产类型包括：分身数字人模型、背景图片、素材图片、素材视频、PPT等。
         * * &gt; 资产类型是IMAGE时，通过system_properties来区分背景图片（BACKGROUND_IMG）、素材图片（MATERIAL_IMG）。
         * * &gt; 资产类型是VIDEO时，通过system_properties来区分素材视频（MATERIAL_VIDEO）、名片视频（BUSSINESS_CARD_VIDEO）。
         * * &gt; MetaStudio平台生成的视频，system_properties带CREATED_BY_PLATFORM。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDigitalAsset(createDigitalAssetRequest?: CreateDigitalAssetRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/digital-assets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let xSdkDate;
            
            let xAppUserId;

            if (createDigitalAssetRequest !== null && createDigitalAssetRequest !== undefined) {
                if (createDigitalAssetRequest instanceof CreateDigitalAssetRequest) {
                    body = createDigitalAssetRequest.body
                    authorization = createDigitalAssetRequest.authorization;
                    xSdkDate = createDigitalAssetRequest.xSdkDate;
                    xAppUserId = createDigitalAssetRequest.xAppUserId;
                } else {
                    body = createDigitalAssetRequest['body'];
                    authorization = createDigitalAssetRequest['Authorization'];
                    xSdkDate = createDigitalAssetRequest['X-Sdk-Date'];
                    xAppUserId = createDigitalAssetRequest['X-App-UserId'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除资产库中的媒体资产。调用该接口删除媒体资产时，媒体资产会放入回收站中，不会彻底删除。如需彻底删除资产，需增加“mode&#x3D;force”参数配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAsset(deleteAssetRequest?: DeleteAssetRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/digital-assets/{asset_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let assetId;
            
            let authorization;
            
            let xSdkDate;
            
            let xAppUserId;
            
            let mode;

            if (deleteAssetRequest !== null && deleteAssetRequest !== undefined) {
                if (deleteAssetRequest instanceof DeleteAssetRequest) {
                    assetId = deleteAssetRequest.assetId;
                    authorization = deleteAssetRequest.authorization;
                    xSdkDate = deleteAssetRequest.xSdkDate;
                    xAppUserId = deleteAssetRequest.xAppUserId;
                    mode = deleteAssetRequest.mode;
                } else {
                    assetId = deleteAssetRequest['asset_id'];
                    authorization = deleteAssetRequest['Authorization'];
                    xSdkDate = deleteAssetRequest['X-Sdk-Date'];
                    xAppUserId = deleteAssetRequest['X-App-UserId'];
                    mode = deleteAssetRequest['mode'];
                }
            }

        
            if (assetId === null || assetId === undefined) {
            throw new RequiredError('assetId','Required parameter assetId was null or undefined when calling deleteAsset.');
            }
            if (mode !== null && mode !== undefined) {
                localVarQueryParameter['mode'] = mode;
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'asset_id': assetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询媒体资产库中指定的多个资产的概要信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAssetSummary(listAssetSummaryRequest?: ListAssetSummaryRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/digital-assets/summarys",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let xSdkDate;

            if (listAssetSummaryRequest !== null && listAssetSummaryRequest !== undefined) {
                if (listAssetSummaryRequest instanceof ListAssetSummaryRequest) {
                    body = listAssetSummaryRequest.body
                    authorization = listAssetSummaryRequest.authorization;
                    xSdkDate = listAssetSummaryRequest.xSdkDate;
                } else {
                    body = listAssetSummaryRequest['body'];
                    authorization = listAssetSummaryRequest['Authorization'];
                    xSdkDate = listAssetSummaryRequest['X-Sdk-Date'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询资产库中的媒体资产列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAssets(listAssetsRequest?: ListAssetsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/digital-assets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let authorization;
            
            let xSdkDate;
            
            let xAppUserId;
            
            let limit;
            
            let offset;
            
            let name;
            
            let tag;
            
            let startTime;
            
            let endTime;
            
            let assetType;
            
            let sortKey;
            
            let sortDir;
            
            let assetSource;
            
            let assetState;
            
            let styleId;
            
            let renderEngine;
            
            let sex;
            
            let language;
            
            let systemProperty;
            
            let actionEditable;
            
            let isMovable;
            
            let voiceProvider;
            
            let role;

            if (listAssetsRequest !== null && listAssetsRequest !== undefined) {
                if (listAssetsRequest instanceof ListAssetsRequest) {
                    authorization = listAssetsRequest.authorization;
                    xSdkDate = listAssetsRequest.xSdkDate;
                    xAppUserId = listAssetsRequest.xAppUserId;
                    limit = listAssetsRequest.limit;
                    offset = listAssetsRequest.offset;
                    name = listAssetsRequest.name;
                    tag = listAssetsRequest.tag;
                    startTime = listAssetsRequest.startTime;
                    endTime = listAssetsRequest.endTime;
                    assetType = listAssetsRequest.assetType;
                    sortKey = listAssetsRequest.sortKey;
                    sortDir = listAssetsRequest.sortDir;
                    assetSource = listAssetsRequest.assetSource;
                    assetState = listAssetsRequest.assetState;
                    styleId = listAssetsRequest.styleId;
                    renderEngine = listAssetsRequest.renderEngine;
                    sex = listAssetsRequest.sex;
                    language = listAssetsRequest.language;
                    systemProperty = listAssetsRequest.systemProperty;
                    actionEditable = listAssetsRequest.actionEditable;
                    isMovable = listAssetsRequest.isMovable;
                    voiceProvider = listAssetsRequest.voiceProvider;
                    role = listAssetsRequest.role;
                } else {
                    authorization = listAssetsRequest['Authorization'];
                    xSdkDate = listAssetsRequest['X-Sdk-Date'];
                    xAppUserId = listAssetsRequest['X-App-UserId'];
                    limit = listAssetsRequest['limit'];
                    offset = listAssetsRequest['offset'];
                    name = listAssetsRequest['name'];
                    tag = listAssetsRequest['tag'];
                    startTime = listAssetsRequest['start_time'];
                    endTime = listAssetsRequest['end_time'];
                    assetType = listAssetsRequest['asset_type'];
                    sortKey = listAssetsRequest['sort_key'];
                    sortDir = listAssetsRequest['sort_dir'];
                    assetSource = listAssetsRequest['asset_source'];
                    assetState = listAssetsRequest['asset_state'];
                    styleId = listAssetsRequest['style_id'];
                    renderEngine = listAssetsRequest['render_engine'];
                    sex = listAssetsRequest['sex'];
                    language = listAssetsRequest['language'];
                    systemProperty = listAssetsRequest['system_property'];
                    actionEditable = listAssetsRequest['action_editable'];
                    isMovable = listAssetsRequest['is_movable'];
                    voiceProvider = listAssetsRequest['voice_provider'];
                    role = listAssetsRequest['role'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (tag !== null && tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (assetType !== null && assetType !== undefined) {
                localVarQueryParameter['asset_type'] = assetType;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (assetSource !== null && assetSource !== undefined) {
                localVarQueryParameter['asset_source'] = assetSource;
            }
            if (assetState !== null && assetState !== undefined) {
                localVarQueryParameter['asset_state'] = assetState;
            }
            if (styleId !== null && styleId !== undefined) {
                localVarQueryParameter['style_id'] = styleId;
            }
            if (renderEngine !== null && renderEngine !== undefined) {
                localVarQueryParameter['render_engine'] = renderEngine;
            }
            if (sex !== null && sex !== undefined) {
                localVarQueryParameter['sex'] = sex;
            }
            if (language !== null && language !== undefined) {
                localVarQueryParameter['language'] = language;
            }
            if (systemProperty !== null && systemProperty !== undefined) {
                localVarQueryParameter['system_property'] = systemProperty;
            }
            if (actionEditable !== null && actionEditable !== undefined) {
                localVarQueryParameter['action_editable'] = actionEditable;
            }
            if (isMovable !== null && isMovable !== undefined) {
                localVarQueryParameter['is_movable'] = isMovable;
            }
            if (voiceProvider !== null && voiceProvider !== undefined) {
                localVarQueryParameter['voice_provider'] = voiceProvider;
            }
            if (role !== null && role !== undefined) {
                localVarQueryParameter['role'] = role;
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于恢复被删除至回收站的媒体资产。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreAsset(restoreAssetRequest?: RestoreAssetRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/digital-assets/{asset_id}/restore",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let assetId;
            
            let authorization;
            
            let xSdkDate;
            
            let xAppUserId;

            if (restoreAssetRequest !== null && restoreAssetRequest !== undefined) {
                if (restoreAssetRequest instanceof RestoreAssetRequest) {
                    assetId = restoreAssetRequest.assetId;
                    authorization = restoreAssetRequest.authorization;
                    xSdkDate = restoreAssetRequest.xSdkDate;
                    xAppUserId = restoreAssetRequest.xAppUserId;
                } else {
                    assetId = restoreAssetRequest['asset_id'];
                    authorization = restoreAssetRequest['Authorization'];
                    xSdkDate = restoreAssetRequest['X-Sdk-Date'];
                    xAppUserId = restoreAssetRequest['X-App-UserId'];
                }
            }

        
            if (assetId === null || assetId === undefined) {
            throw new RequiredError('assetId','Required parameter assetId was null or undefined when calling restoreAsset.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'asset_id': assetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询资产库中指定媒体资产的详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAsset(showAssetRequest?: ShowAssetRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/digital-assets/{asset_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let assetId;
            
            let authorization;
            
            let xSdkDate;
            
            let xAppUserId;

            if (showAssetRequest !== null && showAssetRequest !== undefined) {
                if (showAssetRequest instanceof ShowAssetRequest) {
                    assetId = showAssetRequest.assetId;
                    authorization = showAssetRequest.authorization;
                    xSdkDate = showAssetRequest.xSdkDate;
                    xAppUserId = showAssetRequest.xAppUserId;
                } else {
                    assetId = showAssetRequest['asset_id'];
                    authorization = showAssetRequest['Authorization'];
                    xSdkDate = showAssetRequest['X-Sdk-Date'];
                    xAppUserId = showAssetRequest['X-App-UserId'];
                }
            }

        
            if (assetId === null || assetId === undefined) {
            throw new RequiredError('assetId','Required parameter assetId was null or undefined when calling showAsset.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'asset_id': assetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于更新资产库中的媒体资产信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDigitalAsset(updateDigitalAssetRequest?: UpdateDigitalAssetRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/digital-assets/{asset_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let assetId;
            
            let authorization;
            
            let xSdkDate;
            
            let xAppUserId;

            if (updateDigitalAssetRequest !== null && updateDigitalAssetRequest !== undefined) {
                if (updateDigitalAssetRequest instanceof UpdateDigitalAssetRequest) {
                    assetId = updateDigitalAssetRequest.assetId;
                    body = updateDigitalAssetRequest.body
                    authorization = updateDigitalAssetRequest.authorization;
                    xSdkDate = updateDigitalAssetRequest.xSdkDate;
                    xAppUserId = updateDigitalAssetRequest.xAppUserId;
                } else {
                    assetId = updateDigitalAssetRequest['asset_id'];
                    body = updateDigitalAssetRequest['body'];
                    authorization = updateDigitalAssetRequest['Authorization'];
                    xSdkDate = updateDigitalAssetRequest['X-Sdk-Date'];
                    xAppUserId = updateDigitalAssetRequest['X-App-UserId'];
                }
            }

        
            if (assetId === null || assetId === undefined) {
            throw new RequiredError('assetId','Required parameter assetId was null or undefined when calling updateDigitalAsset.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'asset_id': assetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于数字人名片制作任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDigitalHumanBusinessCard(createDigitalHumanBusinessCardRequest?: CreateDigitalHumanBusinessCardRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/digital-human-business-cards",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (createDigitalHumanBusinessCardRequest !== null && createDigitalHumanBusinessCardRequest !== undefined) {
                if (createDigitalHumanBusinessCardRequest instanceof CreateDigitalHumanBusinessCardRequest) {
                    body = createDigitalHumanBusinessCardRequest.body
                    authorization = createDigitalHumanBusinessCardRequest.authorization;
                    xSdkDate = createDigitalHumanBusinessCardRequest.xSdkDate;
                    xProjectId = createDigitalHumanBusinessCardRequest.xProjectId;
                    xAppUserId = createDigitalHumanBusinessCardRequest.xAppUserId;
                } else {
                    body = createDigitalHumanBusinessCardRequest['body'];
                    authorization = createDigitalHumanBusinessCardRequest['Authorization'];
                    xSdkDate = createDigitalHumanBusinessCardRequest['X-Sdk-Date'];
                    xProjectId = createDigitalHumanBusinessCardRequest['X-Project-Id'];
                    xAppUserId = createDigitalHumanBusinessCardRequest['X-App-UserId'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除数字人名片制作任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDigitalHumanBusinessCard(deleteDigitalHumanBusinessCardRequest?: DeleteDigitalHumanBusinessCardRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/digital-human-business-cards/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (deleteDigitalHumanBusinessCardRequest !== null && deleteDigitalHumanBusinessCardRequest !== undefined) {
                if (deleteDigitalHumanBusinessCardRequest instanceof DeleteDigitalHumanBusinessCardRequest) {
                    jobId = deleteDigitalHumanBusinessCardRequest.jobId;
                    authorization = deleteDigitalHumanBusinessCardRequest.authorization;
                    xSdkDate = deleteDigitalHumanBusinessCardRequest.xSdkDate;
                    xProjectId = deleteDigitalHumanBusinessCardRequest.xProjectId;
                    xAppUserId = deleteDigitalHumanBusinessCardRequest.xAppUserId;
                } else {
                    jobId = deleteDigitalHumanBusinessCardRequest['job_id'];
                    authorization = deleteDigitalHumanBusinessCardRequest['Authorization'];
                    xSdkDate = deleteDigitalHumanBusinessCardRequest['X-Sdk-Date'];
                    xProjectId = deleteDigitalHumanBusinessCardRequest['X-Project-Id'];
                    xAppUserId = deleteDigitalHumanBusinessCardRequest['X-App-UserId'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling deleteDigitalHumanBusinessCard.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询数字人名片制作任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDigitalHumanBusinessCard(listDigitalHumanBusinessCardRequest?: ListDigitalHumanBusinessCardRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/digital-human-business-cards",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;
            
            let offset;
            
            let limit;
            
            let state;
            
            let sortKey;
            
            let sortDir;
            
            let createUntil;
            
            let createSince;
            
            let videoAssetName;

            if (listDigitalHumanBusinessCardRequest !== null && listDigitalHumanBusinessCardRequest !== undefined) {
                if (listDigitalHumanBusinessCardRequest instanceof ListDigitalHumanBusinessCardRequest) {
                    authorization = listDigitalHumanBusinessCardRequest.authorization;
                    xSdkDate = listDigitalHumanBusinessCardRequest.xSdkDate;
                    xProjectId = listDigitalHumanBusinessCardRequest.xProjectId;
                    xAppUserId = listDigitalHumanBusinessCardRequest.xAppUserId;
                    offset = listDigitalHumanBusinessCardRequest.offset;
                    limit = listDigitalHumanBusinessCardRequest.limit;
                    state = listDigitalHumanBusinessCardRequest.state;
                    sortKey = listDigitalHumanBusinessCardRequest.sortKey;
                    sortDir = listDigitalHumanBusinessCardRequest.sortDir;
                    createUntil = listDigitalHumanBusinessCardRequest.createUntil;
                    createSince = listDigitalHumanBusinessCardRequest.createSince;
                    videoAssetName = listDigitalHumanBusinessCardRequest.videoAssetName;
                } else {
                    authorization = listDigitalHumanBusinessCardRequest['Authorization'];
                    xSdkDate = listDigitalHumanBusinessCardRequest['X-Sdk-Date'];
                    xProjectId = listDigitalHumanBusinessCardRequest['X-Project-Id'];
                    xAppUserId = listDigitalHumanBusinessCardRequest['X-App-UserId'];
                    offset = listDigitalHumanBusinessCardRequest['offset'];
                    limit = listDigitalHumanBusinessCardRequest['limit'];
                    state = listDigitalHumanBusinessCardRequest['state'];
                    sortKey = listDigitalHumanBusinessCardRequest['sort_key'];
                    sortDir = listDigitalHumanBusinessCardRequest['sort_dir'];
                    createUntil = listDigitalHumanBusinessCardRequest['create_until'];
                    createSince = listDigitalHumanBusinessCardRequest['create_since'];
                    videoAssetName = listDigitalHumanBusinessCardRequest['video_asset_name'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (createUntil !== null && createUntil !== undefined) {
                localVarQueryParameter['create_until'] = createUntil;
            }
            if (createSince !== null && createSince !== undefined) {
                localVarQueryParameter['create_since'] = createSince;
            }
            if (videoAssetName !== null && videoAssetName !== undefined) {
                localVarQueryParameter['video_asset_name'] = videoAssetName;
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询数字人名片制作任务详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDigitalHumanBusinessCard(showDigitalHumanBusinessCardRequest?: ShowDigitalHumanBusinessCardRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/digital-human-business-cards/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (showDigitalHumanBusinessCardRequest !== null && showDigitalHumanBusinessCardRequest !== undefined) {
                if (showDigitalHumanBusinessCardRequest instanceof ShowDigitalHumanBusinessCardRequest) {
                    jobId = showDigitalHumanBusinessCardRequest.jobId;
                    authorization = showDigitalHumanBusinessCardRequest.authorization;
                    xSdkDate = showDigitalHumanBusinessCardRequest.xSdkDate;
                    xProjectId = showDigitalHumanBusinessCardRequest.xProjectId;
                    xAppUserId = showDigitalHumanBusinessCardRequest.xAppUserId;
                } else {
                    jobId = showDigitalHumanBusinessCardRequest['job_id'];
                    authorization = showDigitalHumanBusinessCardRequest['Authorization'];
                    xSdkDate = showDigitalHumanBusinessCardRequest['X-Sdk-Date'];
                    xProjectId = showDigitalHumanBusinessCardRequest['X-Project-Id'];
                    xAppUserId = showDigitalHumanBusinessCardRequest['X-App-UserId'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showDigitalHumanBusinessCard.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于更新数字人名片制作任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDigitalHumanBusinessCard(updateDigitalHumanBusinessCardRequest?: UpdateDigitalHumanBusinessCardRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/digital-human-business-cards/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (updateDigitalHumanBusinessCardRequest !== null && updateDigitalHumanBusinessCardRequest !== undefined) {
                if (updateDigitalHumanBusinessCardRequest instanceof UpdateDigitalHumanBusinessCardRequest) {
                    jobId = updateDigitalHumanBusinessCardRequest.jobId;
                    body = updateDigitalHumanBusinessCardRequest.body
                    authorization = updateDigitalHumanBusinessCardRequest.authorization;
                    xSdkDate = updateDigitalHumanBusinessCardRequest.xSdkDate;
                    xProjectId = updateDigitalHumanBusinessCardRequest.xProjectId;
                    xAppUserId = updateDigitalHumanBusinessCardRequest.xAppUserId;
                } else {
                    jobId = updateDigitalHumanBusinessCardRequest['job_id'];
                    body = updateDigitalHumanBusinessCardRequest['body'];
                    authorization = updateDigitalHumanBusinessCardRequest['Authorization'];
                    xSdkDate = updateDigitalHumanBusinessCardRequest['X-Sdk-Date'];
                    xProjectId = updateDigitalHumanBusinessCardRequest['X-Project-Id'];
                    xAppUserId = updateDigitalHumanBusinessCardRequest['X-App-UserId'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling updateDigitalHumanBusinessCard.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询视频制作任务列表。可查询分身数字人视频制作列表，照片数字人视频制作列表等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDigitalHumanVideo(listDigitalHumanVideoRequest?: ListDigitalHumanVideoRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/digital-human-videos",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;
            
            let offset;
            
            let limit;
            
            let state;
            
            let sortKey;
            
            let sortDir;
            
            let createUntil;
            
            let createSince;
            
            let scriptId;
            
            let assetName;
            
            let jobType;

            if (listDigitalHumanVideoRequest !== null && listDigitalHumanVideoRequest !== undefined) {
                if (listDigitalHumanVideoRequest instanceof ListDigitalHumanVideoRequest) {
                    authorization = listDigitalHumanVideoRequest.authorization;
                    xSdkDate = listDigitalHumanVideoRequest.xSdkDate;
                    xProjectId = listDigitalHumanVideoRequest.xProjectId;
                    xAppUserId = listDigitalHumanVideoRequest.xAppUserId;
                    offset = listDigitalHumanVideoRequest.offset;
                    limit = listDigitalHumanVideoRequest.limit;
                    state = listDigitalHumanVideoRequest.state;
                    sortKey = listDigitalHumanVideoRequest.sortKey;
                    sortDir = listDigitalHumanVideoRequest.sortDir;
                    createUntil = listDigitalHumanVideoRequest.createUntil;
                    createSince = listDigitalHumanVideoRequest.createSince;
                    scriptId = listDigitalHumanVideoRequest.scriptId;
                    assetName = listDigitalHumanVideoRequest.assetName;
                    jobType = listDigitalHumanVideoRequest.jobType;
                } else {
                    authorization = listDigitalHumanVideoRequest['Authorization'];
                    xSdkDate = listDigitalHumanVideoRequest['X-Sdk-Date'];
                    xProjectId = listDigitalHumanVideoRequest['X-Project-Id'];
                    xAppUserId = listDigitalHumanVideoRequest['X-App-UserId'];
                    offset = listDigitalHumanVideoRequest['offset'];
                    limit = listDigitalHumanVideoRequest['limit'];
                    state = listDigitalHumanVideoRequest['state'];
                    sortKey = listDigitalHumanVideoRequest['sort_key'];
                    sortDir = listDigitalHumanVideoRequest['sort_dir'];
                    createUntil = listDigitalHumanVideoRequest['create_until'];
                    createSince = listDigitalHumanVideoRequest['create_since'];
                    scriptId = listDigitalHumanVideoRequest['script_id'];
                    assetName = listDigitalHumanVideoRequest['asset_name'];
                    jobType = listDigitalHumanVideoRequest['job_type'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (createUntil !== null && createUntil !== undefined) {
                localVarQueryParameter['create_until'] = createUntil;
            }
            if (createSince !== null && createSince !== undefined) {
                localVarQueryParameter['create_since'] = createSince;
            }
            if (scriptId !== null && scriptId !== undefined) {
                localVarQueryParameter['script_id'] = scriptId;
            }
            if (assetName !== null && assetName !== undefined) {
                localVarQueryParameter['asset_name'] = assetName;
            }
            if (jobType !== null && jobType !== undefined) {
                localVarQueryParameter['job_type'] = jobType;
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于取消等待中的分身数字人视频制作任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancel2DDigitalHumanVideo(cancel2DDigitalHumanVideoRequest?: Cancel2DDigitalHumanVideoRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/2d-digital-human-videos/{job_id}/cancel",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (cancel2DDigitalHumanVideoRequest !== null && cancel2DDigitalHumanVideoRequest !== undefined) {
                if (cancel2DDigitalHumanVideoRequest instanceof Cancel2DDigitalHumanVideoRequest) {
                    jobId = cancel2DDigitalHumanVideoRequest.jobId;
                    authorization = cancel2DDigitalHumanVideoRequest.authorization;
                    xSdkDate = cancel2DDigitalHumanVideoRequest.xSdkDate;
                    xProjectId = cancel2DDigitalHumanVideoRequest.xProjectId;
                    xAppUserId = cancel2DDigitalHumanVideoRequest.xAppUserId;
                } else {
                    jobId = cancel2DDigitalHumanVideoRequest['job_id'];
                    authorization = cancel2DDigitalHumanVideoRequest['Authorization'];
                    xSdkDate = cancel2DDigitalHumanVideoRequest['X-Sdk-Date'];
                    xProjectId = cancel2DDigitalHumanVideoRequest['X-Project-Id'];
                    xAppUserId = cancel2DDigitalHumanVideoRequest['X-App-UserId'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling cancel2DDigitalHumanVideo.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建分身数字人视频制作任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        create2DDigitalHumanVideo(create2DDigitalHumanVideoRequest?: Create2DDigitalHumanVideoRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/2d-digital-human-videos",
                contentType: "application/json;charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (create2DDigitalHumanVideoRequest !== null && create2DDigitalHumanVideoRequest !== undefined) {
                if (create2DDigitalHumanVideoRequest instanceof Create2DDigitalHumanVideoRequest) {
                    body = create2DDigitalHumanVideoRequest.body
                    authorization = create2DDigitalHumanVideoRequest.authorization;
                    xSdkDate = create2DDigitalHumanVideoRequest.xSdkDate;
                    xProjectId = create2DDigitalHumanVideoRequest.xProjectId;
                    xAppUserId = create2DDigitalHumanVideoRequest.xAppUserId;
                } else {
                    body = create2DDigitalHumanVideoRequest['body'];
                    authorization = create2DDigitalHumanVideoRequest['Authorization'];
                    xSdkDate = create2DDigitalHumanVideoRequest['X-Sdk-Date'];
                    xProjectId = create2DDigitalHumanVideoRequest['X-Project-Id'];
                    xAppUserId = create2DDigitalHumanVideoRequest['X-App-UserId'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询分身数字人视频制作任务详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        show2DDigitalHumanVideo(show2DDigitalHumanVideoRequest?: Show2DDigitalHumanVideoRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/2d-digital-human-videos/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;
            
            let showScript;

            if (show2DDigitalHumanVideoRequest !== null && show2DDigitalHumanVideoRequest !== undefined) {
                if (show2DDigitalHumanVideoRequest instanceof Show2DDigitalHumanVideoRequest) {
                    jobId = show2DDigitalHumanVideoRequest.jobId;
                    authorization = show2DDigitalHumanVideoRequest.authorization;
                    xSdkDate = show2DDigitalHumanVideoRequest.xSdkDate;
                    xProjectId = show2DDigitalHumanVideoRequest.xProjectId;
                    xAppUserId = show2DDigitalHumanVideoRequest.xAppUserId;
                    showScript = show2DDigitalHumanVideoRequest.showScript;
                } else {
                    jobId = show2DDigitalHumanVideoRequest['job_id'];
                    authorization = show2DDigitalHumanVideoRequest['Authorization'];
                    xSdkDate = show2DDigitalHumanVideoRequest['X-Sdk-Date'];
                    xProjectId = show2DDigitalHumanVideoRequest['X-Project-Id'];
                    xAppUserId = show2DDigitalHumanVideoRequest['X-App-UserId'];
                    showScript = show2DDigitalHumanVideoRequest['show_script'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling show2DDigitalHumanVideo.');
            }
            if (showScript !== null && showScript !== undefined) {
                localVarQueryParameter['show_script'] = showScript;
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于取消等待中的照片分身数字人视频制作任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelPhotoDigitalHumanVideo(cancelPhotoDigitalHumanVideoRequest?: CancelPhotoDigitalHumanVideoRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/photo-digital-human-videos/{job_id}/cancel",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (cancelPhotoDigitalHumanVideoRequest !== null && cancelPhotoDigitalHumanVideoRequest !== undefined) {
                if (cancelPhotoDigitalHumanVideoRequest instanceof CancelPhotoDigitalHumanVideoRequest) {
                    jobId = cancelPhotoDigitalHumanVideoRequest.jobId;
                    authorization = cancelPhotoDigitalHumanVideoRequest.authorization;
                    xSdkDate = cancelPhotoDigitalHumanVideoRequest.xSdkDate;
                    xProjectId = cancelPhotoDigitalHumanVideoRequest.xProjectId;
                    xAppUserId = cancelPhotoDigitalHumanVideoRequest.xAppUserId;
                } else {
                    jobId = cancelPhotoDigitalHumanVideoRequest['job_id'];
                    authorization = cancelPhotoDigitalHumanVideoRequest['Authorization'];
                    xSdkDate = cancelPhotoDigitalHumanVideoRequest['X-Sdk-Date'];
                    xProjectId = cancelPhotoDigitalHumanVideoRequest['X-Project-Id'];
                    xAppUserId = cancelPhotoDigitalHumanVideoRequest['X-App-UserId'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling cancelPhotoDigitalHumanVideo.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建照片检测任务，检测照片是否满足制作照片数字人的要求。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPhotoDetection(createPhotoDetectionRequest?: CreatePhotoDetectionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/photo-detection",
                contentType: "application/json;charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (createPhotoDetectionRequest !== null && createPhotoDetectionRequest !== undefined) {
                if (createPhotoDetectionRequest instanceof CreatePhotoDetectionRequest) {
                    body = createPhotoDetectionRequest.body
                    authorization = createPhotoDetectionRequest.authorization;
                    xSdkDate = createPhotoDetectionRequest.xSdkDate;
                    xProjectId = createPhotoDetectionRequest.xProjectId;
                    xAppUserId = createPhotoDetectionRequest.xAppUserId;
                } else {
                    body = createPhotoDetectionRequest['body'];
                    authorization = createPhotoDetectionRequest['Authorization'];
                    xSdkDate = createPhotoDetectionRequest['X-Sdk-Date'];
                    xProjectId = createPhotoDetectionRequest['X-Project-Id'];
                    xAppUserId = createPhotoDetectionRequest['X-App-UserId'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建照片分身数字人视频制作任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPhotoDigitalHumanVideo(createPhotoDigitalHumanVideoRequest?: CreatePhotoDigitalHumanVideoRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/photo-digital-human-videos",
                contentType: "application/json;charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (createPhotoDigitalHumanVideoRequest !== null && createPhotoDigitalHumanVideoRequest !== undefined) {
                if (createPhotoDigitalHumanVideoRequest instanceof CreatePhotoDigitalHumanVideoRequest) {
                    body = createPhotoDigitalHumanVideoRequest.body
                    authorization = createPhotoDigitalHumanVideoRequest.authorization;
                    xSdkDate = createPhotoDigitalHumanVideoRequest.xSdkDate;
                    xProjectId = createPhotoDigitalHumanVideoRequest.xProjectId;
                    xAppUserId = createPhotoDigitalHumanVideoRequest.xAppUserId;
                } else {
                    body = createPhotoDigitalHumanVideoRequest['body'];
                    authorization = createPhotoDigitalHumanVideoRequest['Authorization'];
                    xSdkDate = createPhotoDigitalHumanVideoRequest['X-Sdk-Date'];
                    xProjectId = createPhotoDigitalHumanVideoRequest['X-Project-Id'];
                    xAppUserId = createPhotoDigitalHumanVideoRequest['X-App-UserId'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询照片检测任务详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPhotoDetection(showPhotoDetectionRequest?: ShowPhotoDetectionRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/photo-detection/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (showPhotoDetectionRequest !== null && showPhotoDetectionRequest !== undefined) {
                if (showPhotoDetectionRequest instanceof ShowPhotoDetectionRequest) {
                    jobId = showPhotoDetectionRequest.jobId;
                    authorization = showPhotoDetectionRequest.authorization;
                    xSdkDate = showPhotoDetectionRequest.xSdkDate;
                    xProjectId = showPhotoDetectionRequest.xProjectId;
                    xAppUserId = showPhotoDetectionRequest.xAppUserId;
                } else {
                    jobId = showPhotoDetectionRequest['job_id'];
                    authorization = showPhotoDetectionRequest['Authorization'];
                    xSdkDate = showPhotoDetectionRequest['X-Sdk-Date'];
                    xProjectId = showPhotoDetectionRequest['X-Project-Id'];
                    xAppUserId = showPhotoDetectionRequest['X-App-UserId'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showPhotoDetection.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询照片分身数字人视频制作任务详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPhotoDigitalHumanVideo(showPhotoDigitalHumanVideoRequest?: ShowPhotoDigitalHumanVideoRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/photo-digital-human-videos/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;
            
            let showScript;

            if (showPhotoDigitalHumanVideoRequest !== null && showPhotoDigitalHumanVideoRequest !== undefined) {
                if (showPhotoDigitalHumanVideoRequest instanceof ShowPhotoDigitalHumanVideoRequest) {
                    jobId = showPhotoDigitalHumanVideoRequest.jobId;
                    authorization = showPhotoDigitalHumanVideoRequest.authorization;
                    xSdkDate = showPhotoDigitalHumanVideoRequest.xSdkDate;
                    xProjectId = showPhotoDigitalHumanVideoRequest.xProjectId;
                    xAppUserId = showPhotoDigitalHumanVideoRequest.xAppUserId;
                    showScript = showPhotoDigitalHumanVideoRequest.showScript;
                } else {
                    jobId = showPhotoDigitalHumanVideoRequest['job_id'];
                    authorization = showPhotoDigitalHumanVideoRequest['Authorization'];
                    xSdkDate = showPhotoDigitalHumanVideoRequest['X-Sdk-Date'];
                    xProjectId = showPhotoDigitalHumanVideoRequest['X-Project-Id'];
                    xAppUserId = showPhotoDigitalHumanVideoRequest['X-App-UserId'];
                    showScript = showPhotoDigitalHumanVideoRequest['show_script'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showPhotoDigitalHumanVideo.');
            }
            if (showScript !== null && showScript !== undefined) {
                localVarQueryParameter['show_script'] = showScript;
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 资产文件上传完毕后，通过该接口确认上传完成。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        confirmFileUpload(confirmFileUploadRequest?: ConfirmFileUploadRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/files/{file_id}/complete",
                contentType: "application/json;charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let fileId;
            
            let authorization;
            
            let xSdkDate;
            
            let xAppUserId;

            if (confirmFileUploadRequest !== null && confirmFileUploadRequest !== undefined) {
                if (confirmFileUploadRequest instanceof ConfirmFileUploadRequest) {
                    fileId = confirmFileUploadRequest.fileId;
                    body = confirmFileUploadRequest.body
                    authorization = confirmFileUploadRequest.authorization;
                    xSdkDate = confirmFileUploadRequest.xSdkDate;
                    xAppUserId = confirmFileUploadRequest.xAppUserId;
                } else {
                    fileId = confirmFileUploadRequest['file_id'];
                    body = confirmFileUploadRequest['body'];
                    authorization = confirmFileUploadRequest['Authorization'];
                    xSdkDate = confirmFileUploadRequest['X-Sdk-Date'];
                    xAppUserId = confirmFileUploadRequest['X-App-UserId'];
                }
            }

        
            if (fileId === null || fileId === undefined) {
            throw new RequiredError('fileId','Required parameter fileId was null or undefined when calling confirmFileUpload.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'file_id': fileId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建文件并获取上传URL。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFile(createFileRequest?: CreateFileRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/files",
                contentType: "application/json;charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let xSdkDate;
            
            let xAppUserId;

            if (createFileRequest !== null && createFileRequest !== undefined) {
                if (createFileRequest instanceof CreateFileRequest) {
                    body = createFileRequest.body
                    authorization = createFileRequest.authorization;
                    xSdkDate = createFileRequest.xSdkDate;
                    xAppUserId = createFileRequest.xAppUserId;
                } else {
                    body = createFileRequest['body'];
                    authorization = createFileRequest['Authorization'];
                    xSdkDate = createFileRequest['X-Sdk-Date'];
                    xAppUserId = createFileRequest['X-App-UserId'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除媒体资产库中指定的文件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteFile(deleteFileRequest?: DeleteFileRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/files/{file_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let fileId;
            
            let authorization;
            
            let xSdkDate;
            
            let xAppUserId;

            if (deleteFileRequest !== null && deleteFileRequest !== undefined) {
                if (deleteFileRequest instanceof DeleteFileRequest) {
                    fileId = deleteFileRequest.fileId;
                    authorization = deleteFileRequest.authorization;
                    xSdkDate = deleteFileRequest.xSdkDate;
                    xAppUserId = deleteFileRequest.xAppUserId;
                } else {
                    fileId = deleteFileRequest['file_id'];
                    authorization = deleteFileRequest['Authorization'];
                    xSdkDate = deleteFileRequest['X-Sdk-Date'];
                    xAppUserId = deleteFileRequest['X-App-UserId'];
                }
            }

        
            if (fileId === null || fileId === undefined) {
            throw new RequiredError('fileId','Required parameter fileId was null or undefined when calling deleteFile.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'file_id': fileId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建一次性鉴权码，有效期5分钟，鉴权码只能使用一次，每次使用后需要重新获取。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createOnceCode(createOnceCodeRequest?: CreateOnceCodeRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/digital-human-chat/once-code",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (createOnceCodeRequest !== null && createOnceCodeRequest !== undefined) {
                if (createOnceCodeRequest instanceof CreateOnceCodeRequest) {
                    authorization = createOnceCodeRequest.authorization;
                    xSdkDate = createOnceCodeRequest.xSdkDate;
                    xProjectId = createOnceCodeRequest.xProjectId;
                    xAppUserId = createOnceCodeRequest.xAppUserId;
                } else {
                    authorization = createOnceCodeRequest['Authorization'];
                    xSdkDate = createOnceCodeRequest['X-Sdk-Date'];
                    xProjectId = createOnceCodeRequest['X-Project-Id'];
                    xAppUserId = createOnceCodeRequest['X-App-UserId'];
                }
            }

        
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于从URL中获取图片进行照片建模任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPictureModelingByUrlJob(createPictureModelingByUrlJobRequest?: CreatePictureModelingByUrlJobRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/digital-human/stylized/picture-modelings-by-url",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (createPictureModelingByUrlJobRequest !== null && createPictureModelingByUrlJobRequest !== undefined) {
                if (createPictureModelingByUrlJobRequest instanceof CreatePictureModelingByUrlJobRequest) {
                    body = createPictureModelingByUrlJobRequest.body
                    authorization = createPictureModelingByUrlJobRequest.authorization;
                    xSdkDate = createPictureModelingByUrlJobRequest.xSdkDate;
                    xProjectId = createPictureModelingByUrlJobRequest.xProjectId;
                    xAppUserId = createPictureModelingByUrlJobRequest.xAppUserId;
                } else {
                    body = createPictureModelingByUrlJobRequest['body'];
                    authorization = createPictureModelingByUrlJobRequest['Authorization'];
                    xSdkDate = createPictureModelingByUrlJobRequest['X-Sdk-Date'];
                    xProjectId = createPictureModelingByUrlJobRequest['X-Project-Id'];
                    xAppUserId = createPictureModelingByUrlJobRequest['X-App-UserId'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建风格化照片建模任务。通过上传照片，生成风格化数字人模型。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPictureModelingJob(createPictureModelingJobRequest?: CreatePictureModelingJobRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/digital-human/stylized/picture-modelings",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            let file;
            
            let styleId;
            
            let name;
            
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;
            let notifyUrl;
            

            if (createPictureModelingJobRequest !== null && createPictureModelingJobRequest !== undefined) {
                if (createPictureModelingJobRequest instanceof CreatePictureModelingJobRequest) {
                    file = createPictureModelingJobRequest.body?.file;
                    styleId = createPictureModelingJobRequest.body?.styleId;
                    name = createPictureModelingJobRequest.body?.name;
                    authorization = createPictureModelingJobRequest.authorization;
                    xSdkDate = createPictureModelingJobRequest.xSdkDate;
                    xProjectId = createPictureModelingJobRequest.xProjectId;
                    xAppUserId = createPictureModelingJobRequest.xAppUserId;
                    notifyUrl = createPictureModelingJobRequest.body?.notifyUrl;
                } else {
                    file = createPictureModelingJobRequest['body']['file'];
                    styleId = createPictureModelingJobRequest['body']['styleId'];
                    name = createPictureModelingJobRequest['body']['name'];
                    authorization = createPictureModelingJobRequest['Authorization'];
                    xSdkDate = createPictureModelingJobRequest['X-Sdk-Date'];
                    xProjectId = createPictureModelingJobRequest['X-Project-Id'];
                    xAppUserId = createPictureModelingJobRequest['X-App-UserId'];
                    notifyUrl = createPictureModelingJobRequest['body']['notifyUrl'];
                }
            }

        
            if (file === null || file === undefined) {
            throw new RequiredError('file','Required parameter file was null or undefined when calling createPictureModelingJob.');
            }
            if (styleId === null || styleId === undefined) {
            throw new RequiredError('styleId','Required parameter styleId was null or undefined when calling createPictureModelingJob.');
            }
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling createPictureModelingJob.');
            }
            if (styleId !== undefined) { 
                localVarFormParams.append('style_id', styleId as any);
            }
            if (name !== undefined) { 
                localVarFormParams.append('name', name as any);
            }
            if (notifyUrl !== undefined) { 
                localVarFormParams.append('notify_url', notifyUrl as any);
            }
            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询风格化照片建模任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPictureModelingJobs(listPictureModelingJobsRequest?: ListPictureModelingJobsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/digital-human/stylized/picture-modelings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;
            
            let offset;
            
            let limit;
            
            let state;
            
            let sortKey;
            
            let sortDir;
            
            let createUntil;
            
            let createSince;

            if (listPictureModelingJobsRequest !== null && listPictureModelingJobsRequest !== undefined) {
                if (listPictureModelingJobsRequest instanceof ListPictureModelingJobsRequest) {
                    authorization = listPictureModelingJobsRequest.authorization;
                    xSdkDate = listPictureModelingJobsRequest.xSdkDate;
                    xProjectId = listPictureModelingJobsRequest.xProjectId;
                    xAppUserId = listPictureModelingJobsRequest.xAppUserId;
                    offset = listPictureModelingJobsRequest.offset;
                    limit = listPictureModelingJobsRequest.limit;
                    state = listPictureModelingJobsRequest.state;
                    sortKey = listPictureModelingJobsRequest.sortKey;
                    sortDir = listPictureModelingJobsRequest.sortDir;
                    createUntil = listPictureModelingJobsRequest.createUntil;
                    createSince = listPictureModelingJobsRequest.createSince;
                } else {
                    authorization = listPictureModelingJobsRequest['Authorization'];
                    xSdkDate = listPictureModelingJobsRequest['X-Sdk-Date'];
                    xProjectId = listPictureModelingJobsRequest['X-Project-Id'];
                    xAppUserId = listPictureModelingJobsRequest['X-App-UserId'];
                    offset = listPictureModelingJobsRequest['offset'];
                    limit = listPictureModelingJobsRequest['limit'];
                    state = listPictureModelingJobsRequest['state'];
                    sortKey = listPictureModelingJobsRequest['sort_key'];
                    sortDir = listPictureModelingJobsRequest['sort_dir'];
                    createUntil = listPictureModelingJobsRequest['create_until'];
                    createSince = listPictureModelingJobsRequest['create_since'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (createUntil !== null && createUntil !== undefined) {
                localVarQueryParameter['create_until'] = createUntil;
            }
            if (createSince !== null && createSince !== undefined) {
                localVarQueryParameter['create_since'] = createSince;
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于风格化查询照片建模任务详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPictureModelingJob(showPictureModelingJobRequest?: ShowPictureModelingJobRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/digital-human/stylized/picture-modelings/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (showPictureModelingJobRequest !== null && showPictureModelingJobRequest !== undefined) {
                if (showPictureModelingJobRequest instanceof ShowPictureModelingJobRequest) {
                    jobId = showPictureModelingJobRequest.jobId;
                    authorization = showPictureModelingJobRequest.authorization;
                    xSdkDate = showPictureModelingJobRequest.xSdkDate;
                    xProjectId = showPictureModelingJobRequest.xProjectId;
                    xAppUserId = showPictureModelingJobRequest.xAppUserId;
                } else {
                    jobId = showPictureModelingJobRequest['job_id'];
                    authorization = showPictureModelingJobRequest['Authorization'];
                    xSdkDate = showPictureModelingJobRequest['X-Sdk-Date'];
                    xProjectId = showPictureModelingJobRequest['X-Project-Id'];
                    xAppUserId = showPictureModelingJobRequest['X-App-UserId'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showPictureModelingJob.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRobot(createRobotRequest?: CreateRobotRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/digital-human-chat/robot",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (createRobotRequest !== null && createRobotRequest !== undefined) {
                if (createRobotRequest instanceof CreateRobotRequest) {
                    body = createRobotRequest.body
                    authorization = createRobotRequest.authorization;
                    xSdkDate = createRobotRequest.xSdkDate;
                    xProjectId = createRobotRequest.xProjectId;
                    xAppUserId = createRobotRequest.xAppUserId;
                } else {
                    body = createRobotRequest['body'];
                    authorization = createRobotRequest['Authorization'];
                    xSdkDate = createRobotRequest['X-Sdk-Date'];
                    xProjectId = createRobotRequest['X-Project-Id'];
                    xAppUserId = createRobotRequest['X-App-UserId'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRobot(deleteRobotRequest?: DeleteRobotRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/digital-human-chat/robot/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (deleteRobotRequest !== null && deleteRobotRequest !== undefined) {
                if (deleteRobotRequest instanceof DeleteRobotRequest) {
                    body = deleteRobotRequest.body
                    authorization = deleteRobotRequest.authorization;
                    xSdkDate = deleteRobotRequest.xSdkDate;
                    xProjectId = deleteRobotRequest.xProjectId;
                    xAppUserId = deleteRobotRequest.xAppUserId;
                } else {
                    body = deleteRobotRequest['body'];
                    authorization = deleteRobotRequest['Authorization'];
                    xSdkDate = deleteRobotRequest['X-Sdk-Date'];
                    xProjectId = deleteRobotRequest['X-Project-Id'];
                    xAppUserId = deleteRobotRequest['X-App-UserId'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询应用列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRobot(listRobotRequest?: ListRobotRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/digital-human-chat/robot",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;
            
            let offset;
            
            let limit;

            if (listRobotRequest !== null && listRobotRequest !== undefined) {
                if (listRobotRequest instanceof ListRobotRequest) {
                    authorization = listRobotRequest.authorization;
                    xSdkDate = listRobotRequest.xSdkDate;
                    xProjectId = listRobotRequest.xProjectId;
                    xAppUserId = listRobotRequest.xAppUserId;
                    offset = listRobotRequest.offset;
                    limit = listRobotRequest.limit;
                } else {
                    authorization = listRobotRequest['Authorization'];
                    xSdkDate = listRobotRequest['X-Sdk-Date'];
                    xProjectId = listRobotRequest['X-Project-Id'];
                    xAppUserId = listRobotRequest['X-App-UserId'];
                    offset = listRobotRequest['offset'];
                    limit = listRobotRequest['limit'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询应用详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRobot(showRobotRequest?: ShowRobotRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/digital-human-chat/robot/{robot_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let robotId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (showRobotRequest !== null && showRobotRequest !== undefined) {
                if (showRobotRequest instanceof ShowRobotRequest) {
                    robotId = showRobotRequest.robotId;
                    authorization = showRobotRequest.authorization;
                    xSdkDate = showRobotRequest.xSdkDate;
                    xProjectId = showRobotRequest.xProjectId;
                    xAppUserId = showRobotRequest.xAppUserId;
                } else {
                    robotId = showRobotRequest['robot_id'];
                    authorization = showRobotRequest['Authorization'];
                    xSdkDate = showRobotRequest['X-Sdk-Date'];
                    xProjectId = showRobotRequest['X-Project-Id'];
                    xAppUserId = showRobotRequest['X-App-UserId'];
                }
            }

        
            if (robotId === null || robotId === undefined) {
            throw new RequiredError('robotId','Required parameter robotId was null or undefined when calling showRobot.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'robot_id': robotId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于修改应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRobot(updateRobotRequest?: UpdateRobotRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/digital-human-chat/robot/{robot_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let robotId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (updateRobotRequest !== null && updateRobotRequest !== undefined) {
                if (updateRobotRequest instanceof UpdateRobotRequest) {
                    robotId = updateRobotRequest.robotId;
                    body = updateRobotRequest.body
                    authorization = updateRobotRequest.authorization;
                    xSdkDate = updateRobotRequest.xSdkDate;
                    xProjectId = updateRobotRequest.xProjectId;
                    xAppUserId = updateRobotRequest.xAppUserId;
                } else {
                    robotId = updateRobotRequest['robot_id'];
                    body = updateRobotRequest['body'];
                    authorization = updateRobotRequest['Authorization'];
                    xSdkDate = updateRobotRequest['X-Sdk-Date'];
                    xProjectId = updateRobotRequest['X-Project-Id'];
                    xAppUserId = updateRobotRequest['X-App-UserId'];
                }
            }

        
            if (robotId === null || robotId === undefined) {
            throw new RequiredError('robotId','Required parameter robotId was null or undefined when calling updateRobot.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'robot_id': robotId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建智能交互对话直播间。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSmartChatRoom(createSmartChatRoomRequest?: CreateSmartChatRoomRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/smart-chat-rooms",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (createSmartChatRoomRequest !== null && createSmartChatRoomRequest !== undefined) {
                if (createSmartChatRoomRequest instanceof CreateSmartChatRoomRequest) {
                    body = createSmartChatRoomRequest.body
                    authorization = createSmartChatRoomRequest.authorization;
                    xSdkDate = createSmartChatRoomRequest.xSdkDate;
                    xProjectId = createSmartChatRoomRequest.xProjectId;
                    xAppUserId = createSmartChatRoomRequest.xAppUserId;
                } else {
                    body = createSmartChatRoomRequest['body'];
                    authorization = createSmartChatRoomRequest['Authorization'];
                    xSdkDate = createSmartChatRoomRequest['X-Sdk-Date'];
                    xProjectId = createSmartChatRoomRequest['X-Project-Id'];
                    xAppUserId = createSmartChatRoomRequest['X-App-UserId'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除智能交互对话直播间。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSmartChatRoom(deleteSmartChatRoomRequest?: DeleteSmartChatRoomRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/smart-chat-rooms/{room_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let roomId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (deleteSmartChatRoomRequest !== null && deleteSmartChatRoomRequest !== undefined) {
                if (deleteSmartChatRoomRequest instanceof DeleteSmartChatRoomRequest) {
                    roomId = deleteSmartChatRoomRequest.roomId;
                    authorization = deleteSmartChatRoomRequest.authorization;
                    xSdkDate = deleteSmartChatRoomRequest.xSdkDate;
                    xProjectId = deleteSmartChatRoomRequest.xProjectId;
                    xAppUserId = deleteSmartChatRoomRequest.xAppUserId;
                } else {
                    roomId = deleteSmartChatRoomRequest['room_id'];
                    authorization = deleteSmartChatRoomRequest['Authorization'];
                    xSdkDate = deleteSmartChatRoomRequest['X-Sdk-Date'];
                    xProjectId = deleteSmartChatRoomRequest['X-Project-Id'];
                    xAppUserId = deleteSmartChatRoomRequest['X-App-UserId'];
                }
            }

        
            if (roomId === null || roomId === undefined) {
            throw new RequiredError('roomId','Required parameter roomId was null or undefined when calling deleteSmartChatRoom.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'room_id': roomId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于智能交互对话直播间列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSmartChatRooms(listSmartChatRoomsRequest?: ListSmartChatRoomsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/smart-chat-rooms",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;
            
            let offset;
            
            let limit;
            
            let roomName;
            
            let modelName;
            
            let startTime;
            
            let endTime;

            if (listSmartChatRoomsRequest !== null && listSmartChatRoomsRequest !== undefined) {
                if (listSmartChatRoomsRequest instanceof ListSmartChatRoomsRequest) {
                    authorization = listSmartChatRoomsRequest.authorization;
                    xSdkDate = listSmartChatRoomsRequest.xSdkDate;
                    xProjectId = listSmartChatRoomsRequest.xProjectId;
                    xAppUserId = listSmartChatRoomsRequest.xAppUserId;
                    offset = listSmartChatRoomsRequest.offset;
                    limit = listSmartChatRoomsRequest.limit;
                    roomName = listSmartChatRoomsRequest.roomName;
                    modelName = listSmartChatRoomsRequest.modelName;
                    startTime = listSmartChatRoomsRequest.startTime;
                    endTime = listSmartChatRoomsRequest.endTime;
                } else {
                    authorization = listSmartChatRoomsRequest['Authorization'];
                    xSdkDate = listSmartChatRoomsRequest['X-Sdk-Date'];
                    xProjectId = listSmartChatRoomsRequest['X-Project-Id'];
                    xAppUserId = listSmartChatRoomsRequest['X-App-UserId'];
                    offset = listSmartChatRoomsRequest['offset'];
                    limit = listSmartChatRoomsRequest['limit'];
                    roomName = listSmartChatRoomsRequest['room_name'];
                    modelName = listSmartChatRoomsRequest['model_name'];
                    startTime = listSmartChatRoomsRequest['start_time'];
                    endTime = listSmartChatRoomsRequest['end_time'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (roomName !== null && roomName !== undefined) {
                localVarQueryParameter['room_name'] = roomName;
            }
            if (modelName !== null && modelName !== undefined) {
                localVarQueryParameter['model_name'] = modelName;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询智能交互对话直播间详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSmartChatRoom(showSmartChatRoomRequest?: ShowSmartChatRoomRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/smart-chat-rooms/{room_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let roomId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (showSmartChatRoomRequest !== null && showSmartChatRoomRequest !== undefined) {
                if (showSmartChatRoomRequest instanceof ShowSmartChatRoomRequest) {
                    roomId = showSmartChatRoomRequest.roomId;
                    authorization = showSmartChatRoomRequest.authorization;
                    xSdkDate = showSmartChatRoomRequest.xSdkDate;
                    xProjectId = showSmartChatRoomRequest.xProjectId;
                    xAppUserId = showSmartChatRoomRequest.xAppUserId;
                } else {
                    roomId = showSmartChatRoomRequest['room_id'];
                    authorization = showSmartChatRoomRequest['Authorization'];
                    xSdkDate = showSmartChatRoomRequest['X-Sdk-Date'];
                    xProjectId = showSmartChatRoomRequest['X-Project-Id'];
                    xAppUserId = showSmartChatRoomRequest['X-App-UserId'];
                }
            }

        
            if (roomId === null || roomId === undefined) {
            throw new RequiredError('roomId','Required parameter roomId was null or undefined when calling showSmartChatRoom.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'room_id': roomId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于智能交互对话直播间信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSmartChatRoom(updateSmartChatRoomRequest?: UpdateSmartChatRoomRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/smart-chat-rooms/{room_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let roomId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (updateSmartChatRoomRequest !== null && updateSmartChatRoomRequest !== undefined) {
                if (updateSmartChatRoomRequest instanceof UpdateSmartChatRoomRequest) {
                    roomId = updateSmartChatRoomRequest.roomId;
                    body = updateSmartChatRoomRequest.body
                    authorization = updateSmartChatRoomRequest.authorization;
                    xSdkDate = updateSmartChatRoomRequest.xSdkDate;
                    xProjectId = updateSmartChatRoomRequest.xProjectId;
                    xAppUserId = updateSmartChatRoomRequest.xAppUserId;
                } else {
                    roomId = updateSmartChatRoomRequest['room_id'];
                    body = updateSmartChatRoomRequest['body'];
                    authorization = updateSmartChatRoomRequest['Authorization'];
                    xSdkDate = updateSmartChatRoomRequest['X-Sdk-Date'];
                    xProjectId = updateSmartChatRoomRequest['X-Project-Id'];
                    xAppUserId = updateSmartChatRoomRequest['X-App-UserId'];
                }
            }

        
            if (roomId === null || roomId === undefined) {
            throw new RequiredError('roomId','Required parameter roomId was null or undefined when calling updateSmartChatRoom.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'room_id': roomId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于控制数字人直播过程。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeSmartLiveCommand(executeSmartLiveCommandRequest?: ExecuteSmartLiveCommandRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/smart-live-rooms/{room_id}/smart-live-jobs/{job_id}/command",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let roomId;
            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (executeSmartLiveCommandRequest !== null && executeSmartLiveCommandRequest !== undefined) {
                if (executeSmartLiveCommandRequest instanceof ExecuteSmartLiveCommandRequest) {
                    roomId = executeSmartLiveCommandRequest.roomId;
                    jobId = executeSmartLiveCommandRequest.jobId;
                    body = executeSmartLiveCommandRequest.body
                    authorization = executeSmartLiveCommandRequest.authorization;
                    xSdkDate = executeSmartLiveCommandRequest.xSdkDate;
                    xProjectId = executeSmartLiveCommandRequest.xProjectId;
                    xAppUserId = executeSmartLiveCommandRequest.xAppUserId;
                } else {
                    roomId = executeSmartLiveCommandRequest['room_id'];
                    jobId = executeSmartLiveCommandRequest['job_id'];
                    body = executeSmartLiveCommandRequest['body'];
                    authorization = executeSmartLiveCommandRequest['Authorization'];
                    xSdkDate = executeSmartLiveCommandRequest['X-Sdk-Date'];
                    xProjectId = executeSmartLiveCommandRequest['X-Project-Id'];
                    xAppUserId = executeSmartLiveCommandRequest['X-App-UserId'];
                }
            }

        
            if (roomId === null || roomId === undefined) {
            throw new RequiredError('roomId','Required parameter roomId was null or undefined when calling executeSmartLiveCommand.');
            }
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling executeSmartLiveCommand.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'room_id': roomId,'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询数字人智能直播任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSmartLive(listSmartLiveRequest?: ListSmartLiveRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/smart-live-rooms/{room_id}/smart-live-jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let roomId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;
            
            let offset;
            
            let limit;
            
            let state;
            
            let sortKey;
            
            let sortDir;
            
            let createSince;
            
            let createUntil;

            if (listSmartLiveRequest !== null && listSmartLiveRequest !== undefined) {
                if (listSmartLiveRequest instanceof ListSmartLiveRequest) {
                    roomId = listSmartLiveRequest.roomId;
                    authorization = listSmartLiveRequest.authorization;
                    xSdkDate = listSmartLiveRequest.xSdkDate;
                    xProjectId = listSmartLiveRequest.xProjectId;
                    xAppUserId = listSmartLiveRequest.xAppUserId;
                    offset = listSmartLiveRequest.offset;
                    limit = listSmartLiveRequest.limit;
                    state = listSmartLiveRequest.state;
                    sortKey = listSmartLiveRequest.sortKey;
                    sortDir = listSmartLiveRequest.sortDir;
                    createSince = listSmartLiveRequest.createSince;
                    createUntil = listSmartLiveRequest.createUntil;
                } else {
                    roomId = listSmartLiveRequest['room_id'];
                    authorization = listSmartLiveRequest['Authorization'];
                    xSdkDate = listSmartLiveRequest['X-Sdk-Date'];
                    xProjectId = listSmartLiveRequest['X-Project-Id'];
                    xAppUserId = listSmartLiveRequest['X-App-UserId'];
                    offset = listSmartLiveRequest['offset'];
                    limit = listSmartLiveRequest['limit'];
                    state = listSmartLiveRequest['state'];
                    sortKey = listSmartLiveRequest['sort_key'];
                    sortDir = listSmartLiveRequest['sort_dir'];
                    createSince = listSmartLiveRequest['create_since'];
                    createUntil = listSmartLiveRequest['create_until'];
                }
            }

        
            if (roomId === null || roomId === undefined) {
            throw new RequiredError('roomId','Required parameter roomId was null or undefined when calling listSmartLive.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (createSince !== null && createSince !== undefined) {
                localVarQueryParameter['create_since'] = createSince;
            }
            if (createUntil !== null && createUntil !== undefined) {
                localVarQueryParameter['create_until'] = createUntil;
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'room_id': roomId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询数字人智能直播任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSmartLiveJobs(listSmartLiveJobsRequest?: ListSmartLiveJobsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/smart-live-jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;
            
            let offset;
            
            let limit;
            
            let state;
            
            let sortKey;
            
            let sortDir;
            
            let createSince;
            
            let createUntil;
            
            let roomName;

            if (listSmartLiveJobsRequest !== null && listSmartLiveJobsRequest !== undefined) {
                if (listSmartLiveJobsRequest instanceof ListSmartLiveJobsRequest) {
                    authorization = listSmartLiveJobsRequest.authorization;
                    xSdkDate = listSmartLiveJobsRequest.xSdkDate;
                    xProjectId = listSmartLiveJobsRequest.xProjectId;
                    xAppUserId = listSmartLiveJobsRequest.xAppUserId;
                    offset = listSmartLiveJobsRequest.offset;
                    limit = listSmartLiveJobsRequest.limit;
                    state = listSmartLiveJobsRequest.state;
                    sortKey = listSmartLiveJobsRequest.sortKey;
                    sortDir = listSmartLiveJobsRequest.sortDir;
                    createSince = listSmartLiveJobsRequest.createSince;
                    createUntil = listSmartLiveJobsRequest.createUntil;
                    roomName = listSmartLiveJobsRequest.roomName;
                } else {
                    authorization = listSmartLiveJobsRequest['Authorization'];
                    xSdkDate = listSmartLiveJobsRequest['X-Sdk-Date'];
                    xProjectId = listSmartLiveJobsRequest['X-Project-Id'];
                    xAppUserId = listSmartLiveJobsRequest['X-App-UserId'];
                    offset = listSmartLiveJobsRequest['offset'];
                    limit = listSmartLiveJobsRequest['limit'];
                    state = listSmartLiveJobsRequest['state'];
                    sortKey = listSmartLiveJobsRequest['sort_key'];
                    sortDir = listSmartLiveJobsRequest['sort_dir'];
                    createSince = listSmartLiveJobsRequest['create_since'];
                    createUntil = listSmartLiveJobsRequest['create_until'];
                    roomName = listSmartLiveJobsRequest['room_name'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (createSince !== null && createSince !== undefined) {
                localVarQueryParameter['create_since'] = createSince;
            }
            if (createUntil !== null && createUntil !== undefined) {
                localVarQueryParameter['create_until'] = createUntil;
            }
            if (roomName !== null && roomName !== undefined) {
                localVarQueryParameter['room_name'] = roomName;
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于上报直播间事件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        liveEventReport(liveEventReportRequest?: LiveEventReportRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/smart-live-rooms/{room_id}/smart-live-jobs/{job_id}/live-event-report",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let roomId;
            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;
            
            let authKey;
            
            let expiresTime;
            
            let refreshUrl;

            if (liveEventReportRequest !== null && liveEventReportRequest !== undefined) {
                if (liveEventReportRequest instanceof LiveEventReportRequest) {
                    roomId = liveEventReportRequest.roomId;
                    jobId = liveEventReportRequest.jobId;
                    body = liveEventReportRequest.body
                    authorization = liveEventReportRequest.authorization;
                    xSdkDate = liveEventReportRequest.xSdkDate;
                    xProjectId = liveEventReportRequest.xProjectId;
                    xAppUserId = liveEventReportRequest.xAppUserId;
                    authKey = liveEventReportRequest.authKey;
                    expiresTime = liveEventReportRequest.expiresTime;
                    refreshUrl = liveEventReportRequest.refreshUrl;
                } else {
                    roomId = liveEventReportRequest['room_id'];
                    jobId = liveEventReportRequest['job_id'];
                    body = liveEventReportRequest['body'];
                    authorization = liveEventReportRequest['Authorization'];
                    xSdkDate = liveEventReportRequest['X-Sdk-Date'];
                    xProjectId = liveEventReportRequest['X-Project-Id'];
                    xAppUserId = liveEventReportRequest['X-App-UserId'];
                    authKey = liveEventReportRequest['auth_key'];
                    expiresTime = liveEventReportRequest['expires_time'];
                    refreshUrl = liveEventReportRequest['refresh_url'];
                }
            }

        
            if (roomId === null || roomId === undefined) {
            throw new RequiredError('roomId','Required parameter roomId was null or undefined when calling liveEventReport.');
            }
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling liveEventReport.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authKey !== null && authKey !== undefined) {
                localVarQueryParameter['auth_key'] = authKey;
            }
            if (expiresTime !== null && expiresTime !== undefined) {
                localVarQueryParameter['expires_time'] = expiresTime;
            }
            if (refreshUrl !== null && refreshUrl !== undefined) {
                localVarQueryParameter['refresh_url'] = refreshUrl;
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'room_id': roomId,'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询数字人智能直播任务详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSmartLive(showSmartLiveRequest?: ShowSmartLiveRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/smart-live-rooms/{room_id}/smart-live-jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let roomId;
            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (showSmartLiveRequest !== null && showSmartLiveRequest !== undefined) {
                if (showSmartLiveRequest instanceof ShowSmartLiveRequest) {
                    roomId = showSmartLiveRequest.roomId;
                    jobId = showSmartLiveRequest.jobId;
                    authorization = showSmartLiveRequest.authorization;
                    xSdkDate = showSmartLiveRequest.xSdkDate;
                    xProjectId = showSmartLiveRequest.xProjectId;
                    xAppUserId = showSmartLiveRequest.xAppUserId;
                } else {
                    roomId = showSmartLiveRequest['room_id'];
                    jobId = showSmartLiveRequest['job_id'];
                    authorization = showSmartLiveRequest['Authorization'];
                    xSdkDate = showSmartLiveRequest['X-Sdk-Date'];
                    xProjectId = showSmartLiveRequest['X-Project-Id'];
                    xAppUserId = showSmartLiveRequest['X-App-UserId'];
                }
            }

        
            if (roomId === null || roomId === undefined) {
            throw new RequiredError('roomId','Required parameter roomId was null or undefined when calling showSmartLive.');
            }
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showSmartLive.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'room_id': roomId,'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于启动数字人智能直播任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startSmartLive(startSmartLiveRequest?: StartSmartLiveRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/smart-live-rooms/{room_id}/smart-live-jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let roomId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (startSmartLiveRequest !== null && startSmartLiveRequest !== undefined) {
                if (startSmartLiveRequest instanceof StartSmartLiveRequest) {
                    roomId = startSmartLiveRequest.roomId;
                    body = startSmartLiveRequest.body
                    authorization = startSmartLiveRequest.authorization;
                    xSdkDate = startSmartLiveRequest.xSdkDate;
                    xProjectId = startSmartLiveRequest.xProjectId;
                    xAppUserId = startSmartLiveRequest.xAppUserId;
                } else {
                    roomId = startSmartLiveRequest['room_id'];
                    body = startSmartLiveRequest['body'];
                    authorization = startSmartLiveRequest['Authorization'];
                    xSdkDate = startSmartLiveRequest['X-Sdk-Date'];
                    xProjectId = startSmartLiveRequest['X-Project-Id'];
                    xAppUserId = startSmartLiveRequest['X-App-UserId'];
                }
            }

        
            if (roomId === null || roomId === undefined) {
            throw new RequiredError('roomId','Required parameter roomId was null or undefined when calling startSmartLive.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'room_id': roomId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于结束数字人智能直播任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopSmartLive(stopSmartLiveRequest?: StopSmartLiveRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/smart-live-rooms/{room_id}/smart-live-jobs/{job_id}/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let roomId;
            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (stopSmartLiveRequest !== null && stopSmartLiveRequest !== undefined) {
                if (stopSmartLiveRequest instanceof StopSmartLiveRequest) {
                    roomId = stopSmartLiveRequest.roomId;
                    jobId = stopSmartLiveRequest.jobId;
                    authorization = stopSmartLiveRequest.authorization;
                    xSdkDate = stopSmartLiveRequest.xSdkDate;
                    xProjectId = stopSmartLiveRequest.xProjectId;
                    xAppUserId = stopSmartLiveRequest.xAppUserId;
                } else {
                    roomId = stopSmartLiveRequest['room_id'];
                    jobId = stopSmartLiveRequest['job_id'];
                    authorization = stopSmartLiveRequest['Authorization'];
                    xSdkDate = stopSmartLiveRequest['X-Sdk-Date'];
                    xProjectId = stopSmartLiveRequest['X-Project-Id'];
                    xAppUserId = stopSmartLiveRequest['X-App-UserId'];
                }
            }

        
            if (roomId === null || roomId === undefined) {
            throw new RequiredError('roomId','Required parameter roomId was null or undefined when calling stopSmartLive.');
            }
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling stopSmartLive.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'room_id': roomId,'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 检测音色与文本的语言一致性，音色与文本不一致会导致报错
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkTextLanguage(checkTextLanguageRequest?: CheckTextLanguageRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/smart-live-rooms-scripts/language-check",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (checkTextLanguageRequest !== null && checkTextLanguageRequest !== undefined) {
                if (checkTextLanguageRequest instanceof CheckTextLanguageRequest) {
                    body = checkTextLanguageRequest.body
                } else {
                    body = checkTextLanguageRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建智能直播间互动规则库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInteractionRuleGroup(createInteractionRuleGroupRequest?: CreateInteractionRuleGroupRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/smart-live-interaction-rule-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (createInteractionRuleGroupRequest !== null && createInteractionRuleGroupRequest !== undefined) {
                if (createInteractionRuleGroupRequest instanceof CreateInteractionRuleGroupRequest) {
                    body = createInteractionRuleGroupRequest.body
                    authorization = createInteractionRuleGroupRequest.authorization;
                    xSdkDate = createInteractionRuleGroupRequest.xSdkDate;
                    xProjectId = createInteractionRuleGroupRequest.xProjectId;
                    xAppUserId = createInteractionRuleGroupRequest.xAppUserId;
                } else {
                    body = createInteractionRuleGroupRequest['body'];
                    authorization = createInteractionRuleGroupRequest['Authorization'];
                    xSdkDate = createInteractionRuleGroupRequest['X-Sdk-Date'];
                    xProjectId = createInteractionRuleGroupRequest['X-Project-Id'];
                    xAppUserId = createInteractionRuleGroupRequest['X-App-UserId'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建智能直播间。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSmartLiveRoom(createSmartLiveRoomRequest?: CreateSmartLiveRoomRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/smart-live-rooms",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (createSmartLiveRoomRequest !== null && createSmartLiveRoomRequest !== undefined) {
                if (createSmartLiveRoomRequest instanceof CreateSmartLiveRoomRequest) {
                    body = createSmartLiveRoomRequest.body
                    authorization = createSmartLiveRoomRequest.authorization;
                    xSdkDate = createSmartLiveRoomRequest.xSdkDate;
                    xProjectId = createSmartLiveRoomRequest.xProjectId;
                    xAppUserId = createSmartLiveRoomRequest.xAppUserId;
                } else {
                    body = createSmartLiveRoomRequest['body'];
                    authorization = createSmartLiveRoomRequest['Authorization'];
                    xSdkDate = createSmartLiveRoomRequest['X-Sdk-Date'];
                    xProjectId = createSmartLiveRoomRequest['X-Project-Id'];
                    xAppUserId = createSmartLiveRoomRequest['X-App-UserId'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除智能直播间互动规则库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInteractionRuleGroup(deleteInteractionRuleGroupRequest?: DeleteInteractionRuleGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/smart-live-interaction-rule-groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (deleteInteractionRuleGroupRequest !== null && deleteInteractionRuleGroupRequest !== undefined) {
                if (deleteInteractionRuleGroupRequest instanceof DeleteInteractionRuleGroupRequest) {
                    groupId = deleteInteractionRuleGroupRequest.groupId;
                    authorization = deleteInteractionRuleGroupRequest.authorization;
                    xSdkDate = deleteInteractionRuleGroupRequest.xSdkDate;
                    xProjectId = deleteInteractionRuleGroupRequest.xProjectId;
                    xAppUserId = deleteInteractionRuleGroupRequest.xAppUserId;
                } else {
                    groupId = deleteInteractionRuleGroupRequest['group_id'];
                    authorization = deleteInteractionRuleGroupRequest['Authorization'];
                    xSdkDate = deleteInteractionRuleGroupRequest['X-Sdk-Date'];
                    xProjectId = deleteInteractionRuleGroupRequest['X-Project-Id'];
                    xAppUserId = deleteInteractionRuleGroupRequest['X-App-UserId'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteInteractionRuleGroup.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除智能直播间。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSmartLiveRoom(deleteSmartLiveRoomRequest?: DeleteSmartLiveRoomRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/smart-live-rooms/{room_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let roomId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (deleteSmartLiveRoomRequest !== null && deleteSmartLiveRoomRequest !== undefined) {
                if (deleteSmartLiveRoomRequest instanceof DeleteSmartLiveRoomRequest) {
                    roomId = deleteSmartLiveRoomRequest.roomId;
                    authorization = deleteSmartLiveRoomRequest.authorization;
                    xSdkDate = deleteSmartLiveRoomRequest.xSdkDate;
                    xProjectId = deleteSmartLiveRoomRequest.xProjectId;
                    xAppUserId = deleteSmartLiveRoomRequest.xAppUserId;
                } else {
                    roomId = deleteSmartLiveRoomRequest['room_id'];
                    authorization = deleteSmartLiveRoomRequest['Authorization'];
                    xSdkDate = deleteSmartLiveRoomRequest['X-Sdk-Date'];
                    xProjectId = deleteSmartLiveRoomRequest['X-Project-Id'];
                    xAppUserId = deleteSmartLiveRoomRequest['X-App-UserId'];
                }
            }

        
            if (roomId === null || roomId === undefined) {
            throw new RequiredError('roomId','Required parameter roomId was null or undefined when calling deleteSmartLiveRoom.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'room_id': roomId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于智能直播间互动规则库列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInteractionRuleGroups(listInteractionRuleGroupsRequest?: ListInteractionRuleGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/smart-live-interaction-rule-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;
            
            let offset;
            
            let limit;
            
            let createSince;
            
            let createUntil;
            
            let groupName;

            if (listInteractionRuleGroupsRequest !== null && listInteractionRuleGroupsRequest !== undefined) {
                if (listInteractionRuleGroupsRequest instanceof ListInteractionRuleGroupsRequest) {
                    authorization = listInteractionRuleGroupsRequest.authorization;
                    xSdkDate = listInteractionRuleGroupsRequest.xSdkDate;
                    xProjectId = listInteractionRuleGroupsRequest.xProjectId;
                    xAppUserId = listInteractionRuleGroupsRequest.xAppUserId;
                    offset = listInteractionRuleGroupsRequest.offset;
                    limit = listInteractionRuleGroupsRequest.limit;
                    createSince = listInteractionRuleGroupsRequest.createSince;
                    createUntil = listInteractionRuleGroupsRequest.createUntil;
                    groupName = listInteractionRuleGroupsRequest.groupName;
                } else {
                    authorization = listInteractionRuleGroupsRequest['Authorization'];
                    xSdkDate = listInteractionRuleGroupsRequest['X-Sdk-Date'];
                    xProjectId = listInteractionRuleGroupsRequest['X-Project-Id'];
                    xAppUserId = listInteractionRuleGroupsRequest['X-App-UserId'];
                    offset = listInteractionRuleGroupsRequest['offset'];
                    limit = listInteractionRuleGroupsRequest['limit'];
                    createSince = listInteractionRuleGroupsRequest['create_since'];
                    createUntil = listInteractionRuleGroupsRequest['create_until'];
                    groupName = listInteractionRuleGroupsRequest['group_name'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (createSince !== null && createSince !== undefined) {
                localVarQueryParameter['create_since'] = createSince;
            }
            if (createUntil !== null && createUntil !== undefined) {
                localVarQueryParameter['create_until'] = createUntil;
            }
            if (groupName !== null && groupName !== undefined) {
                localVarQueryParameter['group_name'] = groupName;
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于智能直播间列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSmartLiveRooms(listSmartLiveRoomsRequest?: ListSmartLiveRoomsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/smart-live-rooms",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;
            
            let offset;
            
            let limit;
            
            let roomName;
            
            let dhId;
            
            let modelName;
            
            let liveState;
            
            let startTime;
            
            let endTime;
            
            let roomType;
            
            let templateOwnType;

            if (listSmartLiveRoomsRequest !== null && listSmartLiveRoomsRequest !== undefined) {
                if (listSmartLiveRoomsRequest instanceof ListSmartLiveRoomsRequest) {
                    authorization = listSmartLiveRoomsRequest.authorization;
                    xSdkDate = listSmartLiveRoomsRequest.xSdkDate;
                    xProjectId = listSmartLiveRoomsRequest.xProjectId;
                    xAppUserId = listSmartLiveRoomsRequest.xAppUserId;
                    offset = listSmartLiveRoomsRequest.offset;
                    limit = listSmartLiveRoomsRequest.limit;
                    roomName = listSmartLiveRoomsRequest.roomName;
                    dhId = listSmartLiveRoomsRequest.dhId;
                    modelName = listSmartLiveRoomsRequest.modelName;
                    liveState = listSmartLiveRoomsRequest.liveState;
                    startTime = listSmartLiveRoomsRequest.startTime;
                    endTime = listSmartLiveRoomsRequest.endTime;
                    roomType = listSmartLiveRoomsRequest.roomType;
                    templateOwnType = listSmartLiveRoomsRequest.templateOwnType;
                } else {
                    authorization = listSmartLiveRoomsRequest['Authorization'];
                    xSdkDate = listSmartLiveRoomsRequest['X-Sdk-Date'];
                    xProjectId = listSmartLiveRoomsRequest['X-Project-Id'];
                    xAppUserId = listSmartLiveRoomsRequest['X-App-UserId'];
                    offset = listSmartLiveRoomsRequest['offset'];
                    limit = listSmartLiveRoomsRequest['limit'];
                    roomName = listSmartLiveRoomsRequest['room_name'];
                    dhId = listSmartLiveRoomsRequest['dh_id'];
                    modelName = listSmartLiveRoomsRequest['model_name'];
                    liveState = listSmartLiveRoomsRequest['live_state'];
                    startTime = listSmartLiveRoomsRequest['start_time'];
                    endTime = listSmartLiveRoomsRequest['end_time'];
                    roomType = listSmartLiveRoomsRequest['room_type'];
                    templateOwnType = listSmartLiveRoomsRequest['template_own_type'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (roomName !== null && roomName !== undefined) {
                localVarQueryParameter['room_name'] = roomName;
            }
            if (dhId !== null && dhId !== undefined) {
                localVarQueryParameter['dh_id'] = dhId;
            }
            if (modelName !== null && modelName !== undefined) {
                localVarQueryParameter['model_name'] = modelName;
            }
            if (liveState !== null && liveState !== undefined) {
                localVarQueryParameter['live_state'] = liveState;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (roomType !== null && roomType !== undefined) {
                localVarQueryParameter['room_type'] = roomType;
            }
            if (templateOwnType !== null && templateOwnType !== undefined) {
                localVarQueryParameter['template_own_type'] = templateOwnType;
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询智能直播剧本详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSmartLiveRoom(showSmartLiveRoomRequest?: ShowSmartLiveRoomRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/smart-live-rooms/{room_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let roomId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (showSmartLiveRoomRequest !== null && showSmartLiveRoomRequest !== undefined) {
                if (showSmartLiveRoomRequest instanceof ShowSmartLiveRoomRequest) {
                    roomId = showSmartLiveRoomRequest.roomId;
                    authorization = showSmartLiveRoomRequest.authorization;
                    xSdkDate = showSmartLiveRoomRequest.xSdkDate;
                    xProjectId = showSmartLiveRoomRequest.xProjectId;
                    xAppUserId = showSmartLiveRoomRequest.xAppUserId;
                } else {
                    roomId = showSmartLiveRoomRequest['room_id'];
                    authorization = showSmartLiveRoomRequest['Authorization'];
                    xSdkDate = showSmartLiveRoomRequest['X-Sdk-Date'];
                    xProjectId = showSmartLiveRoomRequest['X-Project-Id'];
                    xAppUserId = showSmartLiveRoomRequest['X-App-UserId'];
                }
            }

        
            if (roomId === null || roomId === undefined) {
            throw new RequiredError('roomId','Required parameter roomId was null or undefined when calling showSmartLiveRoom.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'room_id': roomId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于更新智能直播间互动规则库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInteractionRuleGroup(updateInteractionRuleGroupRequest?: UpdateInteractionRuleGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/smart-live-interaction-rule-groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let groupId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (updateInteractionRuleGroupRequest !== null && updateInteractionRuleGroupRequest !== undefined) {
                if (updateInteractionRuleGroupRequest instanceof UpdateInteractionRuleGroupRequest) {
                    groupId = updateInteractionRuleGroupRequest.groupId;
                    body = updateInteractionRuleGroupRequest.body
                    authorization = updateInteractionRuleGroupRequest.authorization;
                    xSdkDate = updateInteractionRuleGroupRequest.xSdkDate;
                    xProjectId = updateInteractionRuleGroupRequest.xProjectId;
                    xAppUserId = updateInteractionRuleGroupRequest.xAppUserId;
                } else {
                    groupId = updateInteractionRuleGroupRequest['group_id'];
                    body = updateInteractionRuleGroupRequest['body'];
                    authorization = updateInteractionRuleGroupRequest['Authorization'];
                    xSdkDate = updateInteractionRuleGroupRequest['X-Sdk-Date'];
                    xProjectId = updateInteractionRuleGroupRequest['X-Project-Id'];
                    xAppUserId = updateInteractionRuleGroupRequest['X-App-UserId'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling updateInteractionRuleGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于智能直播间信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSmartLiveRoom(updateSmartLiveRoomRequest?: UpdateSmartLiveRoomRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/smart-live-rooms/{room_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let roomId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (updateSmartLiveRoomRequest !== null && updateSmartLiveRoomRequest !== undefined) {
                if (updateSmartLiveRoomRequest instanceof UpdateSmartLiveRoomRequest) {
                    roomId = updateSmartLiveRoomRequest.roomId;
                    body = updateSmartLiveRoomRequest.body
                    authorization = updateSmartLiveRoomRequest.authorization;
                    xSdkDate = updateSmartLiveRoomRequest.xSdkDate;
                    xProjectId = updateSmartLiveRoomRequest.xProjectId;
                    xAppUserId = updateSmartLiveRoomRequest.xAppUserId;
                } else {
                    roomId = updateSmartLiveRoomRequest['room_id'];
                    body = updateSmartLiveRoomRequest['body'];
                    authorization = updateSmartLiveRoomRequest['Authorization'];
                    xSdkDate = updateSmartLiveRoomRequest['X-Sdk-Date'];
                    xProjectId = updateSmartLiveRoomRequest['X-Project-Id'];
                    xAppUserId = updateSmartLiveRoomRequest['X-App-UserId'];
                }
            }

        
            if (roomId === null || roomId === undefined) {
            throw new RequiredError('roomId','Required parameter roomId was null or undefined when calling updateSmartLiveRoom.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'room_id': roomId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数字人风格列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStyles(listStylesRequest?: ListStylesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/styles",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;
            
            let offset;
            
            let limit;
            
            let state;
            
            let sortKey;
            
            let sortDir;
            
            let createUntil;
            
            let createSince;

            if (listStylesRequest !== null && listStylesRequest !== undefined) {
                if (listStylesRequest instanceof ListStylesRequest) {
                    authorization = listStylesRequest.authorization;
                    xSdkDate = listStylesRequest.xSdkDate;
                    xProjectId = listStylesRequest.xProjectId;
                    xAppUserId = listStylesRequest.xAppUserId;
                    offset = listStylesRequest.offset;
                    limit = listStylesRequest.limit;
                    state = listStylesRequest.state;
                    sortKey = listStylesRequest.sortKey;
                    sortDir = listStylesRequest.sortDir;
                    createUntil = listStylesRequest.createUntil;
                    createSince = listStylesRequest.createSince;
                } else {
                    authorization = listStylesRequest['Authorization'];
                    xSdkDate = listStylesRequest['X-Sdk-Date'];
                    xProjectId = listStylesRequest['X-Project-Id'];
                    xAppUserId = listStylesRequest['X-App-UserId'];
                    offset = listStylesRequest['offset'];
                    limit = listStylesRequest['limit'];
                    state = listStylesRequest['state'];
                    sortKey = listStylesRequest['sort_key'];
                    sortDir = listStylesRequest['sort_dir'];
                    createUntil = listStylesRequest['create_until'];
                    createSince = listStylesRequest['create_since'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (createUntil !== null && createUntil !== undefined) {
                localVarQueryParameter['create_until'] = createUntil;
            }
            if (createSince !== null && createSince !== undefined) {
                localVarQueryParameter['create_since'] = createSince;
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 提交训练任务,执行该接口后,任务会进入审核状态,审核完成后会等待训练。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        commitVoiceTrainingJob(commitVoiceTrainingJobRequest?: CommitVoiceTrainingJobRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/voice-training-manage/user/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (commitVoiceTrainingJobRequest !== null && commitVoiceTrainingJobRequest !== undefined) {
                if (commitVoiceTrainingJobRequest instanceof CommitVoiceTrainingJobRequest) {
                    jobId = commitVoiceTrainingJobRequest.jobId;
                    authorization = commitVoiceTrainingJobRequest.authorization;
                    xSdkDate = commitVoiceTrainingJobRequest.xSdkDate;
                    xProjectId = commitVoiceTrainingJobRequest.xProjectId;
                    xAppUserId = commitVoiceTrainingJobRequest.xAppUserId;
                } else {
                    jobId = commitVoiceTrainingJobRequest['job_id'];
                    authorization = commitVoiceTrainingJobRequest['Authorization'];
                    xSdkDate = commitVoiceTrainingJobRequest['X-Sdk-Date'];
                    xProjectId = commitVoiceTrainingJobRequest['X-Project-Id'];
                    xAppUserId = commitVoiceTrainingJobRequest['X-App-UserId'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling commitVoiceTrainingJob.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 确认在线录音结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        confirmTrainingSegment(confirmTrainingSegmentRequest?: ConfirmTrainingSegmentRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/voice-training-manage/user/training-segment",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let index;

            if (confirmTrainingSegmentRequest !== null && confirmTrainingSegmentRequest !== undefined) {
                if (confirmTrainingSegmentRequest instanceof ConfirmTrainingSegmentRequest) {
                    jobId = confirmTrainingSegmentRequest.jobId;
                    index = confirmTrainingSegmentRequest.index;
                } else {
                    jobId = confirmTrainingSegmentRequest['job_id'];
                    index = confirmTrainingSegmentRequest['index'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
                throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling confirmTrainingSegment.');
            }
            if (jobId !== null && jobId !== undefined) {
                localVarQueryParameter['job_id'] = jobId;
            }
            if (index === null || index === undefined) {
                throw new RequiredError('index','Required parameter index was null or undefined when calling confirmTrainingSegment.');
            }
            if (index !== null && index !== undefined) {
                localVarQueryParameter['index'] = index;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户创建语音训练基础版任务,该接口会返回一个obs上传地址，用于上传语音文件。
         * 仅支持zip包方式上传语音文件：
         * * 语音文件打包成zip上传：上传的训练数据为一个zip格式压缩文件,其中包含一段wav格式的长音频文件。
         * 
         * &gt; * 文件上传后，调用“提交语音训练任务”接口，启动审核和训练。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTrainingAdvanceJob(createTrainingAdvanceJobRequest?: CreateTrainingAdvanceJobRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/voice-training-manage/user/advance-jobs",
                contentType: "application/json;charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xAppUserId;

            if (createTrainingAdvanceJobRequest !== null && createTrainingAdvanceJobRequest !== undefined) {
                if (createTrainingAdvanceJobRequest instanceof CreateTrainingAdvanceJobRequest) {
                    body = createTrainingAdvanceJobRequest.body
                    xAppUserId = createTrainingAdvanceJobRequest.xAppUserId;
                } else {
                    body = createTrainingAdvanceJobRequest['body'];
                    xAppUserId = createTrainingAdvanceJobRequest['X-App-UserId'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户创建语音训练基础版任务,该接口会返回一个obs上传地址，用于上传语音文件。
         * 支持2种方式上传语音文件：
         * * 语音文件和文本文件打包成zip上传：语音文件已经切分成20个wav文件，每个语音文件对应一个txt文本文件，所有文件打包成zip文件。语音文件命名规则：0.wav~19.wav；文本文件命名规则：0.txt~19.txt。
         * * 语音文件和文本文件逐句上传：每次上传一句语料的语音文件和文本文件，再调用“确认在线录音结果”接口确认语音和文本内容是否一致。确认成功后再上传和确认下一句。
         * 
         * &gt; * 文件上传后，调用“提交语音训练任务”接口，启动审核和训练。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTrainingBasicJob(createTrainingBasicJobRequest?: CreateTrainingBasicJobRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/voice-training-manage/user/basic-jobs",
                contentType: "application/json;charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (createTrainingBasicJobRequest !== null && createTrainingBasicJobRequest !== undefined) {
                if (createTrainingBasicJobRequest instanceof CreateTrainingBasicJobRequest) {
                    body = createTrainingBasicJobRequest.body
                    authorization = createTrainingBasicJobRequest.authorization;
                    xSdkDate = createTrainingBasicJobRequest.xSdkDate;
                    xProjectId = createTrainingBasicJobRequest.xProjectId;
                    xAppUserId = createTrainingBasicJobRequest.xAppUserId;
                } else {
                    body = createTrainingBasicJobRequest['body'];
                    authorization = createTrainingBasicJobRequest['Authorization'];
                    xSdkDate = createTrainingBasicJobRequest['X-Sdk-Date'];
                    xProjectId = createTrainingBasicJobRequest['X-Project-Id'];
                    xAppUserId = createTrainingBasicJobRequest['X-App-UserId'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户创建语音训练基础版任务,该接口会返回一个obs上传地址，用于上传语音文件。
         * 支持2种方式上传语音文件：
         * * 语音文件和文本文件打包成zip上传：语音文件已经切分成100个wav文件，每个语音文件对应一个txt文本文件，所有文件打包成zip文件。语音文件命名规则：0.wav~99.wav；文本文件命名规则：0.txt~99.txt。
         * * 语音文件和文本文件逐句上传：每次上传一句语料的语音文件和文本文件，再调用“确认在线录音结果”接口确认语音和文本内容是否一致。确认成功后再上传和确认下一句。
         * 
         * &gt; * 文件上传后，调用“提交语音训练任务”接口，启动审核和训练。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTrainingMiddleJob(createTrainingMiddleJobRequest?: CreateTrainingMiddleJobRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/voice-training-manage/user/middle-jobs",
                contentType: "application/json;charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (createTrainingMiddleJobRequest !== null && createTrainingMiddleJobRequest !== undefined) {
                if (createTrainingMiddleJobRequest instanceof CreateTrainingMiddleJobRequest) {
                    body = createTrainingMiddleJobRequest.body
                    authorization = createTrainingMiddleJobRequest.authorization;
                    xSdkDate = createTrainingMiddleJobRequest.xSdkDate;
                    xProjectId = createTrainingMiddleJobRequest.xProjectId;
                    xAppUserId = createTrainingMiddleJobRequest.xAppUserId;
                } else {
                    body = createTrainingMiddleJobRequest['body'];
                    authorization = createTrainingMiddleJobRequest['Authorization'];
                    xSdkDate = createTrainingMiddleJobRequest['X-Sdk-Date'];
                    xProjectId = createTrainingMiddleJobRequest['X-Project-Id'];
                    xAppUserId = createTrainingMiddleJobRequest['X-App-UserId'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除语音训练任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVoiceTrainingJob(deleteVoiceTrainingJobRequest?: DeleteVoiceTrainingJobRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/voice-training-manage/user/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (deleteVoiceTrainingJobRequest !== null && deleteVoiceTrainingJobRequest !== undefined) {
                if (deleteVoiceTrainingJobRequest instanceof DeleteVoiceTrainingJobRequest) {
                    jobId = deleteVoiceTrainingJobRequest.jobId;
                    authorization = deleteVoiceTrainingJobRequest.authorization;
                    xSdkDate = deleteVoiceTrainingJobRequest.xSdkDate;
                    xProjectId = deleteVoiceTrainingJobRequest.xProjectId;
                    xAppUserId = deleteVoiceTrainingJobRequest.xAppUserId;
                } else {
                    jobId = deleteVoiceTrainingJobRequest['job_id'];
                    authorization = deleteVoiceTrainingJobRequest['Authorization'];
                    xSdkDate = deleteVoiceTrainingJobRequest['X-Sdk-Date'];
                    xProjectId = deleteVoiceTrainingJobRequest['X-Project-Id'];
                    xAppUserId = deleteVoiceTrainingJobRequest['X-App-UserId'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling deleteVoiceTrainingJob.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询语音训练任务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVoiceTrainingJob(listVoiceTrainingJobRequest?: ListVoiceTrainingJobRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/voice-training-manage/user/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let createUntil;
            
            let createSince;
            
            let xAppUserId;
            
            let state;
            
            let jobId;
            
            let voiceName;
            
            let tag;

            if (listVoiceTrainingJobRequest !== null && listVoiceTrainingJobRequest !== undefined) {
                if (listVoiceTrainingJobRequest instanceof ListVoiceTrainingJobRequest) {
                    offset = listVoiceTrainingJobRequest.offset;
                    limit = listVoiceTrainingJobRequest.limit;
                    createUntil = listVoiceTrainingJobRequest.createUntil;
                    createSince = listVoiceTrainingJobRequest.createSince;
                    xAppUserId = listVoiceTrainingJobRequest.xAppUserId;
                    state = listVoiceTrainingJobRequest.state;
                    jobId = listVoiceTrainingJobRequest.jobId;
                    voiceName = listVoiceTrainingJobRequest.voiceName;
                    tag = listVoiceTrainingJobRequest.tag;
                } else {
                    offset = listVoiceTrainingJobRequest['offset'];
                    limit = listVoiceTrainingJobRequest['limit'];
                    createUntil = listVoiceTrainingJobRequest['create_until'];
                    createSince = listVoiceTrainingJobRequest['create_since'];
                    xAppUserId = listVoiceTrainingJobRequest['X-App-UserId'];
                    state = listVoiceTrainingJobRequest['state'];
                    jobId = listVoiceTrainingJobRequest['job_id'];
                    voiceName = listVoiceTrainingJobRequest['voice_name'];
                    tag = listVoiceTrainingJobRequest['tag'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (createUntil !== null && createUntil !== undefined) {
                localVarQueryParameter['create_until'] = createUntil;
            }
            if (createSince !== null && createSince !== undefined) {
                localVarQueryParameter['create_since'] = createSince;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (jobId !== null && jobId !== undefined) {
                localVarQueryParameter['job_id'] = jobId;
            }
            if (voiceName !== null && voiceName !== undefined) {
                localVarQueryParameter['voice_name'] = voiceName;
            }
            if (tag !== null && tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取语音训练任务审核结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobAuditResult(showJobAuditResultRequest?: ShowJobAuditResultRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/voice-training-manage/user/jobs/{job_id}/audit-result",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (showJobAuditResultRequest !== null && showJobAuditResultRequest !== undefined) {
                if (showJobAuditResultRequest instanceof ShowJobAuditResultRequest) {
                    jobId = showJobAuditResultRequest.jobId;
                } else {
                    jobId = showJobAuditResultRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJobAuditResult.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取语音文件上传地址
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobUploadingAddress(showJobUploadingAddressRequest?: ShowJobUploadingAddressRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/voice-training-manage/user/jobs/{job_id}/uploading-address-url",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (showJobUploadingAddressRequest !== null && showJobUploadingAddressRequest !== undefined) {
                if (showJobUploadingAddressRequest instanceof ShowJobUploadingAddressRequest) {
                    jobId = showJobUploadingAddressRequest.jobId;
                } else {
                    jobId = showJobUploadingAddressRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJobUploadingAddress.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取在线录音确认结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTrainingSegmentInfo(showTrainingSegmentInfoRequest?: ShowTrainingSegmentInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/voice-training-manage/user/training-segment",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;

            if (showTrainingSegmentInfoRequest !== null && showTrainingSegmentInfoRequest !== undefined) {
                if (showTrainingSegmentInfoRequest instanceof ShowTrainingSegmentInfoRequest) {
                    jobId = showTrainingSegmentInfoRequest.jobId;
                } else {
                    jobId = showTrainingSegmentInfoRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
                throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showTrainingSegmentInfo.');
            }
            if (jobId !== null && jobId !== undefined) {
                localVarQueryParameter['job_id'] = jobId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询语音训练任务详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVoiceTrainingJob(showVoiceTrainingJobRequest?: ShowVoiceTrainingJobRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/voice-training-manage/user/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (showVoiceTrainingJobRequest !== null && showVoiceTrainingJobRequest !== undefined) {
                if (showVoiceTrainingJobRequest instanceof ShowVoiceTrainingJobRequest) {
                    jobId = showVoiceTrainingJobRequest.jobId;
                    authorization = showVoiceTrainingJobRequest.authorization;
                    xSdkDate = showVoiceTrainingJobRequest.xSdkDate;
                    xProjectId = showVoiceTrainingJobRequest.xProjectId;
                    xAppUserId = showVoiceTrainingJobRequest.xAppUserId;
                } else {
                    jobId = showVoiceTrainingJobRequest['job_id'];
                    authorization = showVoiceTrainingJobRequest['Authorization'];
                    xSdkDate = showVoiceTrainingJobRequest['X-Sdk-Date'];
                    xProjectId = showVoiceTrainingJobRequest['X-Project-Id'];
                    xAppUserId = showVoiceTrainingJobRequest['X-App-UserId'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showVoiceTrainingJob.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建分身数字人模型训练任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        create2dModelTrainingJob(create2dModelTrainingJobRequest?: Create2dModelTrainingJobRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/digital-human-training-manage/user/jobs",
                contentType: "application/json;charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (create2dModelTrainingJobRequest !== null && create2dModelTrainingJobRequest !== undefined) {
                if (create2dModelTrainingJobRequest instanceof Create2dModelTrainingJobRequest) {
                    body = create2dModelTrainingJobRequest.body
                    authorization = create2dModelTrainingJobRequest.authorization;
                    xSdkDate = create2dModelTrainingJobRequest.xSdkDate;
                    xProjectId = create2dModelTrainingJobRequest.xProjectId;
                    xAppUserId = create2dModelTrainingJobRequest.xAppUserId;
                } else {
                    body = create2dModelTrainingJobRequest['body'];
                    authorization = create2dModelTrainingJobRequest['Authorization'];
                    xSdkDate = create2dModelTrainingJobRequest['X-Sdk-Date'];
                    xProjectId = create2dModelTrainingJobRequest['X-Project-Id'];
                    xAppUserId = create2dModelTrainingJobRequest['X-App-UserId'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除分身数字人模型训练任务。同时需要删除训练任务相关的训练视频、身份证照片、授权文件、模型资产等。
         * &gt; * 该接口应当在任务处于以下状态时调用：WAIT_FILE_UPLOAD、AUTO_VERIFY_FAILED、MANUAL_VERIFYING、MANUAL_VERIFY_FAILED、TRAINING_DATA_PREPROCESS_FAILED、TRAIN_FAILED、INFERENCE_DATA_PREPROCESS_FAILED、JOB_SUCCESS、WAIT_USER_CONFIRM、JOB_REJECT、JOB_FINISH
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        delete2dModelTrainingJob(delete2dModelTrainingJobRequest?: Delete2dModelTrainingJobRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/digital-human-training-manage/user/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (delete2dModelTrainingJobRequest !== null && delete2dModelTrainingJobRequest !== undefined) {
                if (delete2dModelTrainingJobRequest instanceof Delete2dModelTrainingJobRequest) {
                    jobId = delete2dModelTrainingJobRequest.jobId;
                    authorization = delete2dModelTrainingJobRequest.authorization;
                    xSdkDate = delete2dModelTrainingJobRequest.xSdkDate;
                    xProjectId = delete2dModelTrainingJobRequest.xProjectId;
                    xAppUserId = delete2dModelTrainingJobRequest.xAppUserId;
                } else {
                    jobId = delete2dModelTrainingJobRequest['job_id'];
                    authorization = delete2dModelTrainingJobRequest['Authorization'];
                    xSdkDate = delete2dModelTrainingJobRequest['X-Sdk-Date'];
                    xProjectId = delete2dModelTrainingJobRequest['X-Project-Id'];
                    xAppUserId = delete2dModelTrainingJobRequest['X-App-UserId'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling delete2dModelTrainingJob.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于租户执行分身数字人模型训练任务命令，如提交训练审核等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        execute2dModelTrainingCommandByUser(execute2dModelTrainingCommandByUserRequest?: Execute2dModelTrainingCommandByUserRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/digital-human-training-manage/user/jobs/{job_id}/command",
                contentType: "application/json;charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (execute2dModelTrainingCommandByUserRequest !== null && execute2dModelTrainingCommandByUserRequest !== undefined) {
                if (execute2dModelTrainingCommandByUserRequest instanceof Execute2dModelTrainingCommandByUserRequest) {
                    jobId = execute2dModelTrainingCommandByUserRequest.jobId;
                    body = execute2dModelTrainingCommandByUserRequest.body
                    authorization = execute2dModelTrainingCommandByUserRequest.authorization;
                    xSdkDate = execute2dModelTrainingCommandByUserRequest.xSdkDate;
                    xProjectId = execute2dModelTrainingCommandByUserRequest.xProjectId;
                    xAppUserId = execute2dModelTrainingCommandByUserRequest.xAppUserId;
                } else {
                    jobId = execute2dModelTrainingCommandByUserRequest['job_id'];
                    body = execute2dModelTrainingCommandByUserRequest['body'];
                    authorization = execute2dModelTrainingCommandByUserRequest['Authorization'];
                    xSdkDate = execute2dModelTrainingCommandByUserRequest['X-Sdk-Date'];
                    xProjectId = execute2dModelTrainingCommandByUserRequest['X-Project-Id'];
                    xAppUserId = execute2dModelTrainingCommandByUserRequest['X-App-UserId'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling execute2dModelTrainingCommandByUser.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询分身数字人模型训练任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        list2dModelTrainingJob(list2dModelTrainingJobRequest?: List2dModelTrainingJobRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/digital-human-training-manage/user/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;
            
            let offset;
            
            let limit;
            
            let state;
            
            let sortKey;
            
            let sortDir;
            
            let createUntil;
            
            let createSince;
            
            let batchName;
            
            let tag;
            
            let jobId;
            
            let name;

            if (list2dModelTrainingJobRequest !== null && list2dModelTrainingJobRequest !== undefined) {
                if (list2dModelTrainingJobRequest instanceof List2dModelTrainingJobRequest) {
                    authorization = list2dModelTrainingJobRequest.authorization;
                    xSdkDate = list2dModelTrainingJobRequest.xSdkDate;
                    xProjectId = list2dModelTrainingJobRequest.xProjectId;
                    xAppUserId = list2dModelTrainingJobRequest.xAppUserId;
                    offset = list2dModelTrainingJobRequest.offset;
                    limit = list2dModelTrainingJobRequest.limit;
                    state = list2dModelTrainingJobRequest.state;
                    sortKey = list2dModelTrainingJobRequest.sortKey;
                    sortDir = list2dModelTrainingJobRequest.sortDir;
                    createUntil = list2dModelTrainingJobRequest.createUntil;
                    createSince = list2dModelTrainingJobRequest.createSince;
                    batchName = list2dModelTrainingJobRequest.batchName;
                    tag = list2dModelTrainingJobRequest.tag;
                    jobId = list2dModelTrainingJobRequest.jobId;
                    name = list2dModelTrainingJobRequest.name;
                } else {
                    authorization = list2dModelTrainingJobRequest['Authorization'];
                    xSdkDate = list2dModelTrainingJobRequest['X-Sdk-Date'];
                    xProjectId = list2dModelTrainingJobRequest['X-Project-Id'];
                    xAppUserId = list2dModelTrainingJobRequest['X-App-UserId'];
                    offset = list2dModelTrainingJobRequest['offset'];
                    limit = list2dModelTrainingJobRequest['limit'];
                    state = list2dModelTrainingJobRequest['state'];
                    sortKey = list2dModelTrainingJobRequest['sort_key'];
                    sortDir = list2dModelTrainingJobRequest['sort_dir'];
                    createUntil = list2dModelTrainingJobRequest['create_until'];
                    createSince = list2dModelTrainingJobRequest['create_since'];
                    batchName = list2dModelTrainingJobRequest['batch_name'];
                    tag = list2dModelTrainingJobRequest['tag'];
                    jobId = list2dModelTrainingJobRequest['job_id'];
                    name = list2dModelTrainingJobRequest['name'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (createUntil !== null && createUntil !== undefined) {
                localVarQueryParameter['create_until'] = createUntil;
            }
            if (createSince !== null && createSince !== undefined) {
                localVarQueryParameter['create_since'] = createSince;
            }
            if (batchName !== null && batchName !== undefined) {
                localVarQueryParameter['batch_name'] = batchName;
            }
            if (tag !== null && tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }
            if (jobId !== null && jobId !== undefined) {
                localVarQueryParameter['job_id'] = jobId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询分身数字人模型训练任务详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        show2dModelTrainingJob(show2dModelTrainingJobRequest?: Show2dModelTrainingJobRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/digital-human-training-manage/user/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (show2dModelTrainingJobRequest !== null && show2dModelTrainingJobRequest !== undefined) {
                if (show2dModelTrainingJobRequest instanceof Show2dModelTrainingJobRequest) {
                    jobId = show2dModelTrainingJobRequest.jobId;
                    authorization = show2dModelTrainingJobRequest.authorization;
                    xSdkDate = show2dModelTrainingJobRequest.xSdkDate;
                    xProjectId = show2dModelTrainingJobRequest.xProjectId;
                    xAppUserId = show2dModelTrainingJobRequest.xAppUserId;
                } else {
                    jobId = show2dModelTrainingJobRequest['job_id'];
                    authorization = show2dModelTrainingJobRequest['Authorization'];
                    xSdkDate = show2dModelTrainingJobRequest['X-Sdk-Date'];
                    xProjectId = show2dModelTrainingJobRequest['X-Project-Id'];
                    xAppUserId = show2dModelTrainingJobRequest['X-App-UserId'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling show2dModelTrainingJob.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于更新分身数字人模型训练任务。用于在自动审核或者人工审核不通过情况下，更新训练视频、身份证照片等。
         * &gt; * 该接口只能在AUTO_VERIFY_FAILED或者MANUAL_VERIFY_FAILED状态下调用
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        update2dModelTrainingJob(update2dModelTrainingJobRequest?: Update2dModelTrainingJobRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/digital-human-training-manage/user/jobs/{job_id}",
                contentType: "application/json;charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (update2dModelTrainingJobRequest !== null && update2dModelTrainingJobRequest !== undefined) {
                if (update2dModelTrainingJobRequest instanceof Update2dModelTrainingJobRequest) {
                    jobId = update2dModelTrainingJobRequest.jobId;
                    body = update2dModelTrainingJobRequest.body
                    authorization = update2dModelTrainingJobRequest.authorization;
                    xSdkDate = update2dModelTrainingJobRequest.xSdkDate;
                    xProjectId = update2dModelTrainingJobRequest.xProjectId;
                    xAppUserId = update2dModelTrainingJobRequest.xAppUserId;
                } else {
                    jobId = update2dModelTrainingJobRequest['job_id'];
                    body = update2dModelTrainingJobRequest['body'];
                    authorization = update2dModelTrainingJobRequest['Authorization'];
                    xSdkDate = update2dModelTrainingJobRequest['X-Sdk-Date'];
                    xProjectId = update2dModelTrainingJobRequest['X-Project-Id'];
                    xAppUserId = update2dModelTrainingJobRequest['X-App-UserId'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling update2dModelTrainingJob.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建驱动数字人表情的任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFacialAnimations(createFacialAnimationsRequest?: CreateFacialAnimationsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/ttsa/fas",
                contentType: "application/json;charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createFacialAnimationsRequest !== null && createFacialAnimationsRequest !== undefined) {
                if (createFacialAnimationsRequest instanceof CreateFacialAnimationsRequest) {
                    body = createFacialAnimationsRequest.body
                } else {
                    body = createFacialAnimationsRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建驱动数字人表情、动作及语音的任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTtsa(createTtsaRequest?: CreateTtsaRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/ttsa-jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (createTtsaRequest !== null && createTtsaRequest !== undefined) {
                if (createTtsaRequest instanceof CreateTtsaRequest) {
                    body = createTtsaRequest.body
                    authorization = createTtsaRequest.authorization;
                    xSdkDate = createTtsaRequest.xSdkDate;
                    xProjectId = createTtsaRequest.xProjectId;
                    xAppUserId = createTtsaRequest.xAppUserId;
                } else {
                    body = createTtsaRequest['body'];
                    authorization = createTtsaRequest['Authorization'];
                    xSdkDate = createTtsaRequest['X-Sdk-Date'];
                    xProjectId = createTtsaRequest['X-Project-Id'];
                    xAppUserId = createTtsaRequest['X-App-UserId'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于获取生成的数字人表情驱动数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFacialAnimationsData(listFacialAnimationsDataRequest?: ListFacialAnimationsDataRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/fas-jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (listFacialAnimationsDataRequest !== null && listFacialAnimationsDataRequest !== undefined) {
                if (listFacialAnimationsDataRequest instanceof ListFacialAnimationsDataRequest) {
                    jobId = listFacialAnimationsDataRequest.jobId;
                } else {
                    jobId = listFacialAnimationsDataRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling listFacialAnimationsData.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于获取生成的数字人驱动数据，包括语音、表情、动作等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTtsaData(listTtsaDataRequest?: ListTtsaDataRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/ttsa-jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let offset;

            if (listTtsaDataRequest !== null && listTtsaDataRequest !== undefined) {
                if (listTtsaDataRequest instanceof ListTtsaDataRequest) {
                    jobId = listTtsaDataRequest.jobId;
                    authorization = listTtsaDataRequest.authorization;
                    xSdkDate = listTtsaDataRequest.xSdkDate;
                    xProjectId = listTtsaDataRequest.xProjectId;
                    offset = listTtsaDataRequest.offset;
                } else {
                    jobId = listTtsaDataRequest['job_id'];
                    authorization = listTtsaDataRequest['Authorization'];
                    xSdkDate = listTtsaDataRequest['X-Sdk-Date'];
                    xProjectId = listTtsaDataRequest['X-Project-Id'];
                    offset = listTtsaDataRequest['offset'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling listTtsaData.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询驱动数字人表情、动作及语音的任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTtsaJobs(listTtsaJobsRequest?: ListTtsaJobsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/ttsa-jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;
            
            let offset;
            
            let limit;

            if (listTtsaJobsRequest !== null && listTtsaJobsRequest !== undefined) {
                if (listTtsaJobsRequest instanceof ListTtsaJobsRequest) {
                    authorization = listTtsaJobsRequest.authorization;
                    xSdkDate = listTtsaJobsRequest.xSdkDate;
                    xProjectId = listTtsaJobsRequest.xProjectId;
                    xAppUserId = listTtsaJobsRequest.xAppUserId;
                    offset = listTtsaJobsRequest.offset;
                    limit = listTtsaJobsRequest.limit;
                } else {
                    authorization = listTtsaJobsRequest['Authorization'];
                    xSdkDate = listTtsaJobsRequest['X-Sdk-Date'];
                    xProjectId = listTtsaJobsRequest['X-Project-Id'];
                    xAppUserId = listTtsaJobsRequest['X-App-UserId'];
                    offset = listTtsaJobsRequest['offset'];
                    limit = listTtsaJobsRequest['limit'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建生成播报内容的语音试听文件任务。第三方音色试听需要收费，收费标准参考：https://marketplace.huaweicloud.com/product/OFFI919400645308506112#productid&#x3D;OFFI919400645308506112
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTtsAudition(createTtsAuditionRequest?: CreateTtsAuditionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/ttsc/audition",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRequestId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (createTtsAuditionRequest !== null && createTtsAuditionRequest !== undefined) {
                if (createTtsAuditionRequest instanceof CreateTtsAuditionRequest) {
                    body = createTtsAuditionRequest.body
                    xRequestId = createTtsAuditionRequest.xRequestId;
                    authorization = createTtsAuditionRequest.authorization;
                    xSdkDate = createTtsAuditionRequest.xSdkDate;
                    xProjectId = createTtsAuditionRequest.xProjectId;
                    xAppUserId = createTtsAuditionRequest.xAppUserId;
                } else {
                    body = createTtsAuditionRequest['body'];
                    xRequestId = createTtsAuditionRequest['X-Request-Id'];
                    authorization = createTtsAuditionRequest['Authorization'];
                    xSdkDate = createTtsAuditionRequest['X-Sdk-Date'];
                    xProjectId = createTtsAuditionRequest['X-Project-Id'];
                    xAppUserId = createTtsAuditionRequest['X-App-UserId'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于获取TTS试听文件下载链接，返回List中包含当前已生产的试听文件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTtsAuditionFile(showTtsAuditionFileRequest?: ShowTtsAuditionFileRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/ttsc/audition-file/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let xRequestId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (showTtsAuditionFileRequest !== null && showTtsAuditionFileRequest !== undefined) {
                if (showTtsAuditionFileRequest instanceof ShowTtsAuditionFileRequest) {
                    jobId = showTtsAuditionFileRequest.jobId;
                    xRequestId = showTtsAuditionFileRequest.xRequestId;
                    authorization = showTtsAuditionFileRequest.authorization;
                    xSdkDate = showTtsAuditionFileRequest.xSdkDate;
                    xProjectId = showTtsAuditionFileRequest.xProjectId;
                    xAppUserId = showTtsAuditionFileRequest.xAppUserId;
                } else {
                    jobId = showTtsAuditionFileRequest['job_id'];
                    xRequestId = showTtsAuditionFileRequest['X-Request-Id'];
                    authorization = showTtsAuditionFileRequest['Authorization'];
                    xSdkDate = showTtsAuditionFileRequest['X-Sdk-Date'];
                    xProjectId = showTtsAuditionFileRequest['X-Project-Id'];
                    xAppUserId = showTtsAuditionFileRequest['X-App-UserId'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showTtsAuditionFile.');
            }
            if (xRequestId !== undefined && xRequestId !== null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建视频驱动任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVideoMotionCaptureJob(createVideoMotionCaptureJobRequest?: CreateVideoMotionCaptureJobRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/video-motion-capture-jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;
            
            let xUserPrivilege;

            if (createVideoMotionCaptureJobRequest !== null && createVideoMotionCaptureJobRequest !== undefined) {
                if (createVideoMotionCaptureJobRequest instanceof CreateVideoMotionCaptureJobRequest) {
                    body = createVideoMotionCaptureJobRequest.body
                    authorization = createVideoMotionCaptureJobRequest.authorization;
                    xSdkDate = createVideoMotionCaptureJobRequest.xSdkDate;
                    xProjectId = createVideoMotionCaptureJobRequest.xProjectId;
                    xAppUserId = createVideoMotionCaptureJobRequest.xAppUserId;
                    xUserPrivilege = createVideoMotionCaptureJobRequest.xUserPrivilege;
                } else {
                    body = createVideoMotionCaptureJobRequest['body'];
                    authorization = createVideoMotionCaptureJobRequest['Authorization'];
                    xSdkDate = createVideoMotionCaptureJobRequest['X-Sdk-Date'];
                    xProjectId = createVideoMotionCaptureJobRequest['X-Project-Id'];
                    xAppUserId = createVideoMotionCaptureJobRequest['X-App-UserId'];
                    xUserPrivilege = createVideoMotionCaptureJobRequest['X-User-Privilege'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            if (xUserPrivilege !== undefined && xUserPrivilege !== null) {
                localVarHeaderParameter['X-User-Privilege'] = String(xUserPrivilege);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于控制数字人驱动。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeVideoMotionCaptureCommand(executeVideoMotionCaptureCommandRequest?: ExecuteVideoMotionCaptureCommandRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/video-motion-capture-jobs/{job_id}/command",
                contentType: "application/json;charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (executeVideoMotionCaptureCommandRequest !== null && executeVideoMotionCaptureCommandRequest !== undefined) {
                if (executeVideoMotionCaptureCommandRequest instanceof ExecuteVideoMotionCaptureCommandRequest) {
                    jobId = executeVideoMotionCaptureCommandRequest.jobId;
                    body = executeVideoMotionCaptureCommandRequest.body
                    authorization = executeVideoMotionCaptureCommandRequest.authorization;
                    xSdkDate = executeVideoMotionCaptureCommandRequest.xSdkDate;
                    xProjectId = executeVideoMotionCaptureCommandRequest.xProjectId;
                    xAppUserId = executeVideoMotionCaptureCommandRequest.xAppUserId;
                } else {
                    jobId = executeVideoMotionCaptureCommandRequest['job_id'];
                    body = executeVideoMotionCaptureCommandRequest['body'];
                    authorization = executeVideoMotionCaptureCommandRequest['Authorization'];
                    xSdkDate = executeVideoMotionCaptureCommandRequest['X-Sdk-Date'];
                    xProjectId = executeVideoMotionCaptureCommandRequest['X-Project-Id'];
                    xAppUserId = executeVideoMotionCaptureCommandRequest['X-App-UserId'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling executeVideoMotionCaptureCommand.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询视频驱动任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVideoMotionCaptureJobs(listVideoMotionCaptureJobsRequest?: ListVideoMotionCaptureJobsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/video-motion-capture-jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;
            
            let offset;
            
            let limit;

            if (listVideoMotionCaptureJobsRequest !== null && listVideoMotionCaptureJobsRequest !== undefined) {
                if (listVideoMotionCaptureJobsRequest instanceof ListVideoMotionCaptureJobsRequest) {
                    authorization = listVideoMotionCaptureJobsRequest.authorization;
                    xSdkDate = listVideoMotionCaptureJobsRequest.xSdkDate;
                    xProjectId = listVideoMotionCaptureJobsRequest.xProjectId;
                    xAppUserId = listVideoMotionCaptureJobsRequest.xAppUserId;
                    offset = listVideoMotionCaptureJobsRequest.offset;
                    limit = listVideoMotionCaptureJobsRequest.limit;
                } else {
                    authorization = listVideoMotionCaptureJobsRequest['Authorization'];
                    xSdkDate = listVideoMotionCaptureJobsRequest['X-Sdk-Date'];
                    xProjectId = listVideoMotionCaptureJobsRequest['X-Project-Id'];
                    xAppUserId = listVideoMotionCaptureJobsRequest['X-App-UserId'];
                    offset = listVideoMotionCaptureJobsRequest['offset'];
                    limit = listVideoMotionCaptureJobsRequest['limit'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询视频驱动任务详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVideoMotionCaptureJob(showVideoMotionCaptureJobRequest?: ShowVideoMotionCaptureJobRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/video-motion-capture-jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (showVideoMotionCaptureJobRequest !== null && showVideoMotionCaptureJobRequest !== undefined) {
                if (showVideoMotionCaptureJobRequest instanceof ShowVideoMotionCaptureJobRequest) {
                    jobId = showVideoMotionCaptureJobRequest.jobId;
                    authorization = showVideoMotionCaptureJobRequest.authorization;
                    xSdkDate = showVideoMotionCaptureJobRequest.xSdkDate;
                    xProjectId = showVideoMotionCaptureJobRequest.xProjectId;
                    xAppUserId = showVideoMotionCaptureJobRequest.xAppUserId;
                } else {
                    jobId = showVideoMotionCaptureJobRequest['job_id'];
                    authorization = showVideoMotionCaptureJobRequest['Authorization'];
                    xSdkDate = showVideoMotionCaptureJobRequest['X-Sdk-Date'];
                    xProjectId = showVideoMotionCaptureJobRequest['X-Project-Id'];
                    xAppUserId = showVideoMotionCaptureJobRequest['X-App-UserId'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showVideoMotionCaptureJob.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于停止视频驱动任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopVideoMotionCaptureJob(stopVideoMotionCaptureJobRequest?: StopVideoMotionCaptureJobRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/video-motion-capture-jobs/{job_id}/finish",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (stopVideoMotionCaptureJobRequest !== null && stopVideoMotionCaptureJobRequest !== undefined) {
                if (stopVideoMotionCaptureJobRequest instanceof StopVideoMotionCaptureJobRequest) {
                    jobId = stopVideoMotionCaptureJobRequest.jobId;
                    authorization = stopVideoMotionCaptureJobRequest.authorization;
                    xSdkDate = stopVideoMotionCaptureJobRequest.xSdkDate;
                    xProjectId = stopVideoMotionCaptureJobRequest.xProjectId;
                    xAppUserId = stopVideoMotionCaptureJobRequest.xAppUserId;
                } else {
                    jobId = stopVideoMotionCaptureJobRequest['job_id'];
                    authorization = stopVideoMotionCaptureJobRequest['Authorization'];
                    xSdkDate = stopVideoMotionCaptureJobRequest['X-Sdk-Date'];
                    xProjectId = stopVideoMotionCaptureJobRequest['X-Project-Id'];
                    xAppUserId = stopVideoMotionCaptureJobRequest['X-App-UserId'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling stopVideoMotionCaptureJob.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于复制视频制作剧本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        copyVideoScripts(copyVideoScriptsRequest?: CopyVideoScriptsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/digital-human-video-scripts/{script_id}/copy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let scriptId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (copyVideoScriptsRequest !== null && copyVideoScriptsRequest !== undefined) {
                if (copyVideoScriptsRequest instanceof CopyVideoScriptsRequest) {
                    scriptId = copyVideoScriptsRequest.scriptId;
                    authorization = copyVideoScriptsRequest.authorization;
                    xSdkDate = copyVideoScriptsRequest.xSdkDate;
                    xProjectId = copyVideoScriptsRequest.xProjectId;
                    xAppUserId = copyVideoScriptsRequest.xAppUserId;
                } else {
                    scriptId = copyVideoScriptsRequest['script_id'];
                    authorization = copyVideoScriptsRequest['Authorization'];
                    xSdkDate = copyVideoScriptsRequest['X-Sdk-Date'];
                    xProjectId = copyVideoScriptsRequest['X-Project-Id'];
                    xAppUserId = copyVideoScriptsRequest['X-App-UserId'];
                }
            }

        
            if (scriptId === null || scriptId === undefined) {
            throw new RequiredError('scriptId','Required parameter scriptId was null or undefined when calling copyVideoScripts.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'script_id': scriptId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建视频制作剧本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVideoScripts(createVideoScriptsRequest?: CreateVideoScriptsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/digital-human-video-scripts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (createVideoScriptsRequest !== null && createVideoScriptsRequest !== undefined) {
                if (createVideoScriptsRequest instanceof CreateVideoScriptsRequest) {
                    body = createVideoScriptsRequest.body
                    authorization = createVideoScriptsRequest.authorization;
                    xSdkDate = createVideoScriptsRequest.xSdkDate;
                    xProjectId = createVideoScriptsRequest.xProjectId;
                    xAppUserId = createVideoScriptsRequest.xAppUserId;
                } else {
                    body = createVideoScriptsRequest['body'];
                    authorization = createVideoScriptsRequest['Authorization'];
                    xSdkDate = createVideoScriptsRequest['X-Sdk-Date'];
                    xProjectId = createVideoScriptsRequest['X-Project-Id'];
                    xAppUserId = createVideoScriptsRequest['X-App-UserId'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除视频制作剧本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVideoScript(deleteVideoScriptRequest?: DeleteVideoScriptRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/digital-human-video-scripts/{script_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let scriptId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (deleteVideoScriptRequest !== null && deleteVideoScriptRequest !== undefined) {
                if (deleteVideoScriptRequest instanceof DeleteVideoScriptRequest) {
                    scriptId = deleteVideoScriptRequest.scriptId;
                    authorization = deleteVideoScriptRequest.authorization;
                    xSdkDate = deleteVideoScriptRequest.xSdkDate;
                    xProjectId = deleteVideoScriptRequest.xProjectId;
                    xAppUserId = deleteVideoScriptRequest.xAppUserId;
                } else {
                    scriptId = deleteVideoScriptRequest['script_id'];
                    authorization = deleteVideoScriptRequest['Authorization'];
                    xSdkDate = deleteVideoScriptRequest['X-Sdk-Date'];
                    xProjectId = deleteVideoScriptRequest['X-Project-Id'];
                    xAppUserId = deleteVideoScriptRequest['X-App-UserId'];
                }
            }

        
            if (scriptId === null || scriptId === undefined) {
            throw new RequiredError('scriptId','Required parameter scriptId was null or undefined when calling deleteVideoScript.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'script_id': scriptId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询视频制作剧本列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVideoScripts(listVideoScriptsRequest?: ListVideoScriptsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/digital-human-video-scripts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;
            
            let offset;
            
            let limit;
            
            let name;
            
            let scriptCatalog;
            
            let viewMode;

            if (listVideoScriptsRequest !== null && listVideoScriptsRequest !== undefined) {
                if (listVideoScriptsRequest instanceof ListVideoScriptsRequest) {
                    authorization = listVideoScriptsRequest.authorization;
                    xSdkDate = listVideoScriptsRequest.xSdkDate;
                    xProjectId = listVideoScriptsRequest.xProjectId;
                    xAppUserId = listVideoScriptsRequest.xAppUserId;
                    offset = listVideoScriptsRequest.offset;
                    limit = listVideoScriptsRequest.limit;
                    name = listVideoScriptsRequest.name;
                    scriptCatalog = listVideoScriptsRequest.scriptCatalog;
                    viewMode = listVideoScriptsRequest.viewMode;
                } else {
                    authorization = listVideoScriptsRequest['Authorization'];
                    xSdkDate = listVideoScriptsRequest['X-Sdk-Date'];
                    xProjectId = listVideoScriptsRequest['X-Project-Id'];
                    xAppUserId = listVideoScriptsRequest['X-App-UserId'];
                    offset = listVideoScriptsRequest['offset'];
                    limit = listVideoScriptsRequest['limit'];
                    name = listVideoScriptsRequest['name'];
                    scriptCatalog = listVideoScriptsRequest['script_catalog'];
                    viewMode = listVideoScriptsRequest['view_mode'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (scriptCatalog !== null && scriptCatalog !== undefined) {
                localVarQueryParameter['script_catalog'] = scriptCatalog;
            }
            if (viewMode !== null && viewMode !== undefined) {
                localVarQueryParameter['view_mode'] = viewMode;
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询视频制作剧本详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVideoScript(showVideoScriptRequest?: ShowVideoScriptRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/digital-human-video-scripts/{script_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let scriptId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (showVideoScriptRequest !== null && showVideoScriptRequest !== undefined) {
                if (showVideoScriptRequest instanceof ShowVideoScriptRequest) {
                    scriptId = showVideoScriptRequest.scriptId;
                    authorization = showVideoScriptRequest.authorization;
                    xSdkDate = showVideoScriptRequest.xSdkDate;
                    xProjectId = showVideoScriptRequest.xProjectId;
                    xAppUserId = showVideoScriptRequest.xAppUserId;
                } else {
                    scriptId = showVideoScriptRequest['script_id'];
                    authorization = showVideoScriptRequest['Authorization'];
                    xSdkDate = showVideoScriptRequest['X-Sdk-Date'];
                    xProjectId = showVideoScriptRequest['X-Project-Id'];
                    xAppUserId = showVideoScriptRequest['X-App-UserId'];
                }
            }

        
            if (scriptId === null || scriptId === undefined) {
            throw new RequiredError('scriptId','Required parameter scriptId was null or undefined when calling showVideoScript.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'script_id': scriptId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于更新视频制作剧本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVideoScript(updateVideoScriptRequest?: UpdateVideoScriptRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/digital-human-video-scripts/{script_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let scriptId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (updateVideoScriptRequest !== null && updateVideoScriptRequest !== undefined) {
                if (updateVideoScriptRequest instanceof UpdateVideoScriptRequest) {
                    scriptId = updateVideoScriptRequest.scriptId;
                    body = updateVideoScriptRequest.body
                    authorization = updateVideoScriptRequest.authorization;
                    xSdkDate = updateVideoScriptRequest.xSdkDate;
                    xProjectId = updateVideoScriptRequest.xProjectId;
                    xAppUserId = updateVideoScriptRequest.xAppUserId;
                } else {
                    scriptId = updateVideoScriptRequest['script_id'];
                    body = updateVideoScriptRequest['body'];
                    authorization = updateVideoScriptRequest['Authorization'];
                    xSdkDate = updateVideoScriptRequest['X-Sdk-Date'];
                    xProjectId = updateVideoScriptRequest['X-Project-Id'];
                    xAppUserId = updateVideoScriptRequest['X-App-UserId'];
                }
            }

        
            if (scriptId === null || scriptId === undefined) {
            throw new RequiredError('scriptId','Required parameter scriptId was null or undefined when calling updateVideoScript.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'script_id': scriptId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): MetaStudioClient {
    return new MetaStudioClient(client);
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError" = "RequiredError";
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}