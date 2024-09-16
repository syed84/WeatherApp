import { useState } from "react";
import axios from "axios";

function App() {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={987815701a4a9394cbfe2b9a32fd63ad}";

  const [data, setData] = useState();
  const [location, setLocation] = useState();

  const searchLocation = () => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };
  return (
    <div className="app">
      <div className="search">
 
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Karachi</p>
          </div>
          <div className="temp">
            <p>60◦F</p>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
