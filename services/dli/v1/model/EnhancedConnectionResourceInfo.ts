

export class EnhancedConnectionResourceInfo {
    private 'peer_id'?: string;
    public status?: string;
    public name?: string;
    private 'err_msg'?: string;
    private 'update_time'?: number;
    public constructor() { 
    }
    public withPeerId(peerId: string): EnhancedConnectionResourceInfo {
        this['peer_id'] = peerId;
        return this;
    }
    public set peerId(peerId: string  | undefined) {
        this['peer_id'] = peerId;
    }
    public get peerId(): string | undefined {
        return this['peer_id'];
    }
    public withStatus(status: string): EnhancedConnectionResourceInfo {
        this['status'] = status;
        return this;
    }
    public withName(name: string): EnhancedConnectionResourceInfo {
        this['name'] = name;
        return this;
    }
    public withErrMsg(errMsg: string): EnhancedConnectionResourceInfo {
        this['err_msg'] = errMsg;
        return this;
    }
    public set errMsg(errMsg: string  | undefined) {
        this['err_msg'] = errMsg;
    }
    public get errMsg(): string | undefined {
        return this['err_msg'];
    }
    public withUpdateTime(updateTime: number): EnhancedConnectionResourceInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}