import './App.css';
import {useState, useEffect} from 'react';

const url = "http://localhost:5000/alunos"

function App() {
  const [alunos, setAlunos] = useState([])

  //Variáveis para o novo aluno
  const [nome, setNome] = useState("")
  const [turma, setTurma] = useState([])
  const [ano, setAno] = useState()

  const [loading, setLoading] = useState(false)

  //Função que adiciona os alunos após o clique
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const aluno = {nome, turma, ano}
    
    // Envia a requisição com os dados do aluno
    const res = await fetch(url, {
      method:"POST",
      headers: {"Content-type": "application-json"},
      body: JSON.stringify(aluno)
    })

    // Atualiza a lista de alunos na tela do cliente
    const alunoAdicionado = await res.json()
    setAlunos((prevAlunos) => [...prevAlunos, alunoAdicionado])
    setNome("")
    setTurma("")
    setAno("")
  }


  //Buscar dados da API
  useEffect( () => {
    async function fetchData() {
      setLoading(true)

      //Busca os dados
      const res = await fetch(url)
      
      //Converte a resposta para json
      const data = await res.json()

      setAlunos(data);

      setLoading(false)
    }
    fetchData()
    //console.log(alunos)
  }, [])

  return (
    <div className="App">
      
      <div className='add-aluno'>
        <h1>Cadastrar Aluno</h1>
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
            <input type="number" value={ano} name='ano' onChange={(e) => {setAno(Number(e.target.value))}}/>
          </label>
          <input type="submit" value="Adicionar" className='btn'/>
        </form>
      </div>

      <div className='lista-alunos'>
        <h1>Lista de Alunos</h1>
        {loading && <h3>Carregando lista...</h3>}
        {!loading &&
        <ul>
          {alunos.map( (aluno) => (
            <li key={aluno.id}>
              Aluno: {aluno.nome} - Turma: {aluno.turma} - Ano: {aluno.ano_escolar}
            </li>
          ))}
        </ul>}
      </div>
      
    </div>
  );
}

export default App;
