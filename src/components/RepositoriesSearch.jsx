import React, {useState, useContext, useEffect} from 'react';
import {ThemeContext} from "styled-components";
import {Box,Flex} from 'reflexbox';
import SearchInput from "./SearchInput";
import RepositorySearchElement from "./RepositorySearchElement";
import Pagination from "./Pagination";
import {useLocation} from 'react-router-dom';

export default function RepositoriesSearch({
    searchString = "",
    currentPage = 1,
    getRepositoriesByPage,
    getPopularRepositoriesByPage
}) {
    const [searchInput, setSearchInput] = useState('');
    const [repositories, setRepositories] = useState(undefined);
    const location = useLocation();
    const theme = useContext(ThemeContext);
    useEffect(() => {
        async function assignRepositories(){
            const response = searchString === "" ? await getPopularRepositoriesByPage({page: currentPage})
                : await getRepositoriesByPage({page: currentPage, search: searchString});
            const data = await response.json();
            setRepositories(data.items);
        }
        assignRepositories();
    }, [currentPage, getPopularRepositoriesByPage, getRepositoriesByPage, location])
    return(
        <>
        <Flex
            css={`
                width: 100%;
            `}
            justifyContent={'center'}
        >
            <Box
                width={[1, theme.sizes.pc]}
            >
                <SearchInput
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                />
                <Box
                    mt={3}
                    css={`
                        padding: 10px;
                    `}
                >
                {repositories && repositories.map((repository, index) => {
                    return(
                        <RepositorySearchElement
                            repository={repository}
                            number={index + 1}
                            key={repository.id}
                        />
                    )}
                )}
                </Box>
                <Flex
                    justifyContent="center"
                >
                    <Pagination currentPage={currentPage} />
                </Flex>
            </Box>
        </Flex>
    </>
    )
}