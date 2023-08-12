const Card = ({state}) => {
  let { title, article, nameBtn } = state
  return (
    <div className="card-body">
      <h5 className="card-title">{ title }</h5>
      <p className="card-text">{ article }</p>
      <a href="#" className="btn btn-primary">{ nameBtn }</a>
    </div>
  )
}

export default Card
