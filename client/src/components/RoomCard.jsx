import { useEffect, useState } from "react";
import "./roomcard.css";
import axios from "axios";

function RoomCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/room").then((res) => setData(res.data));
  }, []);

  if (data != null)
    return (
      <>
        <div className="card-container">
          {data.map((e) => {
            return (
              <div className="card">
                <div className="card-img">
                  <img src={e.image} alt="" width={300} height={200}/>
                </div>
                <div className="card-text">
                  <h3 className="card-h">{e.name}</h3>
                  <p className="card-p">{e.city}</p>
                  <ul className="card-ul">
                    <a className="card-ul-a">{e.rating}</a>
                    <li className="card-li">{e.review}</li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
}

export default RoomCard;
