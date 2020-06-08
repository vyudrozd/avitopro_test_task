import React from 'react';
import Repository from "../components/Repository";
import {getRepositoryByPage, getPopularRepositoryByPage} from './dataLoaders/repositories';

export default function RepositoryDashboard({
  page,
  searchString,
  number,
}) {
    return(
        <Repository
            getPopularRepositoryByPage={getPopularRepositoryByPage}
            getRepositoryByPage={getRepositoryByPage}
            currentPage={page}
            searchString={searchString}
            number={number}
        />
    )
}