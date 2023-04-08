import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import DateTime from "./DateTime";
import WeatherCard from "./WeatherCard";
function App() {
  const APIkey = "d18d7d0680c1f60181ab5578e379f75a";

  const [data, setData] = useState();
  const [city, setCity] = useState("");
  const [name, setName] = useState();
  const [user, setUser] = useState("");

  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;

  useEffect(() => {
    axios.get(url).then((response) => setData(response.data));
  }, [url]);

  return (
    <>{!name ?
      <div className="user-name">
        <form action="">
          <input type="text" autoFocus placeholder="Enter your Name" value={user} onChange={(event) => { setUser(event.target.value) }} />
          <button className="button" onClick={() => { setName(user) }}>Enter</button>
        </form>
      </div> :
      <div className="main">
        <div className="left">
          <DateTime name={name} />
          <div className="inputsection">
            <i className="fa-solid fa-magnifying-glass"></i>
            <form action="" onSubmit={(e) => e.preventDefault()}>
              <input type="text" autoFocus name="" placeholder="Search your city here..." id="" value={city} onChange={(event) => { setCity(event.target.value) }} />
            </form>
            <i className="fa-solid fa-location-dot"></i>
          </div>
        </div>
        <div className="right">
          <WeatherCard city={city} data={data} />
        </div>
      </div>
    }
    </>
  );
}

export default App;
