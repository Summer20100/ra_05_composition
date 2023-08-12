import { NavLink } from 'react-router-dom'

/** 
* Главная новость дня
*/
const Header = ({header}) => {
  let { title, date, url } = header
  return (
    <div className="elment" style={{display: 'flex', gap: '20px'}}>
      <NavLink to={ url } >
        <div>{ title }</div>
      </NavLink>
      <div>{ date }</div>
    </div>
  )
}

export default Header 