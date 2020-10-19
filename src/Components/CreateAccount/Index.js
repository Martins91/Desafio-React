import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Api from '../../Api';
import {
  Container,
  FirstContent,
  FirstColumn,
  Terms,
  Log,
  SecondColumn,
} from './Style';

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState('');
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    createUser();
  }

  function createUser() {
    Api.post('/users', { name: username, email, password }).then(
      (res) => {
        if (res.data.id) {
          history.push('/Login');
        } else {
          alert('It was not possible to register the user');
        }
      },
      (err) => {
        alert('E-mail already exists');
      },
    );
  }
  return (
    <Container>
      <FirstContent>
        <FirstColumn>
          <h2>Criar Conta</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="username"></label>

            <input
              id="username"
              type="text"
              placeholder="Nome"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />

            <label htmlFor="email"></label>
            <input
              id="email"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <label htmlFor="password"></label>
            <input
              placeholder="Senha"
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <Terms>
              <input
                id="checkbox"
                type="checkbox"
                value={checkbox}
                onChange={(event) => setCheckbox(event.target.value)}
              />
              <label htmlFor="checkbox">
                Concordo com os termos de usuário
              </label>
            </Terms>

            <button type="submit">Escreva-se</button>

            <Log>
              <span>já tem uma conta?</span>
              <Link to="/Login">
                <strong>Conecte-se</strong>
              </Link>
            </Log>
          </form>
        </FirstColumn>

        <SecondColumn></SecondColumn>
      </FirstContent>
    </Container>
  );
};

export default CreateAccount;
