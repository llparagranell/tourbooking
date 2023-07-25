import { useLocation } from "react-router";
import Search from "../components/Search";
import "./roomlist.css";
import { useState, useEffect } from "react";
import axios from "axios";

function RoomList() {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/room").then((res) => setData(res.data));
  }, []);

  const  chechHandler = () => {
    alert('hotel booked')
  }
  return (
    <div>
      <div className="list-head">
        <h1>Searching For Result's In {location.state.name.toLowerCase()}.</h1>
      </div>
      <Search />
      <section className="sec">
        <div className="dis filter">
          <h1 className="filter-head">Filter By:</h1>
          <div className="filter-div">
            <h1 className="filter-h">Your budget (per night)</h1>
            <ul className="filter-ul">
              <input type="checkbox" />
              <label>₹ 0 - ₹ 5,000</label>
              <br />
              <input type="checkbox" />
              <label>₹ 5,000 - ₹ 10,000</label>
              <br />
              <input type="checkbox" />
              <label>₹ 10,000 - ₹ 15,000</label>
              <br />
              <input type="checkbox" />
              <label>₹ 15,000 - ₹ 20,000</label>
              <br />
              <input type="checkbox" />
              <label>₹ 20,000 +</label>
              <br />
            </ul>
          </div>
          <div className="filter-div">
            <h1 className="filter-h">Property rating</h1>
            <p className="filter-p">Includes stars and other ratings</p>
            <ul className="filter-ul">
              <input type="checkbox" />
              <label>2 stars</label>
              <br />
              <input type="checkbox" />
              <label>3 stars</label>
              <br />
              <input type="checkbox" />
              <label>4 stars</label>
              <br />
              <input type="checkbox" />
              <label>Unrated</label>
              <br />
            </ul>
          </div>
          <div className="filter-div">
            <h1 className="filter-h">Cancellation policy</h1>
            <ul className="filter-ul">
              <input type="checkbox" />
              <label>Free cancellation</label>
              <br />
              <input type="checkbox" />
              <label>Book without credit card</label>
              <br />
            </ul>
          </div>
        </div>
        <div className="list">
          <div className="list-container">
            {data.map((e) => {
              if (
                location.state.name.toLowerCase() === data[0].city.toLowerCase()
              )
                return (
                  <div className="list-card">
                    <div className="list-div" id={e._id} onClick={chechHandler}>
                      <div className="list-img dis">
                        <img src={e.image} alt="" width={300} height={200} />
                      </div>
                      <div className="list-text-1 dis">
                        <div>
                          <ul className="list-ul dis">
                            <h3 className="list-h">{e.name}</h3>
                            <p className="list-p">{e.city}</p>
                          </ul>
                          <ul className="list-ul dis right">
                            <p className="list-ul-p dis">{e.review}</p>
                            <a className="list-ul-a dis" href="!#">{e.rating}</a>
                          </ul>
                        </div>
                        <div className="list-text-2">
                          <div className="dis">
                            <p>{e.type}</p>
                            <p>{e.food}</p>
                          </div>
                          <div className="dis right">
                            <p className="price">
                              ₹ {e.price} {"/-"}
                            </p>
                          </div>
                        </div>
                        <button className="dis avilable right" >
                          See Avilability {">"}
                        </button>
                      </div>
                    </div>
                  </div>
                );
                else return <h1>No Hotel's Are Avilable In Current City.</h1>
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default RoomList;
