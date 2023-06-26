import { randomUsernames } from '@/samples/RandomUsernames';
import { SchemaData } from '@/types/generator';

export const schemaToDataDecoder = (schema: any) => {
  // console.log(schema)
  if (schema.type === 'Object') {
    const obj: any = {};
    obj[`${schema.key}`] = {};

    Object.entries(schema.children).length > 0 &&
      Object.entries(schema.children).map(child => {
        Object.assign(obj[`${schema.key}`], schemaToDataDecoder(child[1]));
      });

    return obj;
  } else if (schema.type === 'Array') {
    const arr: any = {};
    arr[`${schema.key}`] = [];
    if (schema.value === 'Customized Array') {
      Object.entries(schema.children).length > 0 &&
        Object.entries(schema.children).map((child, index) => {
          arr[`${schema.key}`].push(schemaToDataDecoder(child[1])[index]);
        });
    } else if (schema.value === 'Array of Random User Names') {
      for (let i = 0; i < 5; i++) {
        arr[`${schema.key}`].push(randomUsernames[i]);
      }
    }

    return arr;
  } else if (schema.type === 'String') {
    let str: any = {};
    str[schema.key] = '';

    if (schema.value === 'Random User Name') {
      str[schema.key] = randomUsernames[2];
    }

    return str;
  }
};
