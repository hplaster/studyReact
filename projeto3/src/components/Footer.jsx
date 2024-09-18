import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <nav>
        {/* Se não for NavBar utilize o Link */}
        <Link to="/"> Home </Link> 
        <NavLink to="/historia"> História </NavLink>
        <NavLink to="/cadastro"> Cadastro </NavLink>
    </nav>
  )
}

export default Footer;

// class artes {
//     constructor(musica, livros) {
//         this.musica = musica;
//         this.livros = livros;
//     }
// }
// let artistas = new artes('leão', 'narnia')
// console.log(artistas)

// class sim {
//     constructor(pode){
//         this.sims = positivo
//     }

//     const sim =  nao
// }
