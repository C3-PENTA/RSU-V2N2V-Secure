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

