import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  font-size: 20px;
  justify-content: ${props => props.justifyContent};
`

export const HeaderContainer = styled.div`
  flex: 1;
  display: flex;
  padding: 1rem;
`

export const Content = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  position: relative;
`

export const Sidebar = styled.aside`
  flex: 0 1 300px;
  border-right: 1px solid black;
`

export const Modal = styled.div`
  display: none; 
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  ${props => props.showModal && css`
    display: block;
  `}
`

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto; 
  padding: 20px;
  border: 1px solid #888;
  width: 80%; 
`

export const Form = styled.form`
`

export const FormField = styled.div`
`
