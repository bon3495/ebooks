import { SVGProps } from 'react';
import type { SpringOptions } from 'framer-motion';

import { LOCALE_TYPES } from '@/constants/globals';

export type LocaleType = typeof LOCALE_TYPES;
export type LocaleKey = keyof LocaleType;

export type IconProps = SVGProps<SVGSVGElement>;

export const springConfig: SpringOptions = {
  bounce: 0.1,
};
