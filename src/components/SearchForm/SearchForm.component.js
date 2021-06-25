import React from 'react';
import {SearchInput} from "../../styledComponents/Inputs.styled-components";

const SearchForm = ({onSearch}) => {
  return (
    <SearchInput placeholder={'Поиск'} onChange={onSearch}/>
  )
}

export default SearchForm;
