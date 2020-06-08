import React from 'react';
import {Flex} from 'reflexbox';
import {useHistory, useParams} from 'react-router-dom';

const Button = ({className, children, onClick}) => (
    <button className={className} onClick={onClick}>
        {children}
    </button>
)

const Page = ({pageNum, currentPage, history, search}) => {
    return(
    <Flex
        as={Button}
        css={`
            color: ${pageNum === Number(currentPage) ? 'white' : '#6666ff'};
            ${pageNum === Number(currentPage) ? 'background-color: #6666ff;' : ''}
            border: 1px solid #6666ff;
            padding: 5px;
            width: 35px;
            height: 35px;
            cursor: pointer;
            &:hover{
                color: white;
                background-color: #6666ff;
            }
        `}
        onClick={() => history.push(`/${pageNum}${search ? `/${search}` : ''}`)}
        justifyContent="center"
    >
        {pageNum}
    </Flex>
)}

export default function Pagination({
    currentPage
}) {
    const history = useHistory();
    const {search} = useParams();
    return(
        <Flex
            flexDirection="row"
            css={`
                height: 100px;
            `}
        >
            <Page pageNum={1} currentPage={currentPage} history={history} search={search}/>
            <Page pageNum={2} currentPage={currentPage} history={history} search={search}/>
            <Page pageNum={3} currentPage={currentPage} history={history} search={search}/>
            <Page pageNum={4} currentPage={currentPage} history={history} search={search}/>
            <Page pageNum={5} currentPage={currentPage} history={history} search={search}/>
            <Page pageNum={6} currentPage={currentPage} history={history} search={search}/>
            <Page pageNum={7} currentPage={currentPage} history={history} search={search}/>
            <Page pageNum={8} currentPage={currentPage} history={history} search={search}/>
            <Page pageNum={9} currentPage={currentPage} history={history} search={search}/>
            <Page pageNum={10} currentPage={currentPage} history={history} search={search}/>
        </Flex>
    )
}