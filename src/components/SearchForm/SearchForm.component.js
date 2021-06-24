import React from 'react';
import {Input} from "../../styledComponents/Inputs.styled-components";
import {HeaderContainer} from "../../styledComponents/Containers.styled-components";

const SearchForm = ({onSearch}) => {
  return (
    <HeaderContainer>
      <Input placeholder={'Поиск'} onChange={onSearch}/>
    </HeaderContainer>
  )
}

export default SearchForm;
