import { NavLink } from 'react-router-dom'

const ListItm = ({ list }) => {
  let { id, img,  title, link } = list
  return (
    <div style={{display: 'flex'}}>
      <img alt='ICO' src={ img } />
      <NavLink to={ link } >
        <div>{ title }</div>
      </NavLink>
    </div>
  )
}

export default ListItm 