import { Link } from 'react-router-dom';
import '../styles/hair.css';
import Card from '../components/prods/card';




function Hair() {

  return (
    <div className="wigs-div">
      <div className="hsidebar">
        <h1 className="wigs">HAIR</h1>

        <div className="hnav">
          <ul className="hul">
            <li className="hli"><Link to="#human-hair" className="hlinks">Human Hair</Link></li>
            <li className="hli"><Link to="#wigs" className="hlinks">Wigs Hair</Link></li>
            <li className="hli"><Link to="#Hair Bundle" className="hlinks">Hair Bundles</Link></li>

          </ul>
        </div>

      </div>

      <div className="wigs-container">
        <Card />

        
      </div>
    </div>
  );
}

export default Hair;
