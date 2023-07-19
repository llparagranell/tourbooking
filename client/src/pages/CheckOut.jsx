import { useParams } from "react-router";
import "./checkout.css";
import { useEffect, useState } from "react";
import axios from "axios";

function CheckOut() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/room/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  return <div className="book">
    <div className="book-container">
        <div className="book-img">
            <img src={data.image} alt=""/>
        </div>
    </div>
  </div>;
}

export default CheckOut;
