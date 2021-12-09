import { Link } from 'react-router-dom';
import '../styles/hair.css';
import Card from '../components/prods/card';




function Hair() {

  return (
    <div className="hair-div">
      

      <h1 className="hair">HAIR</h1>

      <div className="hnav">
        <ul className="hul">
          <li className="hli"><Link to="#human-hair" className="hlinks">Human Hair</Link></li>
          <li className="hli"><Link to="#wigs" className="hlinks">Wigs </Link></li>
          <li className="hli"><Link to="#Hair Bundle" className="hlinks">Hair Bundles</Link></li>
        </ul>
      </div>

      <div className="hcards-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
        
    </div>
  );
}

export default Hair;
