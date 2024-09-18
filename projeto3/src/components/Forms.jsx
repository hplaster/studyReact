import { useState } from "react"
import './Forms.module.css'

const Forms = (props) => {
    // Variáveis para armazenar as informações do form
    const [name, setName] = useState(props ? props.name : "")
    const [email, setEmail] = useState(props ? props.email : "")
    const [desc, setDesc] = useState(props ? props.desc : "")
    const [tipo, setTipo] = useState(props ? props.tipo : "")

    // Previne a atualização da Página
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(desc)
        console.log(tipo)
        setName("")
        setEmail("")
        setDesc("")
        setTipo("")
    }

    // Função para guardar o nome digitado
    const handleName = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                {/* Input com htmlFor */}
                <label htmlFor="name">Nome: </label>
                <input type="text" id="name" placeholder="Digite seu nome" onChange={handleName} value={name}/>

                {/* Label envolvendo o input */}
                <label>
                    <span>Email: </span>
                    <input type="email" name="email" placeholder="Digite seu email" onChange={ (e) => {setEmail(e.target.value) }} value={email}/>
                </label>

                {/* campo textarea */}
                <label>
                    <span>Descrição: </span>
                    <textarea name="descricao" placeholder="Se descreva a si mesmo" onChange={ (e) => {setDesc(e.target.value) }} value={desc}></textarea>
                </label>

                <label>
                    <span>Tipo de usuário:</span>
                    <select defaultValue={tipo} name="tipoU" onChange={ (e) => { setTipo(e.target.value) } } value={tipo}>
                        <option value="user">Usuário</option>
                        <option value="adm">Administrador</option>
                        <option value="client">Cliente</option>
                    </select>
                </label>

                <input type="submit" value="Enviar" />

            </form>
        </div>
    )
}

export default Forms;