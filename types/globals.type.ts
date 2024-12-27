import { SVGProps } from 'react';

import { LOCALE_TYPES } from '@/constants/globals';

export type LocaleType = typeof LOCALE_TYPES;
export type LocaleKey = keyof LocaleType;

export type IconProps = SVGProps<SVGSVGElement>;
