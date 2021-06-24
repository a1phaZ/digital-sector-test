import React from 'react';
import { List, ListItem } from "../../styledComponents/List.styled-components";
import {generateKey} from "../../handlers/generateKey";

const LinksList = ({data}) => {
  return (
    <List>
      {
        data.map(
          link =>
            <ListItem key={generateKey('link')}>
              <h2>{link.title}</h2>
              <a href={link.url}>{link.url}</a>
            </ListItem>
        )
      }
    </List>
  )
}

export default LinksList;
