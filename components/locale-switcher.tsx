import { useLocale, useTranslations } from 'next-intl';

import { LocaleSwitcherSelect } from '@/components/locale-switcher-select';
import { SelectGroup, SelectItem, SelectLabel } from '@/components/ui/select';
import { routing } from '@/i18n/routing';

export function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      <SelectGroup>
        <SelectLabel className="hidden xl:block">{t('label')}</SelectLabel>
        {routing.locales.map((cur) => {
          return (
            <SelectItem key={cur} value={cur}>
              {t('locale', { locale: cur })}
            </SelectItem>
          );
        })}
      </SelectGroup>
    </LocaleSwitcherSelect>
  );
}
