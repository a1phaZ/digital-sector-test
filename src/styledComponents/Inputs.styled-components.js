import styled from 'styled-components';

const Button = styled.button`
  font-size: 1rem;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 50px 13px;
  outline: 0;
  border: 1px solid #cacaca;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
`

export const Input = styled.input`
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px;
  outline: 0;
  border: 1px solid #cacaca;
  cursor: text;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
`

export const LinkButton = styled.button`
  background: none!important;
  border: none;
  padding: 0!important;
  font-family: arial, sans-serif;
  color: #069;
  text-decoration: ${props => props.active ? 'underline' : 'none'};
  cursor: pointer;  
  h2 {
    font-weight: ${props => props.active ? 800 : 200}!important;
  }
`

export const SearchInput = styled(Input)`
  flex-grow: 1;
  font-size: 1rem;
  font-weight: 200;
  margin-bottom: 1rem;
  @media(min-width: 768px) {
    margin-bottom: 0;
    margin-right: 1rem;
  }
`

export const FormInput = styled(Input)`
  flex: 1 1 100%;
  width: 100%;
  padding: 12px 20px;
  margin: 0.5rem 0 1rem 0;
  box-sizing: border-box;
`

export const OpenModalButton = styled(Button)`
  background-color:#17a2b8;
  color: #fff;
  @media(min-width: 768px) {
    width: auto;
  }
`

export const AddButton = styled(Button)`
  background-color: #28a745;
  color: #fff;
`

export const CloseModalButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover: {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`

export const InputLabel = styled.label`
`
