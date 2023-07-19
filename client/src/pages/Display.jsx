import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./display.css";

const Display = () => {
  const [data, setData] = useState([]);
  const { fname } = useParams();
  const navigate = useNavigate();
  axios
    .get(`http://localhost:3000/rooms/${fname}`)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));

    const handler = () => {
      navigate("/roomlist",{state:{name:`${data.name}`, person:"family"}})
    }
  const myStyle = {
    float: "left",
    backgroundImage: `url(${data.image})`,
    backgroundSize: "cover",
  };
  const myDiv = {

    backgroundColor: "#00000059",
    color: "white",
    textAlign: "center",
    fontFamily: "system-ui",
  };

  const myH1 = {
    paddingTop: "25vh",
    fontSize: "3rem",
  };

  const myLi = {
    listStyleType: "none",
    fontFamily: "system-ui",
    padding: "7px 0",
  };
  const myh = {
    fontSize: "2.5rem",
    fontFamily: "system-ui",
    listStyleType: "none",
  };
  const my = {
    fontSize: "2rem",
    fontFamily: "system-ui",
    listStyleType: "none",
    textAlign: "center",
  };

  if (data != null)
    return (
      <div>
        <section className="head-rooms">
          <div className="myStyle" style={myStyle}>
            <div className="myDiv" style={myDiv}>
              <h1 style={myH1}>{data.name}</h1>
              <p>Great for buisness trip</p>
            </div>
          </div>
          <div className="display-card">
            <ul>
              <li style={myh}>FROM</li>
              <li style={my}>₹ {data.price}</li>
              <li style={myLi}>
                <button className="btn-rooms" onClick={handler}>Book Now</button>
              </li>
            </ul>
            <ul>
              <li style={myLi}>{data.size}</li>
              <li style={myLi}>2 Adults 1 Children </li>
              <li style={myLi}>{data.review}</li>
              <li style={myLi}>Sea View</li>
            </ul>
          </div>
        </section>

        <section className="display-serv">
          <div className="inline">
            <h1 className="display">Amenities</h1>
            <ul  className="display">
              <li>{'>'}  40-inch Samsung® LED TV</li>
              <li>{'>'}  Electronic safe with charging facility </li>
              <li>{'>'}  iHome™ Bluetooth MP3 Player </li>
              <li>{'>'}  Iron and ironing board </li>
              <li>{'>'}  Mini bar </li>
              <li>{'>'}  Non-smoking </li>
              <li>{'>'}  USB charging station </li>
              <li>{'>'}  Wired and wireless broadband Internet access </li>
            </ul>
          </div>
          <div className="inline">
            <h1 className="display">Services</h1>
            <ul className="display">
              <li>{'>'}  Free-to-use smartphone (Free )</li>
              <li>{'>'}  Safe-deposit box (Free )</li>
              <li>{'>'}  Luggage storage (Free )</li>
              <li>{'>'}  Childcare ($60 / Once / Per Accommodation )</li>
              <li>{'>'}  Massage ($15 / Once / Per Guest )</li>
            </ul>
          </div>
        </section>
      </div>
    );
};

export default Display;
