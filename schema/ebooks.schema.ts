import { z } from 'zod';

import { LOCALE_ARRAY } from '@/constants/globals';

export const EbookParamsSchema = z.object({
  params: z.object({
    locale: z.enum(LOCALE_ARRAY),
    slug: z.string(),
    chapter: z.string().optional(),
  }),
});
