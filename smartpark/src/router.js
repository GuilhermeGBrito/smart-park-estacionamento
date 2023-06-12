import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';


import Home from './pages/Home';
import Estacionamento from './pages/Estacionamento';
import Header from './components/Header/Header';
import Registrar from './pages/Registrar';
import SobreNos from './pages/AboutUs';
import Login from './pages/login';
import RegistroU from './pages/registroUsuario';

function RouterApp() {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/estacionamento" element={<Estacionamento />} />
                <Route path="/registrar" element={<Registrar/>}/>
                <Route path='/sobre' element={<SobreNos/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path='/registrousuario' element={<RegistroU/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default RouterApp;