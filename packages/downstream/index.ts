import { takesSchema } from "../upstream";
import { z } from 'zod';

takesSchema(z.string());