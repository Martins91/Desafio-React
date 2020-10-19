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

const ProductUpdate = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [id, setId] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    updateProduct();
  }

  function updateProduct() {
    const bodyParameters = {
      id: id,
      name: name,
      description: description,
    };
    Api.put(`/product/${id}`, bodyParameters).then((response) => {
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
          <h2>Editar Produto</h2>
          <form onSubmit={handleSubmit}>
            <input
              value={id}
              type="text"
              placeholder="ID do Produto"
              onChange={(event) => setId(event.target.value)}
            />

            <label htmlFor="name"></label>
            <input
              id="name"
              type="text"
              value={name}
              placeholder="Nome do Produto"
              onChange={(event) => setName(event.target.value)}
            />

            <label htmlFor="description"></label>
            <input
              id="description"
              type="text"
              placeholder="Descrição do Produto"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <button type="submit">Editar Produto</button>
          </form>
          <h3>Selecione outra Opção</h3>

          <Content>
            <Link to="/ProductList">
              <strong>Listar</strong>
            </Link>
            <Link to="/ProductDelete">
              <strong>Deletar</strong>
            </Link>
            <Link to="/Home">
              <strong>Cadastrar</strong>
            </Link>
          </Content>
        </FirstColumn>
        <SecondColumn></SecondColumn>
      </FirstContent>
    </Container>
  );
};

export default ProductUpdate;
