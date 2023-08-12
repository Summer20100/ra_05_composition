/** 
* Набор данных информации
*/
const Card = ({news}) => {
  let { title, text } = news

  let setText = text.map(el => <div>{ el }</div> )

  return (
    <div>
      <div>{ title }</div>
      <div>{ setText }</div>
    </div>
  )
}

export default Card
