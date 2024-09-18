import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Mateus", "Marcos", "Lucas", "João", "Paulo"]);

    const [players] = useState([
        { id: 1, name:"Cristiano", number:7, country: "Portugal"},
        { id: 2, name:"Neymar", number:11, country: "Brasil" },
        { id: 3, name:"Messi", number:10, country: "Argentina" }
    ]);

    return (
        <div>
            <ul>                     {/* .map precisa de uma Key para funcionar */}
                {list.map( (item, index) => (<li key={index}> {item} </li>))}
            </ul>

            <ol>
                {players.map( (jogador) => (<li key={jogador.id}> {jogador.name} - Camisa {jogador.number} - Seleção: {jogador.country}</li>) )}
            </ol>
        </div>
    )
}

export default ListRender;