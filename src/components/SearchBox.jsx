import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

function SearchBox({ updateinfo }) {
  let [city, setcity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "11bd0dab3de4b8042d62aec553d17ad4";

  let getWeatherinfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonRespponse = await response.json();
    let result = {
      city: jsonRespponse.name,
      temp: jsonRespponse.main.temp,
      temp_max: jsonRespponse.main.temp_max,
      temp_min: jsonRespponse.main.temp_min,
      humidity: jsonRespponse.main.humidity,
      feels_like: jsonRespponse.main.feels_like,
      weather: jsonRespponse.weather[0].description,
    };
    console.log(jsonRespponse);
    console.log(result);
    return result;
  };

  let handleChange = (evt) => {
    setcity(evt.target.value);
  };
  let submitChange = async (evt) => {
    evt.preventDefault();
    console.log(city);
    setcity("");
    let info = await getWeatherinfo();
    updateinfo(info);
  };
  return (
    <>
      <center>
        <form action="" onSubmit={submitChange}>
          <TextField
            id="outlined-basic"
            label="Enter your City"
            variant="outlined"
            required
            value={city}
            onChange={handleChange}
          />{" "}
          <br /> <br />
          <Button
            variant="contained"
            endIcon={<SearchIcon />}
            color="success"
            type="submit"
          >
            Search
          </Button>
        </form>
      </center>
    </>
  );
}

export default SearchBox;
