const Card = ({ collapse }) => {
  return (
    <div className={ collapse } >
      <div className="card card-body" style={{textAlign: 'start'}}>
        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </div>
  )
}

export default Card
  