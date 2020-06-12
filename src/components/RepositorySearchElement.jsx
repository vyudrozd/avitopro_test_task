import React from 'react';
import { Box, Flex } from 'reflexbox';
import { useHistory, useParams } from 'react-router-dom';
import Image from './Image';
import Span from './Span';
import StarsRating from './StarsRating';
import Media from '../services/Media';

export default function RepositorySearchElement({
  repository,
  number,
}) {
  const {
    owner: {
      avatar_url: avatarUrl,
      login,
    },
    name,
    description,
    stargazers_count: stargazersCount,
    forks,
    html_url: htmlUrl,
    updated_at: updatedAt,
  } = repository;

  const history = useHistory();
  const { page, search } = useParams();
  return (
    <Box
      css={`
              width: 100%;
              border: 2px solid black;
              border-radius: 10px;
              min-height: 100px;
              transition: border 0.2s;
              &:hover{
                  border: 1px solid black;
                  box-shadow: 0 5px 5px -5px rgba(0, 0, 0, .2);
              }
          `}
      mt={2}
    >
      <Media
        mobile={(
          <>
            <Box
              css={`
                    height: auto;
                    width: 100%;
                    object-fit: cover;
                    display: inline-block;
                `}
            >
              <Box
                as={Image}
                css={`
                        object-fit: cover;
                        padding: 10px;
                        height: auto;
                        width: 100%;
                        border-radius: 20px;
                    `}
                src={avatarUrl}
              />
            </Box>
            <Box
              css={`
                      padding: 10px;
                  `}
            >
              <Box
                as={Span}
                css={`
                          font-weight: bold;
                          a{
                            text-decoration: none;
                          }
                          
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
              <Box
                css={`
                        color: grey;
                    `}
              >
                Автор:
                {' '}
                {login}
              </Box>
              <div>
                <span>
                  {description}
                </span>
              </div>
              <Flex
                justifyContent="flex-end"
                alignItems="center"
              >
                <Box
                  css={`
                          cursor: pointer;
                          color: #3366BB;
                      `}
                  onClick={() => history.push(`/repos/${page}/${number}${search ? `/${search.split(' ').join('+')}` : ''}`)}
                >
                  <Span>
                    Подробнее
                  </Span>
                </Box>
                <StarsRating ratingCount={stargazersCount} forkCount={forks} />
              </Flex>
            </Box>
          </>
        )}
        tablet={(
          <>
            <Box
              css={`
                    height: 100px;
                    width: 100px;
                    object-fit: cover;
                    float: left;
                `}
            >
              <Box
                as={Image}
                css={`
                        object-fit: cover;
                        padding: 10px;
                        height: 100px;
                        width: 100px;
                        border-radius: 20px;
                    `}
                src={avatarUrl}
              />
            </Box>
            <Box
              css={`
                      padding: 10px;
                  `}
            >
              <Flex
                justifyContent="flex-end"
              >
                <Box
                  as={Span}
                  css={`
                          font-weight: bold;
                          a{
                            text-decoration: none;
                          }
                          
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
                <StarsRating ratingCount={stargazersCount} forkCount={forks} />
              </Flex>
              <Box
                css={`
                        color: grey;
                    `}
              >
                Автор:
                {' '}
                {login}
              </Box>
              <div>
                <span>
                  {description}
                </span>
              </div>
              <Flex
                justifyContent="flex-end"
              >
                <Box
                  css={`
                          cursor: pointer;
                          color: #3366BB;
                      `}
                  onClick={() => history.push(`/repos/${page}/${number}${search ? `/${search.split(' ').join('+')}` : ''}`)}
                >
                  <Span>
                    Подробнее
                  </Span>
                </Box>
              </Flex>
            </Box>
          </>
        )}
      />
    </Box>
  );
}
