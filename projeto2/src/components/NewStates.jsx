import { useState } from "react"

const NewStates = () => {
    let valor = 10;

    const [number, setNumber] = useState(0);
    return (
        <div>
            {/* Variáveis Padrão */}
            <p>Valor: {valor}</p>
            <button onClick={() => {console.log(valor); valor = 20 }}>Mudar Valor</button>
            
            {/* Variáveis com UseState */}
            <p>Valor com useState: {number}</p>
            <button onClick={() => {setNumber(number + 15)}}>Mudar Valor</button>
        </div>
    )
}

export default NewStates;