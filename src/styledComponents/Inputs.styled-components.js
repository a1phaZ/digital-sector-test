import styled from 'styled-components';

const Button = styled.button`
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 50px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
`

export const Input = styled.input`
  flex: 1 1 100%;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`

export const LinkButton = styled.button`
  background: none!important;
  border: none;
  padding: 0!important;
  /*optional*/
  font-family: arial, sans-serif;
  /*input has OS specific font-family*/
  color: #069;
  text-decoration: underline;
  cursor: pointer;
`

export const OpenModalButton = styled(Button)`
  margin: 8px 0;
`

export const AddButton = styled(Button)`
    
`

export const CloseModalButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover: {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`

export const InputLabel = styled.label`
`
