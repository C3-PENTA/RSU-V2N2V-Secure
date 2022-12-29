import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ActionIcon, Group, Header, Tooltip, useMantineColorScheme } from '@mantine/core';

import { defaultLanguage, languageConfig } from '@/config/system';
import i18n from '@/config/i18n';
import { Path } from '@/config/path';

import { Sun, MoonStars } from 'tabler-icons-react';
import { ReactComponent as Logo } from '@/assets/icons/Logo_dark.svg';
import { ReactComponent as LogoDark } from '@/assets/icons/Logo.svg';

import './AppHeader.scss';

export const AppHeader = () => {
  const { t } = useTranslation();

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const [toggleLang, setToggleLang] = useState(
    localStorage.getItem('i18nextLng') || defaultLanguage,
  );

  /**
   * Currently support only 2 languages.
   * Use "Select" component instead of "ActionIcon" and
   * update languageConfig.lang value to map with remaining attributes if needed.
   *
   * ref: https://mantine.dev/core/select/
   *
   * @note Remove the "d-none" class of ActionIcon to show this feature.
   */
  const renderToggleLang = languageConfig.map((langConfig) => (
    <Tooltip key={langConfig.lang} withArrow label={langConfig.tooltip}>
      <ActionIcon
        className="header__lang d-none ml-1"
        size="xl"
        radius="xl"
        onClick={() => setToggleLang(langConfig.lang)}
        hidden={langConfig.lang === toggleLang}
      >
        <img src={langConfig.img} alt={langConfig.alt} />
      </ActionIcon>
    </Tooltip>
  ));

  useEffect(() => {
    i18n.changeLanguage(toggleLang);
  }, [toggleLang]);

  useEffect(() => {
    if (i18n.resolvedLanguage === defaultLanguage && toggleLang !== defaultLanguage) {
      setToggleLang(defaultLanguage);
    }
  }, []);

  return (
    <Header height={60} className="px-3">
      <Group sx={{ height: '100%' }} px={20} position="apart">
        <Link className="header__logo" to={Path.HOMEPAGE}>
          {isDarkMode ? <LogoDark /> : <Logo />}
        </Link>
        <div className="d-flex justify-between align-center">
          <Tooltip withArrow label={t('common.theme.' + colorScheme)}>
            <ActionIcon
              variant="outline"
              size="lg"
              radius="xl"
              color={isDarkMode ? 'yellow' : ''}
              onClick={() => toggleColorScheme()}
            >
              {isDarkMode ? <MoonStars size={18} /> : <Sun size={18} />}
            </ActionIcon>
          </Tooltip>
          {renderToggleLang}
        </div>
      </Group>
    </Header>
  );
};
