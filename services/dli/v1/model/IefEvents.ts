

export class IefEvents {
    private 'event_type'?: string;
    public operation?: string;
    public timestamp?: number;
    public topic?: string;
    public name?: string;
    public attributes?: string;
    public constructor(eventType?: string, operation?: string, timestamp?: number, topic?: string, name?: string) { 
        this['event_type'] = eventType;
        this['operation'] = operation;
        this['timestamp'] = timestamp;
        this['topic'] = topic;
        this['name'] = name;
    }
    public withEventType(eventType: string): IefEvents {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withOperation(operation: string): IefEvents {
        this['operation'] = operation;
        return this;
    }
    public withTimestamp(timestamp: number): IefEvents {
        this['timestamp'] = timestamp;
        return this;
    }
    public withTopic(topic: string): IefEvents {
        this['topic'] = topic;
        return this;
    }
    public withName(name: string): IefEvents {
        this['name'] = name;
        return this;
    }
    public withAttributes(attributes: string): IefEvents {
        this['attributes'] = attributes;
        return this;
    }
}