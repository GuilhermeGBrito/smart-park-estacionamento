
import Estacionamento from "../Estacionamento/Estacionamento.module.css"
import { useState } from "react" ;

const Estaciona = () => {
  const capacidade = 5;



const [carrosEstacionados, setCarrosEstacionados] = useState([]);

const [placa, setPlaca] = useState('');

const[modelo, setModelo] = useState('');

const EstacionarC = () =>{
  if(carrosEstacionados.length >= capacidade) {
    console.log("O estacionamento está cheio")
  }
  else {
    const Carro = {placa, modelo};
    setCarrosEstacionados([...carrosEstacionados, Carro]);
    console.log(`O carro que possui a ${placa} foi estacionado.`)
    setPlaca('');
    setModelo('');
  }
  
};
const RemoverC = (placa) =>{
  const carrosNovos = carrosEstacionados.filter(Carro => Carro.placa !== placa);
  setCarrosEstacionados(carrosNovos) ;
  console.log(`O carro de placa ${placa} foi removido`);
  
};
const handleClickVaga = (e) => {
  const tdElement = e.target;

  if (tdElement.classList.contains(Estacionamento.Verde)) {
    tdElement.classList.remove(Estacionamento.Verde);
    tdElement.classList.add(Estacionamento.Laranja);
  } else if (tdElement.classList.contains(Estacionamento.Laranja)) {
    tdElement.classList.remove(Estacionamento.Laranja);
    tdElement.classList.add(Estacionamento.Verde);
  }
};


return(
  <body className={Estacionamento.Body}>
  <div className={Estacionamento.Vagass}>
   <header className={Estacionamento.Header}><h1>SmartPark</h1></header> 


   <main className={Estacionamento.Main}>

    <label htmlFor="placa">Placa: </label>
    <input placeholder="Insira o numero da placa:" type="text" id="placa" value={placa} onChange={(e) => setPlaca(e.target.value)}></input>

    <label htmlFor="modelo">Modelo: </label>
    <input placeholder="Insira o Modelo:" type="text" id="modelo" value={modelo} onChange={(e) => setModelo(e.target.value)}></input>
  <button onClick={EstacionarC}> Estacionar </button>

  <br/>

  </main>
  <footer className={Estacionamento.Footer}>
  <table className={Estacionamento.Table}>
    <thead className={Estacionamento.Thead}>
      <tr>
        <th>Placa</th> 
        <th>Modelo</th>
   
      </tr>
    </thead>

    <br></br>

    <tbody className={Estacionamento.Tbody}>
      {carrosEstacionados.map(carro => (
        <tr key={carro.placa}>
          <td>\\{carro.placa}\\</td>
          <td> {carro.modelo}</td>
          <td><button className={Estacionamento.Remover} onClick={() => RemoverC(carro.placa) -1}> Remover</button>
          </td>

        </tr>
      ))}

    </tbody>

  </table>

  </footer>
</div>

<div className={`${Estacionamento.Vagass} vaga`}>
<table className={Estacionamento.Table}>
  <tbody>
    <tr>
      <td className={`${Estacionamento.Vaga} ${Estacionamento.Verde}`} onClick={handleClickVaga}>vaga1</td>
    </tr>
    <tr>
      <td className={`${Estacionamento.Vaga} ${Estacionamento.Vermelha}`}>vaga2</td>
    </tr>
    <tr>
      <td className={`${Estacionamento.Vaga} ${Estacionamento.Vermelha}`}>vaga3</td>
    </tr>
    <tr>
      <td className={`${Estacionamento.Vaga} ${Estacionamento.Verde}`} onClick={handleClickVaga}>vaga4</td>
    </tr>
  </tbody>
</table>



</div>


</body>
);
};





export default Estaciona


