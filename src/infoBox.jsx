import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./infobox.css"



export default function InfoBox({info}){
    const Init_url="https://images.unsplash.com/photo-1545042679-41d22b2ca130?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGR1c3R5JTIwd2VhdGhvcnxlbnwwfHwwfHx8MA%3D%3D";

    const Hot_Url="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Cold_Url="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Rain_url="https://images.unsplash.com/photo-1536329978773-2f8ac431f330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    return (
        <div className="infobox">
            {/* <h1>Weather Info</h1> */}
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity>80
          ? Rain_url
          :info.temp>15
          ? Hot_Url
          :Cold_Url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
          info.humidity>80
          ? <ThunderstormIcon />
          :info.temp>15
          ? <WbSunnyIcon/>
          :<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature={info.temp}&deg;C</p>
          <p>Humidity={info.humidity}</p>
          <p>MinTemp={info.tempMin}&deg;C</p>
          <p>MaxTemp={info.tempMax}&deg;C</p>
          <p>The weather can be described as<i> {info.weather} </i> and Feels Like {info.feelsLike}&deg;C </p>
        </Typography>
      </CardContent>
        
    </Card>
    </div>
        
        </div>
    )
}