const Events = () => {
    const teste = (e) => {
        //console.log(e)
        console.log("Funcionou, o retorno")
    }
    return (
        <div>
            <button onClick={() => console.log("Funcionou")}>Clique aqui!</button>
            <br />
            <button onClick={teste}>Clique aqui, o Retorno!</button>
        </div>
    )
}

export default Events;