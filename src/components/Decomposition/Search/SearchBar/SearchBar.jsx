/** 
* Набор типов отображения запросов
*/
const SearchBar = ({content}) => {
  let setEl = content.map((el, ind) => <input key={ ind } type='button' value={ el.title } style={{marginRight: '20px'}}/> )
  return (
    <div>
      { setEl }
    </div>
  )
}

export default SearchBar 