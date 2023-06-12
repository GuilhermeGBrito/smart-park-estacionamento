import React, { useState } from 'react';
import styles from '../registroUsuario/RegistroU.module.css';

function RegistroU() {
  const [email, setEmail] = useState('');
  const [cnh, setCnh] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  async function handleRegistro(e) {
    e.preventDefault();
    console.log('Email:', email);
    console.log('CNH:', cnh);
    console.log('Nome:', nome);
    console.log('Senha:', senha);

    try {
      const response = await fetch('http://localhost:3333/smartpark/userinsert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nome,
          email: email,
          password: senha,
          CNH: cnh,
        }),
      });

    } catch (error) {
      console.error('Ocorreu um erro ao fazer login:', error);
    }
  }

  return (
    <div className={styles.registro}>
      <h2>Registro de Usuário</h2>
      <form onSubmit={handleRegistro}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>CNH:</label>
          <input
            type="text"
            value={cnh}
            onChange={(e) => setCnh(e.target.value)}
          />
        </div>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegistroU;
