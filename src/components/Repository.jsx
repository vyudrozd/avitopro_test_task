import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { Box, Flex } from 'reflexbox';
import { useLocation } from 'react-router-dom';
import RepositoryInfo from './RepositoryInfo';

export default function Repository({
  searchString = '',
  currentPage = 1,
  number,
  getRepositoryByPage,
  getPopularRepositoryByPage,
}) {
  const [repository, setRepository] = useState(undefined);
  const [contributors, setContributors] = useState(undefined);
  const location = useLocation();
  const theme = useContext(ThemeContext);
  useEffect(() => {
    async function assignRepositories() {
      const response = searchString === '' ? await getPopularRepositoryByPage({ page: currentPage, number })
        : await getRepositoryByPage({ page: currentPage, search: searchString, number });
      const data = await response.json();
      setRepository(data.items[0]);
    }
    assignRepositories();
  }, [currentPage, getPopularRepositoryByPage, getRepositoryByPage, location]);

  useEffect(() => {
    async function assignContributors() {
      if (repository) {
        const url = new URL(repository.contributors_url);
        const params = { page: 1, per_page: '10' };
        url.search = new URLSearchParams(params).toString();
        const response = await fetch(url, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });
        const data = await response.json();
        setContributors(data);
      }
    }
    assignContributors();
  }, [repository]);

  return (
    <>
      <Flex
        css={`
                    width: 100%;
                `}
        justifyContent="center"
      >
        <Box
          width={[1, theme.sizes.pc]}
        >
          <RepositoryInfo
            contributors={contributors}
            repository={repository}
          />
        </Box>
      </Flex>
    </>
  );
}
