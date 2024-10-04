import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function InfoBox({ info }) {
  let IMG_URL =
    "https://plus.unsplash.com/premium_photo-1663089709005-2dacf3a8b685?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  //   let info = {
  //     city: "Delhi",
  //     feels_like: 27.55,
  //     humidity: 43,
  //     temp: 27.64,
  //     temp_max: 27.64,
  //     temp_min: 27.64,
  //     weather: "clear sky",
  //   };
  return (
    <>
      {" "}
      <center>
        <div className="weatherinfo">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={IMG_URL}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <b>{info.city} </b>
              </Typography>
              <Typography variant="body2" sx={{ color: "text.primary" }}>
                <div>Humidity:{info.humidity}</div> <br />
                <div>Temperature:{info.temp}&deg;C</div> <br />
                <div>Minimum Temperature:{info.temp_max}&deg;C</div> <br />
                <div>Maximum TemperatureL:{info.temp_max}&deg;C</div> <br />
                <div>Weather :{info.weather}</div> <br />
                <div>Feels Like:{info.feels_like}&deg;C</div>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </center>
    </>
  );
}

export default InfoBox;
