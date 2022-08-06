import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from 'components/Text';

import { trackEvent } from 'utils/analytics';

import { languages } from 'locales';

import {
  ArrowDownIcon,
  CurrentLanguageContainer,
  LanguageListContainer,
  LanguageSwitchContainer,
} from './styles';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const [showLangList, setShowLangList] = useState(false);

  const currentLanguage = useMemo(
    () => languages.find(lang => lang.name === i18n.resolvedLanguage),
    [i18n.resolvedLanguage],
  );

  return (
    <LanguageSwitchContainer
      onMouseEnter={() => setShowLangList(true)}
      onMouseLeave={() => setShowLangList(false)}
    >
      <CurrentLanguageContainer>
        <Text>{currentLanguage?.title}</Text>
        <ArrowDownIcon />
      </CurrentLanguageContainer>
      <LanguageListContainer show={showLangList}>
        {languages
          .filter(lang => lang.name !== i18n.resolvedLanguage)
          .map(lang => (
            <Text
              onClick={() => {
                trackEvent('language_switched', { lang: lang.name });
                i18n.changeLanguage(lang.name);
              }}
              key={lang.name}
            >
              {lang.title}
            </Text>
          ))}
      </LanguageListContainer>
    </LanguageSwitchContainer>
  );
};

export { LanguageSwitch };
