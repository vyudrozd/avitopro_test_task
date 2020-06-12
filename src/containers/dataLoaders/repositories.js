import domain from '../../utils/const/domain';

const getPopularRepositoriesByPage = async ({ page = 1 }) => {
  const url = new URL(`${domain}/search/repositories`);
  const params = {
    q: 'forks:>=1000', sort: 'forks', page, per_page: '10',
  };
  url.search = new URLSearchParams(params).toString();
  return await fetch(url, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
};

const getRepositoriesByPage = async ({ page = 1, search }) => {
  const url = new URL(`${domain}/search/repositories`);
  const params = {
    q: search, sort: 'stars', page, per_page: '10',
  };
  url.search = new URLSearchParams(params).toString();
  return await fetch(url, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
};

const getRepositoryByPage = async ({ page = 1, search, number }) => {
  const url = new URL(`${domain}/search/repositories`);
  const params = {
    q: search, sort: 'stars', page: 10 * (page - 1) + number, per_page: '1',
  };
  url.search = new URLSearchParams(params).toString();
  return await fetch(url, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
};

const getPopularRepositoryByPage = async ({ page = 1, number }) => {
  const url = new URL(`${domain}/search/repositories`);
  const params = {
    q: 'forks:>=1000', sort: 'forks', page: 10 * (page - 1) + number, per_page: '1',
  };
  url.search = new URLSearchParams(params).toString();
  return await fetch(url, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
};

export {
  getPopularRepositoriesByPage,
  getRepositoriesByPage,
  getPopularRepositoryByPage,
  getRepositoryByPage,
};
