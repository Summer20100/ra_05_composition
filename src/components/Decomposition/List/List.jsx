import ListItem from './ListItm/ListItm'
import CurrencyItem from './CurrencyItem/CurrencyItem'
import { NavLink } from 'react-router-dom'


/** 
* Новости дня и кем-то проплаченная реклама
*/
const List = ({list, advert, currency}) => {
  let setList = list.map(itm => <ListItem key={ itm.id } list={ itm }/> )
  let setCurrency = currency.map(itm => <CurrencyItem currency={ itm } />)
  
  
  return (
    <div className="elment" style={{display: 'flex', gap: '20px'}}>
      <div>
        { setList }
        <div style={{display: 'flex', gap: '10px', marginTop: '10px'}}>
          { setCurrency }
        </div>
      </div>
      
      <div>
        <img alt='IMG' src={ advert.img } />
        <NavLink to={ advert.link } >
          <div>{ advert.title }</div>
        </NavLink>
        <div>{ advert.text }</div>
        <div></div>
      </div>
      
    </div>
  )
}

export default List