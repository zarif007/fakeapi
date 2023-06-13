export interface SchemaData {
    key: string;
    value: string;
    children: any;
    counter: number;
    type: string;
    copies: Number;
    showChild: Boolean; 
}

export interface ProjectInterface {
    authorId: string;
    createdAt: string;
    enabled: boolean;
    id: string;
    key: string;
    name: string;
    updatedAt: string;
    schema: SchemaData
}