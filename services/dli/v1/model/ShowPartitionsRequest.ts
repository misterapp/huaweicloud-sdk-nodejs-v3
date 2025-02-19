

export class ShowPartitionsRequest {
    private 'database_name'?: string;
    private 'table_name'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(databaseName?: string, tableName?: string) { 
        this['database_name'] = databaseName;
        this['table_name'] = tableName;
    }
    public withDatabaseName(databaseName: string): ShowPartitionsRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTableName(tableName: string): ShowPartitionsRequest {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withLimit(limit: number): ShowPartitionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowPartitionsRequest {
        this['offset'] = offset;
        return this;
    }
}