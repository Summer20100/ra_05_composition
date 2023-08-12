import SearchBar from './SearchBar/SearchBar'

/** 
*Ввод и аоиск чего угодно
*/
const Search = ({content}) => {
  return (
    <div className="elment" >
      <SearchBar content={ content }/>
      
      <div style={{margin: '20px 0'}}>
        <img alt="Yandex" src="#" />
        <input placeholder='найдётся всё' />
        <input type='button'value='Найти' />
      </div>
      
      Найдётся всё. Например, <span style={{color: 'grey'}}> фаза луны сегодня</span>
    </div>
  )
}

export default Search 