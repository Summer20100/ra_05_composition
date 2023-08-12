/** 
* Цена денег на дату (котирорвки основной валюты)
*/
const CurrencyItem = ({ currency }) => {
  let { name, val } = currency
  return (
    <div style={{display: 'flex', gap: '5px', fontSize: '13px'}}>
      <div>{ name }</div>
      <div>{ val }</div>
    </div>
  )
}

export default CurrencyItem 