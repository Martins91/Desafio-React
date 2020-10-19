import React, { useState } from 'react';
import Api from '../../Api';
import {
  Container,
  FirstContent,
  FirstColumn,
  SecondColumn,
  Content,
} from './Style';
import { Link } from 'react-router-dom';

const ProductDelete = () => {
  const [id, setId] = useState('');

  function deleteProduct() {
    Api.delete(`/product/${id}`).then((response) => {
      if (response.data.id) {
        alert('Item alterado com sucesso!');
      } else {
        alert('Campos incorretos!');
      }
    });
  }

  return (
    <Container>
      <FirstContent>
        <FirstColumn>
          <h2>Delete seu Produto</h2>

          <input
            type="text"
            name="name"
            placeholder="ID do Produto"
            value={id}
            required
            onChange={(event) => setId(event.target.value)}
          />

          <button onClick={deleteProduct}>Deletar Produto</button>
          <h3>Selecione outra Opção</h3>

          <Content>
            <Link to="/ProductList">
              <strong>Listar</strong>
            </Link>
            <Link to="/Home">
              <strong>Cadastrar</strong>
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

export default ProductDelete;
