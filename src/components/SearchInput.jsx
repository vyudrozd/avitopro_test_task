import React from 'react';
import {useHistory} from 'react-router-dom'
import {FaSearch} from "react-icons/all";
import {Box} from 'reflexbox';

const Input = ({className, value, onChange }) => <input
    className={className}
    value={value}
    onChange={(e) => onChange(e.target.value)}
/>
const Button = ({className, onClick, children}) => (
    <button type="submit" className={className} onClick={onClick}>{children}</button>
)

export default function SearchInput({searchInput, setSearchInput}) {
    const history = useHistory();
    return(
        <form>
            <Box
                css={`
                    width:100%;
                    padding: 10px;
                    border-radius: 10px;
                    height: 40px;
                    position: relative;
                `}
            >
                <Box
                    as={Input}
                    css={`
                        width: 100%;
                        transition: 0.2s;
                        padding-left: 10px;
                        border: 1px solid grey;
                        border-radius: 10px;
                        height: 40px;
                        &:hover{
                            border: 1px solid lightblue;
                        }
                        &:focus{
                            outline: 0;
                        }
                    `}
                    value={searchInput}
                    onChange={setSearchInput}
                />
                <Box
                    as={Button}
                    onClick={() => {
                        history.push(`/1/${searchInput.trim().split(' ').join('+')}`)
                    }}
                    css={`
                        position: absolute;
                        top:10px;
                        right:10px;
                        height: 40px;
                        background-color: black;
                        border: 0;
                        border-radius: 0 10px 10px 0;
                        width: 100px;
                        color: white;
                        padding: 5px;
                        cursor: pointer;
                    `}
                >
                    Поиск
                    <FaSearch />
                </Box>
            </Box>
        </form>
    )
}