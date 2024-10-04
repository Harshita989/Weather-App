import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

function WeatherApp() {
  const [weatherinfo, setweatherinfo] = useState({
    city: "WonderLand",
    feels_like: 27.55,
    humidity: 43,
    temp: 27.64,
    temp_max: 27.64,
    temp_min: 27.64,
    weather: "clear sky",
  });
  let updateinfo = (result) => {
    setweatherinfo(result);
  };
  return (
    <>
      <div
        style={{
          textAlign: "center",
          backgroundImage:
            "https://plus.unsplash.com/premium_photo-1669809948017-518b5d800d73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D",
        }}
      >
        <h1>Weather App</h1>
        <SearchBox updateinfo={updateinfo} /> <br />
        <InfoBox info={weatherinfo} />
      </div>
    </>
  );
}

export default WeatherApp;
