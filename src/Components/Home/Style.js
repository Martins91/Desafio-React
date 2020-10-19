import styled from 'styled-components';
import Imagem from '../../Assets/burger.jpg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #eead2d;
`;
export const FirstContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #eead2d;
  box-shadow: 4px 4px 4px;
`;
export const FirstColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  height: 100%;
  background-color: #eead2d;
  box-shadow: 4px 3px 3px;
  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 50px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #005000;
    padding-bottom: 15px;
     
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

  .custom-file-input {
    /* width: 350px; */
    padding: 0;
  }
  .custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
  }
  .custom-file-input::before {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: #000;
    background: #eee;
    border-radius: 3px;
    cursor: pointer;
  }
  .custom-file-input:hover::before {
    color: white;
    background-color: #007d00;
  }
  .input-manual::before {
    content: 'Carregar manual';
  }
  .input-logo::before {
    content: 'Carregar logo';
  }
  .selected::before {
    content: 'Arquivo selecionado';
    color: white;
    background-color: #005000;
  }

  h3 {
    margin: 0 80px 0 80px;
    padding: 8px;
    margin-top: 15px;
    outline: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #005000;
    padding-bottom: 15px; 
    text-shadow: 0.1em 0.1em 0.05em #007d00;      
  
`;

export const SecondColumn = styled.div`
  display: flex;
  width: 70%;
  background-image: url(${Imagem});
  background-size: cover;
  background-repeat: no-repeat;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  a {
    padding: 10px;
    color: green;
  }
`;
