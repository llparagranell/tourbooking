import { useEffect, useState } from "react";
import "./ourroom.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

function Ourrooms() {

  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const handleClick = event => {
    navigate(`/display/${event.currentTarget.id}`)

  };

  useEffect(() => {
    axios.get("http://localhost:3000/getall").then((res) => setData(res.data));
  });
  
  if (data != null)
    return (
      <div>
       <section className="rooms">
          <h1 className="rooms-h1">Our Rooms</h1>
          <p className="rooms-p">
            Unwind the clock of modern life. Unlock the door to a wonder of the
            world.
          </p>
        </section>

        {data &&
          data.map((e) => {
            return (
              <section className="home-container" id={e._id} onClick={handleClick}>
                <div className="home-card card-pad">
                  <h1 className="home-card-h1" id="name">{e.name}</h1>
                  <p className="home-card-p">
                    FROM <br /> <span className="home-card-price">₹3500</span>
                  </p>

                  <div className="home-list">
                    <ul className="home-list-ul">
                        <li className="home-card-list">bed:</li>
                        <li className="home-card-list">capacity:</li>
                        <li className="home-card-list">view:</li>
                        <li className="home-card-list">review:</li>
                    </ul>
                    <ul className="home-list-ul right">
                        <li className="home-card-list">{e.size}</li>
                        <li className="home-card-list">2 Adults</li>
                        <li className="home-card-list">Sea view</li>
                        <li className="home-card-list">{e.review}</li>
                    </ul>
                  </div>
                  <button className="home-card-btn" >view detail</button>
                </div>
                <div className="home-card-img right">
                    <img src={e.image} alt="" height={600}/>
                </div>
              </section>
            );
          })}
      </div>
    );
}

export default Ourrooms;
