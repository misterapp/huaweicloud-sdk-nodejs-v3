import { EpsUpdatePermissionDesc } from './EpsUpdatePermissionDesc';


export class UpdatePermissionDescRequest {
    public permission?: EpsUpdatePermissionDesc;
    public constructor(permission?: EpsUpdatePermissionDesc) { 
        this['permission'] = permission;
    }
    public withPermission(permission: EpsUpdatePermissionDesc): UpdatePermissionDescRequest {
        this['permission'] = permission;
        return this;
    }
}