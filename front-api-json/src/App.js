import './App.css';
import {useState, useEffect} from 'react';

const url = "http://localhost:5000/alunos"

function App() {
  const [alunos, setAlunos] = useState([])

  //Variáveis para o novo aluno
  const [nome, setNome] = useState("")
  const [turma, setTurma] = useState([])
  const [ano, setAno] = useState()

  //Função que adiciona os alunos após o clique
  const handleSubmit = async (e) => {

  }

  //Buscar dados da API
  useEffect( () => {
    async function fetchData() {
      //Busca os dados
      const res = await fetch(url)
      
      //Converte a resposta para json
      const data = await res.json()

      setAlunos(data);
    }
    fetchData()
    //console.log(alunos)
  }, [])

  return (
    <div className="App">
      <h1>Cadastrar Aluno</h1>
      
      <div className='add-aluno'>
        <form onSubmit={handleSubmit}>
          <label>
            Aluno:
            <input type="text" value={nome} name='nome' onChange={(e) => {setNome(e.target.value)}}/>
          </label>
          <label>
            Turma:
            <input type="text" value={turma} name='turma' onChange={(e) => {setTurma(e.target.value)}}/>
          </label>
          <label>
            Ano:
            <input type="text" value={ano} name='ano' onChange={(e) => {setAno(Number(e.target.value))}}/>
          </label>
          <input type="submit" value="Adicionar" className='btn'/>
        </form>
      </div>

      <h1>Lista de Alunos</h1>
      <ul>
        {alunos.map( (aluno) => (
          <li key={aluno.id}>
            Aluno: {aluno.nome} - Turma: {aluno.turma} - Ano: {aluno.ano_escolar}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
