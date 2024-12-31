import { clsx, type ClassValue } from 'clsx';
import { format, parseISO } from 'date-fns';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sortEbooks<T extends { date: string }>(posts: T[]) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
}

export function isKey<T extends object>(x: T, k: PropertyKey): k is keyof T {
  return k in x;
}

export const objectKeys = <T extends object>(obj: T) => {
  return Object.keys(obj) as Array<keyof T>;
};

export const formatPathname = (pathname: string, locale = 'en') =>
  `/${locale}${pathname}`;

export const formatDate = (dateString: string, options = 'MMMM dd, yyyy') => {
  const date = parseISO(dateString);

  return format(date, options);
};
