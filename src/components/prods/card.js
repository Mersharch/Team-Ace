import '../../styles/card.css';


function Card(props) {
    const item = props.item;
  return (
        <div className="card-container">
            <div className="prod-img">
            </div>
            <div className="prod-details">
                <h2 className="prod-name">{item.name}</h2>
                <h3 className="prod-price">{item.price}</h3>
            </div>
            <div className="atc-container">
                <button className="atc-button">Add To Cart + </button>
            </div>
        </div>
    );
}

export default Card;
