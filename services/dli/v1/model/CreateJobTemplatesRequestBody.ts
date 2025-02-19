

export class CreateJobTemplatesRequestBody {
    public type?: string;
    public name?: string;
    public body?: string;
    public group?: string;
    public description?: string;
    public language?: string;
    public constructor(type?: string, name?: string, body?: string) { 
        this['type'] = type;
        this['name'] = name;
        this['body'] = body;
    }
    public withType(type: string): CreateJobTemplatesRequestBody {
        this['type'] = type;
        return this;
    }
    public withName(name: string): CreateJobTemplatesRequestBody {
        this['name'] = name;
        return this;
    }
    public withBody(body: string): CreateJobTemplatesRequestBody {
        this['body'] = body;
        return this;
    }
    public withGroup(group: string): CreateJobTemplatesRequestBody {
        this['group'] = group;
        return this;
    }
    public withDescription(description: string): CreateJobTemplatesRequestBody {
        this['description'] = description;
        return this;
    }
    public withLanguage(language: string): CreateJobTemplatesRequestBody {
        this['language'] = language;
        return this;
    }
}