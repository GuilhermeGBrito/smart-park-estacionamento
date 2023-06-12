import { useState } from "react"
import components  from '../Register.module.css'
function Register() {
    const [nome, setNome] = useState('')
    const [placa, setPlaca] = useState('')
    const [cor, setCor] = useState('')
    const [modelo, setModelo] = useState('')
    const [curinga, setCuringa] = useState({})

    function onRegister(e) {
        e.preventDefault()
        setCuringa({
            nome: nome,
            placa: placa,
            cor: cor,
            modelo: modelo,
        })
    }

    return (
        <div className={components.headera}>
            <form onSubmit={onRegister}>

                <label>Nome</label><br />

                <input type="text" onChange={(e) => setNome(e.target.value)} /><br />

                <label >Placa</label><br />

                <input type="text" onChange={(e) => setPlaca(e.target.value)} /><br />

                <label>Cor</label><br />

                <input type="text" onChange={(e) => setCor(e.target.value)} /><br />

                <label >Modelo Veículo</label><br />
                <input type="text" onChange={(e) => setModelo(e.target.value)} /><br />

                <button type="submit">login</button>

            </form>
            <br />
            <br />
            <span>Nome do usuario: {curinga.nome}</span><br />
            <span>Placa: {curinga.placa}</span><br />
            <span>Cor: {curinga.cor}</span><br />
            <span>Modelo: {curinga.modelo}</span><br />
        </div>
    )
}

export default Register