import React from 'react';
import RepositoryDashboard from '../containers/RepositoryDashboard';

export default function RepositoryPage(props = {}) {
  const {
    match: {
      params: {
        page,
        search,
        number,
      } = {},
    } = {},
  } = props;
  return (
    <RepositoryDashboard
      page={page}
      searchString={search && search.split('+').join(' ')}
      number={number}
    />
  );
}
