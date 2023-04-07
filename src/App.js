import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import DateTime from "./DateTime";
import WeatherMain from "./WeatherMain";
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

  function handler(event) {
    setCity(event.target.value)
  }
  function userName(event) {
    setUser(event.target.value);
  }

  console.log(name)
  return (
    <>{!name ?
      <div className="useName">
        <input type="text" placeholder="Enter your Name" value={user} onChange={userName} />
        <button className="button" onClick={() => { setName(user) }}>Enter</button>
      </div> :
      <div className="main">
        <div className="left">
          <DateTime name={name} />
          <div className="input">
            <div className="inputsection">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" name="" placeholder="Search here..." id="" value={city} onChange={handler} />
              <i className="fa-solid fa-location-dot"></i>
            </div>
          </div>
        </div>
        <div className="right">
          <WeatherMain city={city} data={data} />
        </div>
      </div>
    }
    </>
  );
}

export default App;
