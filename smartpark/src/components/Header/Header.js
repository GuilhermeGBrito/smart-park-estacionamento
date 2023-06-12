import { Link } from 'react-router-dom';
import styles from '../Style/Header.module.css';

function Header() {
  return (
    <div className={styles.Header}>
      <h1>Navegação</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/estacionamento">Estacionamento</Link>
      <br />
      <Link to="/registrar">Registrar</Link>
      <br />
      <Link to="/sobre">Sobre nós</Link>
      <Link to="/login">Login</Link>
      <Link to="/registrousuario">Registro de usuário</Link>
    </div>
  );
}

export default Header;