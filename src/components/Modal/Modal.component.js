import React, {useReducer, useState} from "react";
import {Form, FormField, Modal, ModalContent} from "../../styledComponents/Containers.styled-components";
import {
  AddButton,
  CloseModalButton,
  FormInput, FormSelect, InputError,
  InputLabel
} from "../../styledComponents/Inputs.styled-components";
import {generateKey} from "../../handlers/generateKey";

const initialState = {
  title: '',
  url: '',
  category: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FIELD_CHANGE': {
      const { field, value } = action.payload;
      return {
        ...state,
        [field]: value
      }
    }
    case 'CLEAR': {
      return {
        title: '',
        url: '',
        category: ''
      }
    }
    default:
      return state;
  }
}

const ModalPage = ({showModal, setShowModal, addLink, data}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [urlValid, setUrlValid] = useState(false);

  function onFieldChange(e) {
    const { id, value } = e.currentTarget;
    console.log(id, value);
    dispatch({type: 'FIELD_CHANGE', payload: {field: id, value: value}});
    if (id === 'url') {
      setUrlValid(!!validateUrl(value));
    }
  }

  function validateUrl(url) {
    return url.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
  }

  function clearForm() {
    dispatch({type: 'CLEAR'});
  }

  function onSubmit(e) {
    e.preventDefault();
    addLink(state);
    clearForm();
    setShowModal(false);
  }

  return (
    <Modal showModal={showModal} id={'add-modal'}>
      <ModalContent className={'add-modal-content'}>
        <CloseModalButton onClick={() => setShowModal(false)}>X</CloseModalButton>
        <Form onSubmit={onSubmit}>
          <FormField>
            <InputLabel htmlFor={'title'}>Название</InputLabel>
            <FormInput id={'title'} placeholder={'Название'} value={state.title} onChange={onFieldChange} required/>
          </FormField>
          <FormField>
            <InputLabel htmlFor={'url'}>Адрес</InputLabel>
            <FormInput id={'url'} placeholder={'Адрес'} value={state.url} onChange={onFieldChange} required/>
            {(state.url && !urlValid) && <InputError>Ошибка в url адресе</InputError>}
          </FormField>
          <FormField>
            <InputLabel htmlFor={'title'}>Категория</InputLabel>
            <FormSelect id={'category'} placeholder={'Название'} value={state.category} onChange={onFieldChange} required>
              {data.map(category => <option key={generateKey('option')}>{category}</option>)}
            </FormSelect>
          </FormField>
          <AddButton disabled={!state.title || !state.url || !urlValid}>Добавить ссылку</AddButton>
        </Form>

      </ModalContent>
    </Modal>
  )
}

export default ModalPage;
