

export class ShowTableContentRequest {
    private 'database_name'?: string;
    private 'table_name'?: string;
    public mode?: string;
    public constructor(databaseName?: string, tableName?: string) { 
        this['database_name'] = databaseName;
        this['table_name'] = tableName;
    }
    public withDatabaseName(databaseName: string): ShowTableContentRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTableName(tableName: string): ShowTableContentRequest {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withMode(mode: string): ShowTableContentRequest {
        this['mode'] = mode;
        return this;
    }
}