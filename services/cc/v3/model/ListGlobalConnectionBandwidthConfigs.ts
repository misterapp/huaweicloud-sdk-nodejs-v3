import { GlobalConnectionBandwidthQuotas } from './GlobalConnectionBandwidthQuotas';
import { GlobalConnectionBandwidthSizeRange } from './GlobalConnectionBandwidthSizeRange';


export class ListGlobalConnectionBandwidthConfigs {
    private 'size_range'?: Array<GlobalConnectionBandwidthSizeRange>;
    private 'charge_mode'?: Array<ListGlobalConnectionBandwidthConfigsChargeModeEnum> | Array<string>;
    public services?: Array<ListGlobalConnectionBandwidthConfigsServicesEnum> | Array<string>;
    private 'gcb_type'?: Array<ListGlobalConnectionBandwidthConfigsGcbTypeEnum> | Array<string>;
    private 'ratio_95peak_guar'?: number;
    public crossborder?: boolean;
    public quotas?: Array<GlobalConnectionBandwidthQuotas>;
    private 'sla_level'?: Array<ListGlobalConnectionBandwidthConfigsSlaLevelEnum> | Array<string>;
    private 'bind_limit'?: number;
    public constructor(sizeRange?: Array<GlobalConnectionBandwidthSizeRange>, chargeMode?: Array<string>, services?: Array<string>, gcbType?: Array<string>, crossborder?: boolean, quotas?: Array<GlobalConnectionBandwidthQuotas>, slaLevel?: Array<string>, bindLimit?: number) { 
        this['size_range'] = sizeRange;
        this['charge_mode'] = chargeMode;
        this['services'] = services;
        this['gcb_type'] = gcbType;
        this['crossborder'] = crossborder;
        this['quotas'] = quotas;
        this['sla_level'] = slaLevel;
        this['bind_limit'] = bindLimit;
    }
    public withSizeRange(sizeRange: Array<GlobalConnectionBandwidthSizeRange>): ListGlobalConnectionBandwidthConfigs {
        this['size_range'] = sizeRange;
        return this;
    }
    public set sizeRange(sizeRange: Array<GlobalConnectionBandwidthSizeRange>  | undefined) {
        this['size_range'] = sizeRange;
    }
    public get sizeRange(): Array<GlobalConnectionBandwidthSizeRange> | undefined {
        return this['size_range'];
    }
    public withChargeMode(chargeMode: Array<ListGlobalConnectionBandwidthConfigsChargeModeEnum> | Array<string>): ListGlobalConnectionBandwidthConfigs {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: Array<ListGlobalConnectionBandwidthConfigsChargeModeEnum> | Array<string>  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): Array<ListGlobalConnectionBandwidthConfigsChargeModeEnum> | Array<string> | undefined {
        return this['charge_mode'];
    }
    public withServices(services: Array<ListGlobalConnectionBandwidthConfigsServicesEnum> | Array<string>): ListGlobalConnectionBandwidthConfigs {
        this['services'] = services;
        return this;
    }
    public withGcbType(gcbType: Array<ListGlobalConnectionBandwidthConfigsGcbTypeEnum> | Array<string>): ListGlobalConnectionBandwidthConfigs {
        this['gcb_type'] = gcbType;
        return this;
    }
    public set gcbType(gcbType: Array<ListGlobalConnectionBandwidthConfigsGcbTypeEnum> | Array<string>  | undefined) {
        this['gcb_type'] = gcbType;
    }
    public get gcbType(): Array<ListGlobalConnectionBandwidthConfigsGcbTypeEnum> | Array<string> | undefined {
        return this['gcb_type'];
    }
    public withRatio95peakGuar(ratio95peakGuar: number): ListGlobalConnectionBandwidthConfigs {
        this['ratio_95peak_guar'] = ratio95peakGuar;
        return this;
    }
    public set ratio95peakGuar(ratio95peakGuar: number  | undefined) {
        this['ratio_95peak_guar'] = ratio95peakGuar;
    }
    public get ratio95peakGuar(): number | undefined {
        return this['ratio_95peak_guar'];
    }
    public withCrossborder(crossborder: boolean): ListGlobalConnectionBandwidthConfigs {
        this['crossborder'] = crossborder;
        return this;
    }
    public withQuotas(quotas: Array<GlobalConnectionBandwidthQuotas>): ListGlobalConnectionBandwidthConfigs {
        this['quotas'] = quotas;
        return this;
    }
    public withSlaLevel(slaLevel: Array<ListGlobalConnectionBandwidthConfigsSlaLevelEnum> | Array<string>): ListGlobalConnectionBandwidthConfigs {
        this['sla_level'] = slaLevel;
        return this;
    }
    public set slaLevel(slaLevel: Array<ListGlobalConnectionBandwidthConfigsSlaLevelEnum> | Array<string>  | undefined) {
        this['sla_level'] = slaLevel;
    }
    public get slaLevel(): Array<ListGlobalConnectionBandwidthConfigsSlaLevelEnum> | Array<string> | undefined {
        return this['sla_level'];
    }
    public withBindLimit(bindLimit: number): ListGlobalConnectionBandwidthConfigs {
        this['bind_limit'] = bindLimit;
        return this;
    }
    public set bindLimit(bindLimit: number  | undefined) {
        this['bind_limit'] = bindLimit;
    }
    public get bindLimit(): number | undefined {
        return this['bind_limit'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListGlobalConnectionBandwidthConfigsChargeModeEnum {
    BWD = 'bwd',
    E_95 = '95'
}
/**
    * @export
    * @enum {string}
    */
export enum ListGlobalConnectionBandwidthConfigsServicesEnum {
    CC = 'CC',
    GEIP = 'GEIP',
    GCN = 'GCN',
    GSN = 'GSN'
}
/**
    * @export
    * @enum {string}
    */
export enum ListGlobalConnectionBandwidthConfigsGcbTypeEnum {
    REGION = 'Region',
    SUBAREA = 'SubArea',
    AREA = 'Area',
    TRSAREA = 'TrsArea'
}
/**
    * @export
    * @enum {string}
    */
export enum ListGlobalConnectionBandwidthConfigsSlaLevelEnum {
    PT = 'Pt',
    AU = 'Au',
    AG = 'Ag'
}
