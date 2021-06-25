import React, {useReducer} from "react";
import {Form, FormField, Modal, ModalContent} from "../../styledComponents/Containers.styled-components";
import {
  AddButton,
  CloseModalButton,
  FormInput,
  InputLabel
} from "../../styledComponents/Inputs.styled-components";

const initialState = {
  title: '',
  url: '',
  category: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FIELD_CHANGE': {
      return {
        ...state,
        [action.payload.field]: action.payload.value
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

const ModalPage = ({showModal, setShowModal, addLink}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function onFieldChange(e) {
    dispatch({type: 'FIELD_CHANGE', payload: {field: e.currentTarget.id, value: e.currentTarget.value}});
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
          </FormField>
          <AddButton>Добавить ссылку</AddButton>
        </Form>

      </ModalContent>
    </Modal>
  )
}

export default ModalPage;
