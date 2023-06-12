import Login from '../login/Login.module.css';
import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3333/smartpark/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data);
      if (data.error) {
        setLoginError('Login inválido');
      } else {
        setLoginError('Bem-vindo ' + data.name);
      }
    } catch (error) {
      console.error('Ocorreu um erro ao fazer login:', error);
    }
  };

  return (
    <div className={Login.LoginForm}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
      <br />
      {loginError && <p>{loginError}</p>}
    </div>
  );
};

export default LoginForm;
