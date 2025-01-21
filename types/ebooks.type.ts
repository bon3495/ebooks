import { z } from 'zod';

import { EbookParamsSchema } from '@/schema/ebooks.schema';

export type EbookParams = z.infer<typeof EbookParamsSchema>;

type EbookType = {
  chapter?: string;
  permalink: string;
};

export interface ContentsNavProps extends EbookParams {
  ebooks: EbookType[];
}
