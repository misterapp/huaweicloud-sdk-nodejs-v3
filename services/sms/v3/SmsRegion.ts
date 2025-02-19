import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class SmsRegion {
    public static AP_SOUTHEAST_1 = new Region("ap-southeast-1", ["https://sms.ap-southeast-1.myhuaweicloud.com"]);
    public static AP_SOUTHEAST_3 = new Region("ap-southeast-3", ["https://sms.ap-southeast-3.myhuaweicloud.com"]);
    public static MY_KUALALUMPUR_1 = new Region("my-kualalumpur-1", ["https://sms.my-kualalumpur-1.alphaedge.tmone.com.my"]);
    public static EU_WEST_101 = new Region("eu-west-101", ["https://sms.eu-west-101.myhuaweicloud.eu"]);
    

    private static REGION_MAP: RegionMap = {
        "ap-southeast-1":SmsRegion.AP_SOUTHEAST_1,
        "ap-southeast-3":SmsRegion.AP_SOUTHEAST_3,
        "my-kualalumpur-1":SmsRegion.MY_KUALALUMPUR_1,
        "eu-west-101":SmsRegion.EU_WEST_101
    };
  
    public static valueOf(regionId: string) {
        if (!regionId) {  
          throw new Error("Unexpected empty parameter: regionId.");
        }
        const result = this.REGION_MAP[regionId];
        if (result) {
          return result;
        }
        throw new Error(`Unexpected regionId: ${regionId}.`)
    }
}
