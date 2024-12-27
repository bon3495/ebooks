import { z } from 'zod';

import { LOCALE_ARRAY } from '@/constants/globals';

export const EbookParamsSchema = z.object({
  params: z.object({
    slug: z.array(z.string()),
    locale: z.enum(LOCALE_ARRAY),
  }),
});
