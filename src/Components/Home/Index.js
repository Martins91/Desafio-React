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

const ProductCreate = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState('');
  const [manual, setManual] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    createProduct();
  };
  async function createProduct() {
    let path;
    await Api.post('/files', { file: logo }).then(
      (response) => {
        console.log(response);
        if (response.data.path) {
          path = response.data.path;
        } else {
          alert('Não foi possivél cadastrar');
        }
      },
      (err) => {
        console.log(err);
        alert(err);
      },
    );
    await Api.post('/Product', {
      name,
      description,
      logo: path,
    }).then(
      (response) => {
        console.log(response);
        if (response.data.id) {
          console.log(response);
        } else {
          alert('Não foi possivél cadastrar');
        }
      },
      (err) => {
        console.log(err);
        alert(err);
      },
    );
  }

  const loadLogo = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onloadend = function(e) {
      setLogo(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const loadManual = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onloadend = function(e) {
      setManual(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Container>
      <FirstContent>
        <FirstColumn>
          <h2>Cadastre seu Produto</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name"></label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Nome do Produto"
              value={name}
              required
              onChange={(event) => setName(event.target.value)}
            />

            <label htmlFor="descrição"></label>
            <input
              id="description"
              type="text"
              name="description"
              placeholder="Descrição do Produto"
              value={description}
              required
              onChange={(event) => setDescription(event.target.value)}
            />

            <label htmlFor="logo"></label>
            <input
              className={`custom-file-input input-logo ${logo && 'selected'}`}
              id="logo"
              type="file"
              accept="logo/*"
              name="logo"
              placeholder="Logo"
              required
              onChange={(event) => {
                loadLogo(event);
              }}
            />

            <label htmlFor="manual"></label>
            <input
              className={`custom-file-input input-manual ${manual &&
                'selected'}`}
              id="manual"
              type="file"
              accept="application/pdf"
              name="manual"
              placeholder="Logo"
              required
              onChange={(event) => {
                loadManual(event);
              }}
            />
            <button type="submit">Cadastrar Produto</button>
          </form>
          <h3>Selecione outra Opção</h3>

          <Content>
            <Link to="/ProductList">
              <strong>Listar</strong>
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

export default ProductCreate;
