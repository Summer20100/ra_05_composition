import { NavLink } from 'react-router-dom'

/** 
* Проплаченая "ненавязчивая" реклама
*/

const Advert = ({advert}) => {
  let { img, link } = advert
  
  return (
    <div className="elment">
      <NavLink to={ link } >
        <img alt='IMG ADVERTISING' src={ img } />
      </NavLink>
    </div>
  )
}

export default Advert 
