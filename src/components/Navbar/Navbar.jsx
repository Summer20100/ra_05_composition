import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={ s.navbar }>
      <NavLink to='/cards'>
        <input type='button' className={ s.button } value='CARDS' />
      </NavLink>
      
      <NavLink to='/decomposition'>
        <input type='button' className={ s.button } value='DECOMPOSITION' />
      </NavLink>
      
      <NavLink to='/collapse'>
        <input type='button' className={ s.button } value='COLLAPSE' />
      </NavLink>    
    </div>
    
  )
}

export default Navbar 