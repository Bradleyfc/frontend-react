import React from 'react'
import {Link} from 'react-router-dom'

export const Header = () => {
  return (
    <nav>
        <div>
            <Link to = "/" > Lista de Registros</Link>
        </div>
        <div>
            <Link to = "/registro" > Registro de Usuarios</Link>
        </div>

    </nav>
  )
}
export default Header;