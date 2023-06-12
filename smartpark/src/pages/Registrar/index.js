import { useState } from "react"
import Registrar from '../Registrar/Register.module.css'

function Registro() {
    const [nome, setNome] = useState('')
    const [placa, setPlaca] = useState('')
    const [cor, setCor] = useState('')
    const [modelo, setModelo] = useState('')
    const [curinga, setCuringa] = useState({})

    async function onRegister(e) {
        e.preventDefault()
        setCuringa({
            nome: nome,
            placa: placa,
            cor: cor,
            modelo: modelo,
        })
        try {
            const response = await fetch('http://localhost:3333/smartpark/carinsert', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ "idUser":Number(nome),
            "placa":placa,
             "modelo":cor,
            "fabricante":modelo}),
            });

        } catch (error) {
            console.error('Ocorreu um erro ao fazer login:', error);
          }
    }

    return (
        <div className={Registrar.registrao}> 
            <form onSubmit={onRegister}>

                <label >ID Usuario</label><br />

                <input type="number" onChange={(e) => setNome(e.target.value)} /><br />

                <label >Placa</label><br />

                <input type="text" onChange={(e) => setPlaca(e.target.value)} /><br />

                <label>modelo</label><br />

                <input type="text" onChange={(e) => setCor(e.target.value)} /><br />

                <label >fabricante</label><br />
                <input type="text" onChange={(e) => setModelo(e.target.value)} /><br />

                <button type="submit">login</button>

            </form>
            <br />
            <br />
             <span>Id: {curinga.nome}</span><br />
            <span>Placa: {curinga.placa}</span><br />
            <span>Modelo: {curinga.cor}</span><br />
            <span>Fabricante: {curinga.modelo}</span><br />
        </div>
    )
}

export default Registro