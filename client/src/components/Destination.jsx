import { useNavigate } from "react-router";
import "./destination.css";

function Destination() {
  const navigate = useNavigate();
  const handlePage = () => {
    navigate("/roomlist",{state:{name:"trending destination", person:"family"}})
  }
  return (
    <div>
      <div className="destination">
        <div className="destination-head">
          <h1>Trending destinations</h1>
          <p>Most popular choices for travellers from India</p>
        </div>
        <div className="destination-card">
          <div className="destination-card-1">
            <div className="card-destination-1" onClick={handlePage}>
            </div>
            <div className="card-destination-2" onClick={handlePage}></div>
          </div>
          <div className="destination-card-2">
            <div className="card-destination-3" onClick={handlePage}></div>
            <div className="card-destination-4" onClick={handlePage}></div>
            <div className="card-destination-5" onClick={handlePage}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
