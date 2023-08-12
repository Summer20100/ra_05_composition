import Card from './Card/Card'

/** 
* Нижняя часть с информацией
*/
const NewsCard = ({news}) => {
  let setCard = news.map((el,ind) => <Card key={ ind } news={ el } /> )

  return (
    <div className="elment" style={{columnCount: '3', columnGap: '1rem', boxSizing: 'border-box'}}>
      { setCard }
    </div>
  )
}

export default NewsCard
