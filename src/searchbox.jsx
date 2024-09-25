import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css"
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const Apiurl = "https://api.openweathermap.org/data/2.5/weather";
    const API_key = "fbfc824869268c68f3cc752362f2c4d5";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${Apiurl}?q=${city}&appid=${API_key}&units=metric`);
            let jsonResponse = await response.json();
            if (jsonResponse.cod === "404") {
                throw new Error("City not found");
            }
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
        // Reset error when user starts typing
        if (error) setError(false);
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setCity(""); // Clear the input field after submit
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setError(false); // Reset error on valid submission
        } catch (err) {
            setError(true); // Show error if city not found
        }
    }

    return (
        <div className='Searchbox'>
            {/* <h2>Search for the weather</h2> */}

            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                    error={error} // Shows red border on error
                    helperText={error ? "No such place exists" : ""}
                />
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    )
}
