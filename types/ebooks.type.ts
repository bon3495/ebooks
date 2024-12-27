import { z } from 'zod';

import { EbookParamsSchema } from '@/schema/ebooks.schema';

export type EbookParams = z.infer<typeof EbookParamsSchema>;
