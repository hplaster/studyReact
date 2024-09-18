const TemplateExpressions = () => {
    let nome = "Miguel"
    let aluno = {
        nome:"Lil Peter",
        turma:"C",
        ano: "2"

    }

    return(
        <>
            <h1>Olá {nome}</h1>
            <h2>O aluno {aluno.nome} está na turma {aluno.turma}, do {aluno.ano} ano</h2>
        </>
    )
}
export default TemplateExpressions;