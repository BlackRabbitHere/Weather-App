import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setcity]=useState("");
    let [error,setError]=useState(false);
    const Apiurl="https://api.openweathermap.org/data/2.5/weather";
    const API_key="fbfc824869268c68f3cc752362f2c4d5";
   
        let getWeathorInfo= async()=>{
        try{
        let response=await fetch(`${Apiurl}?q=${city}&appid=${API_key}&units=metric`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description
        };
        console.log(result);
        return result;
    } 
    catch(err){
        throw err;
    }
    }
    

    let handleChange=(event)=>{
        setcity(event.target.value);
    }

    let handleSubmit=async (event)=>{
        try{
        event.preventDefault();
        console.log(city)
        setcity("");
        let newInfo= await getWeathorInfo();
        updateInfo(newInfo);
        }
        catch(err){
            setError(true)
        }
    }

    return (
        <div className='Searchbox'>
            {/* <h2>Search for the weather</h2> */}

            <form onSubmit={handleSubmit}>
            <TextField id="city" 
            label="City Name" 
            variant="outlined" 
            required value={city}
            onChange={handleChange}
            />
            <br /><br />
            <Button variant="contained" type="submit" >Search</Button>
            {error && <p style={{color:"red"}}>No such place exists</p>}
            </form>
        </div>
    )
}