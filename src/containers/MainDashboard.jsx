import React from 'react';
import RepositoriesSearch from "../components/RepositoriesSearch";
import {getRepositoriesByPage, getPopularRepositoriesByPage} from './dataLoaders/repositories';

export default function MainDashboard({
    page,
    searchString
}) {
    return(
        <RepositoriesSearch
            getPopularRepositoriesByPage={getPopularRepositoriesByPage}
            getRepositoriesByPage={getRepositoriesByPage}
            currentPage={page}
            searchString={searchString}
        />
    )
}