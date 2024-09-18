import { Link, NavLink } from 'react-router-dom'
import './NavBar.module.css'

const NavBar = () => {
  return (
    <nav>
        {/* Se não for NavBar utilize o Link */}
        <Link to="/"> Home </Link> 
        <NavLink to="/historia"> História </NavLink>
        <NavLink to="/cadastro"> Cadastro </NavLink>
    </nav>
  )
}

export default NavBar;