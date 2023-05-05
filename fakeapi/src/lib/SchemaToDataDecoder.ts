import { SchemaData } from "@/types/generator"

export const schemaToDataDecoder = (schema: SchemaData) => {
    // console.log(schema)
    if(schema.type === 'Object'){
        const obj: any = {};
        obj[`${schema.key}`] = {}

        Object.entries(schema.children).length > 0 && Object.entries(schema.children).map(child => {
            Object.assign(obj[`${schema.key}`], schemaToDataDecoder(child[1]))
        })

        return obj
    } else if(schema.type === 'Array') {

        const arr: any = {}
        arr[`${schema.key}`] = []
        if(schema.value === 'Customised Array') {
            Object.entries(schema.children).length > 0 && Object.entries(schema.children).map(child => {
                arr[`${schema.key}`].push(schemaToDataDecoder(child[1]))
            })
        }
        return arr
    }
}