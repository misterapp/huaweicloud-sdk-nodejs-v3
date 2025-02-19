import { ConnectionsDesc } from './ConnectionsDesc';


export class UpdateEpConnections {
    public connections?: Array<ConnectionsDesc>;
    public constructor(connections?: Array<ConnectionsDesc>) { 
        this['connections'] = connections;
    }
    public withConnections(connections: Array<ConnectionsDesc>): UpdateEpConnections {
        this['connections'] = connections;
        return this;
    }
}