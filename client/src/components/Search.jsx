import { useState } from "react";
import "./search.css";
import { useNavigate } from "react-router";

function Search() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [person, setPerson] = useState();

  const handleName= (e) => {
    e.preventDefault();
    const value = e.target.value;
    setName(value);
  };
  const handlePerson= (e) => {
    e.preventDefault();
    const value = e.target.value;
    setPerson(value);
  };

  const submitHandler = () => {
    navigate('/roomlist',{state:{name:name, person:person}})
  }

  return (
    <div className="search">
      <div className="search-card">
        <h1 className="search-card-h">Search Your Dream Hotel.</h1>

        <div className="cards">
          <input type="text" name="name" id="" placeholder="City Name" onChange={handleName} required/>
        </div>
        <div className="cards">
          {" "}
          <div className="date">
            <input type="date" />
          </div>
          <div className="date">
            <input type="date" />
          </div>
        </div>

        <div className="cards">
          <input type="text" placeholder="Person" onChange={handlePerson} required/>
        </div>
        <div className="cards">
          <button className="card-button" onClick={submitHandler}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Search;
