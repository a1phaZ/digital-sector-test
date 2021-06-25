import React, {useState} from 'react';
import {List, ListItem} from "../../styledComponents/List.styled-components";
import {generateKey} from "../../handlers/generateKey";
import {LinkButton} from "../../styledComponents/Inputs.styled-components";

const FilterBar = ({data = [], onFilter}) => {
  const [filtered, setFiltered] = useState(false);

  function onFilterClick(e) {
    setFiltered(true);
    onFilter(e.currentTarget.dataset.filter);
  }

  function onFilterClear() {
    setFiltered(false);
    onFilter('')
  }

  return (
    <List className={'filter-bar'}>
      {
        data.map(
          ({category}) =>
            <ListItem
              key={generateKey('filter-bar')}
            >
              <LinkButton onClick={onFilterClick} data-filter={category}>
                <h2>{category}</h2>
              </LinkButton>
            </ListItem>
        )
      }
      {filtered && <ListItem>
        <LinkButton onClick={onFilterClear}>
          <h3>Сбросить фильтр</h3>
        </LinkButton>
      </ListItem>}
    </List>
  )
}

export default FilterBar;
