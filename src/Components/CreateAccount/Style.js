import styled from 'styled-components';
import Imagem from '../../Assets/burger.jpg';

// EXTERNO

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #eead2d;
`;

// INTERNO

export const FirstContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  background-color: #eead2d;
  box-shadow: 4px 4px 4px;
`;

// COLUNA IMAGEM

export const SecondColumn = styled.div`
  display: flex;
  width: 70%;
  background-image: url(${Imagem});
  background-size: cover;
  background-repeat: no-repeat;
`;

/* COLUNA CREATE ACCOUNT*/

export const FirstColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  height: 100%;
  background-color: #eead2d;
  border-radius: 15px;
  box-shadow: 4px 3px 3px;
  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 50px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #005000;
    padding-bottom: 15px;
     {
      text-shadow: 0.1em 0.1em 0.05em #007d00;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    width: 55%;
  }
  label {
    display: flex;
    align-items: center;
    margin: 8px;
  }
  input {
    border-radius: 7px;
    border: none;
    outline: 0;
    margin-bottom: 8px;
    padding: 10px;
    ::-webkit-input-placeholder {
      color: #000;
      text-align: center;
    }
    ::-moz-placeholder {
      color: #000;
      text-align: center;
    }
  }
  button {
    border-radius: 7px;
    border: none;
    cursor: pointer;
    margin: 0 80px 0 80px;
    padding: 8px;
    margin-top: 15px;
    outline: 0;
  }
`;

// TERMS

export const Terms = styled.div`
  display: flex;
  align-items: center;
  label {
    font-size: 12px;
    padding-bottom: 8px;
    color: #005000;
  }
`;

// LOG IN

export const Log = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  padding-top: 40px;
  span {
    font-size: 12px;
    padding-right: 10px;
    padding-left: 60px;
    text-transform: uppercase;
    font-weight: bold;
  }
  a {
    font-size: 12px;
    color: #007d00;
    text-decoration: none;
    text-transform: uppercase;
  }
`;
