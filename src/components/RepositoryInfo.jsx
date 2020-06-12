import React from 'react';
import { Box, Flex } from 'reflexbox';
import { FaArrowLeft } from 'react-icons/all';
import { useParams, useHistory } from 'react-router-dom';
import Image from './Image';
import Span from './Span';
import StarsRating from './StarsRating';

const Table = ({ className, children }) => <table className={className}>{children}</table>;

export default function RepositoryInfo({
  repository = {},
  contributors = {},
}) {
  const {
    name,
    updated_at: updatedAt,
    html_url: htmlUrl,
    stargazers_count: stargazersCount,
    forks,
    description,
    language,
    owner: {
      avatar_url: avatarUrl,
      login,
      html_url: ownerUrl,
    } = {},
  } = repository;
  const history = useHistory();
  const { page, search } = useParams();
  return (
    <Box
      css={`
                padding: 10px;
                width: 100%;
                background-color: white;
            `}
    >
      <Box
        css={`
                    height: 150px;
                    width: 100%;
                `}
      >
        <Flex
          css={`
                        height: 25px;
                        cursor: pointer;
                        color: #3366BB;
                        max-width: 120px;
                    `}
          alignItems="center"
          onClick={() => history.push(`/${page}${search ? `/${search}` : ''}`)}
        >
          <Span>
            <FaArrowLeft size="1em" />
            {' '}
            Вернуться
          </Span>
        </Flex>
        <Box
          css={`
                        border:2px solid black;
                        border-radius: 10px;
                        padding: 0 10px 10px 10px;
                    `}
        >
          <Flex
            flexDirection="row"
            justifyContent="space-between"
          >
            <Box>
              <Box
                css={`
                                    padding: 10px;
                                `}
              >
                <Span>Repository: </Span>
                <Box
                  as={Span}
                  css={`
                                        font-weight: bold;
                                    `}
                >
                  <a href={htmlUrl}>{name}</a>
                </Box>
                {' '}
                <Box
                  as={Span}
                  css={`
                                        color: grey;
                                    `}
                >
                  —
                  {' '}
                  {updatedAt}
                </Box>
              </Box>
              <div>
                <span>
                  {description}
                </span>
              </div>
            </Box>
            <Box
              css={`
                                min-width: 150px;
                            `}
            >
              <Box
                css={`
                                object-fit: cover;
                            `}
              >
                <Box
                  as={Image}
                  css={`
                                        height: 150px;
                                        width: 150px;
                                        padding: 10px;
                                        border-radius: 20px;
                                `}
                  src={avatarUrl}
                />
              </Box>
              <Flex
                justifyContent="flex-end"
                css={`
                                    color: grey;
                                `}
              >
                Автор:
                {' '}
                <Box
                  css={`
                                        cursor: pointer;
                                        color: #3366BB;
                                        a{
                                            text-decoration: none;
                                        }
                                    `}
                >
                  <a href={ownerUrl}>
                    {login}
                  </a>
                </Box>
              </Flex>
              <Flex
                justifyContent="flex-end"
              >
                {language ? (
                  <Span>
                    language:
                    {' '}
                    {language}
                  </Span>
                ) : null}
              </Flex>
              <Box
                css={`
                        float: right;
                    `}
              >
                <StarsRating ratingCount={stargazersCount} forkCount={forks} />
              </Box>
            </Box>
          </Flex>
          <Box
            as={Table}
            css={`
                            width: 100%;
                            tr{
                                background-color: #fff;
                                border-top: 1px solid #c6cbd1;
                                &:nth-child(2n){
                                    background-color: #f6f8fa;
                                }
                            }
                            th{
                                padding: 6px 13px;
                                border: 1px solid #dfe2e5;
                            }
                            td{
                                padding: 6px 13px;
                                border: 1px solid #dfe2e5;
                            }
                        `}
          >
            <thead>
              <tr>
                <th>№</th>
                <th>Login</th>
                <th>contributions</th>
              </tr>
            </thead>
            <tbody>
              {contributors.length && contributors.map(
                ({ html_url: contributorUrl, login: contributorLogin, contributions }, index) => (
                  <tr key={`table${contributorLogin}`}>
                    <th>{index}</th>
                    <td>
                      <Box
                        as={Span}
                        css={`
                            cursor: pointer;
                            color: #3366BB;
                            a{
                                text-decoration: none;
                            }
                        `}
                      >
                        <a href={contributorUrl}>{contributorLogin}</a>
                      </Box>
                    </td>
                    <td>{contributions}</td>
                  </tr>
                ),
              )}
            </tbody>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
