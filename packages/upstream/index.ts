import { z } from 'zod';

export function takesSchema<T>(schema: z.Schema<T, z.ZodTypeDef, any>) {
  return schema;
}