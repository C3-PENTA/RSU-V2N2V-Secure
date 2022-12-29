import dayjs from 'dayjs';
import { t } from 'i18next';
import { Tooltip } from '@mantine/core';

import { paginationConfig } from './system';
import { getCategoryConfig, getEventInfoTextOnly, renderEventInfo } from '@/helper/listEventHelper';
import { IListEventForm, IListEventTable } from '@/interface/interfaceListEvent';

export const filterFormInitVal: IListEventForm = {
  keyword: '',
  dateRange: [null, null],
  categoryID: ['1', '2', '3'],
  currentPage: 1,
  size: paginationConfig.pageSizePool[0],
};

