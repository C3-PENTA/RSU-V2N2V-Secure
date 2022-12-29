import { paginationConfig } from '@/config/system';
import { IPaginationData } from '@/interface/interfaceCommon';
import { renderPaginationInfo } from '@/util/common';
import { safeAnyToNumber } from '@/util/primitiveHandle';
import { Loader, Pagination, Select } from '@mantine/core';
import { UseForm } from '@mantine/hooks/lib/use-form/use-form';
import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import './PaginationList.scss';

export const PaginationList = <T extends IPaginationData>({
  fetchingState,
  paginationData,
  filterForm,
}: {
  fetchingState: {
    isFetching: boolean;
    setIsFetching: Dispatch<SetStateAction<boolean>>;
  };
  paginationData?: IPaginationData;
  filterForm: UseForm<T>;
}) => {
  const { t } = useTranslation();

  return (
    <div className="pagination d-flex align-center gap-3">
      <div className="pagination__info">
        {fetchingState.isFetching ? (
          <Loader variant="dots" />
        ) : (
          renderPaginationInfo(paginationData)
        )}

  );
};
