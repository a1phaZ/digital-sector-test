import React, {useReducer} from "react";
import {Form, FormField, Modal, ModalContent} from "../../styledComponents/Containers.styled-components";
import {AddButton, CloseModalButton, Input, InputLabel} from "../../styledComponents/Inputs.styled-components";

const initialState = {
  formData: {
    title: '',
    url: ''
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FIELD_CHANGE': {
      const {formData} = state;
      formData[action.payload.field] = action.payload.value;
      return {
        ...state,
        formData
      }
    }
    default: return state;
  }
}

const ModalPage = ({showModal, onModalToggle}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function onFieldChange(e) {
    dispatch({type: 'FIELD_CHANGE', payload: {field: e.currentTarget.id, value: e.currentTarget.value}});
  }

  return (
    <Modal showModal={showModal} id={'add-modal'}>
      <ModalContent className={'add-modal-content'}>
        <CloseModalButton onClick={onModalToggle()}>X</CloseModalButton>
        <Form>
          <FormField>
            <InputLabel htmlFor={'title'}>Название</InputLabel>
            <Input id={'title'} placeholder={'Название'} value={state.title} onChange={onFieldChange}/>
            <InputLabel htmlFor={'url'}>Адрес</InputLabel>
            <Input id={'url'} placeholder={'Адрес'} value={state.url} onChange={onFieldChange}/>
            <AddButton>Добавить ссылку</AddButton>
          </FormField>
        </Form>

      </ModalContent>
    </Modal>
  )
}

export default ModalPage;
