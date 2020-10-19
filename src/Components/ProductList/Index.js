import React, { useState, useEffect } from 'react';
import Api from '../../Api';
import { Link } from 'react-router-dom';
import {
  Container,
  FirstColumn,
  FirstContent,
  SecondColumn,
  Card,
  Content,
} from './Style';

const List = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    Api.get('/product').then((response) => {
      if (response.statusText === 'OK') {
        setProductList(response.data);
      } else {
        alert('Produtos não encontrado');
      }
    });
  }

  return (
    <Container>
      <FirstContent>
        <FirstColumn>
          <h2>Lista de Produtos</h2>

          {productList.map((list) => {
            return (
              <Card>
                <span>Nome: {list.name}</span>
                <br />
                <br />
                <span>descrição: {list.description}</span>
              </Card>
            );
          })}
          <h3>Selecione outra Opção</h3>
          <Content>
            <Link to="/Home">
              <strong>Cadastrar</strong>
            </Link>
            <Link to="/ProductDelete">
              <strong>Deletar</strong>
            </Link>
            <Link to="/ProductUpdate">
              <strong>Alterar</strong>
            </Link>
          </Content>
        </FirstColumn>
        <SecondColumn></SecondColumn>
      </FirstContent>
    </Container>
  );
};
export default List;
