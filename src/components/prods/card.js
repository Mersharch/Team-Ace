import '../../styles/card.css';


function Card() {
  return (
        <div className="card-container">
            <div className="prod-img">
            </div>
            <div className="prod-details">
                <h2 className="prod-name">prod-name</h2>
                <h3 className="prod-price">prod-price</h3>
            </div>
            <div className="atc-container">
                <button className="atc-button">add to cart + </button>
            </div>
        </div>
    );
}

export default Card;
