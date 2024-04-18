import "./trainingTile.css"

function TrainingTile({type,image,to}) {
  return (
    <a href = {to} className="training-tile-container" style={{background:`linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)),url(${image})`,backgroundPosition: "50% 50%"}}>
      
        <span className="training-type">{type}</span>
        
    </a>
  )
}

export default TrainingTile