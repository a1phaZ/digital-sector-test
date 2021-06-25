import React, {useEffect, useState, useLayoutEffect, useCallback} from 'react';
import useLocalStorage from "./hooks/useLocalStorage";
import {Container, Content, HeaderContainer, Sidebar} from "./styledComponents/Containers.styled-components";
import LinksList from "./components/LinksList/LinksList.component";
import FilterBar from "./components/FilterBar/FilterBar.component";
import SearchForm from "./components/SearchForm/SearchForm.component";
import filterData from "./handlers/filterData";
import {OpenModalButton} from "./styledComponents/Inputs.styled-components";
import ModalPage from "./components/Modal/Modal.component";

const mock = [{
  title: 'styled-component',
  url: 'https://styled-components.com/',
  category: 'css'
}, {
  title: 'ReactJS',
  url: 'https://ru.reactjs.org/',
  category: 'js framework'
}, {
  title: 'Artemiy Zebzeev',
  url: 'https://github.com/a1phaZ',
  category: 'developer'
}, {
  title: 'Vue.js',
  url: 'https://vuejs.org/',
  category: 'js framework'
}, {
  title: 'Google',
  url: 'https://www.google.com/',
  category: 'search'
},];

function App() {
  const [links, setLinks] = useLocalStorage('links');
  const [filteredLinks, setFilteredLinks] = useState(() => links);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (links) return;
    setLinks(mock);
  }, [links, setLinks]);

  useLayoutEffect(() => {
    if (!filter && !search) return setFilteredLinks(links);
    if (filter) setFilteredLinks(filterData(links, 'category', filter));
    if (search) setFilteredLinks(filterData(filterData(links, 'category', filter), 'title', search));
  }, [links, filter, search]);

  function onFilterClick(str) {
    setFilter(str);
  }

  function onSearch(e) {
    setSearch(e.currentTarget.value);
  }

  const onModalToggle = useCallback(() => {
    return () => {
      if (!showModal) window.addEventListener('click', closeModalByWindow());
      if (showModal) window.removeEventListener('click', closeModalByWindow());
      setShowModal(!showModal);
    }
  }, [showModal]);

  function closeModalByWindow() {
    return (e) => {
      const modal = document.getElementById('add-modal');
      if (e.target === modal) setShowModal(false);
    }
  }

  function addLink(formData) {
    setLinks([...links, formData]);
  }

  return (
    <Container className="App">
      <ModalPage showModal={showModal} setShowModal={setShowModal} addLink={addLink}/>
      <HeaderContainer className={'header'}>
        <SearchForm onSearch={onSearch}/>
        <OpenModalButton onClick={onModalToggle()}>Добавить ссылку</OpenModalButton>
      </HeaderContainer>
      <Sidebar className={'filter-bar'}>
        <FilterBar data={links} onFilter={onFilterClick}/>
      </Sidebar>
      <Content className={'content'}>
        <Container>
          <LinksList data={filteredLinks}/>
        </Container>
      </Content>
    </Container>
  );
}

export default App;
