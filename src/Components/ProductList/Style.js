import styled from 'styled-components';
import Imagem from '../../Assets/burger.jpg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #eead2d;
`;

export const FirstContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #eead2d;
  box-shadow: 4px 4px 4px #007d00;
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
  }
`;

export const SecondColumn = styled.div`
  display: flex;
  width: 70%;
  background-image: url(${Imagem});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Card = styled.div`
  padding: 5px;
  margin: 10px;
  text-decoration: none;
  height: 15%;
  width: 40%;
  background: #005000;
  border-color: #007d00;
  border-radius: 7px;
  box-shadow: 4px 3px 3px;

  span {
    font-size: 25px;
    color: #eead2d;
  }
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
