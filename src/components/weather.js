import React from 'react';

const Weather = (props) => (
    <div>
        {
            props.type === 'fiveDay' &&
            <h4>{formatDate(new Date(props.weather.dt_txt))}</h4>
        }
        <img src={`http://openweathermap.org/img/w/${props.weather.weather[0].icon}.png`}/>
        <h4>{props.weather.weather[0].main}</h4><br/>
        <span>{`${getTempInCelsius(props.weather.main.temp)}°C`}</span>
        <hr/>
    </div>
);

const formatDate = (date) => {
    let monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

const getTempInCelsius = (temp) => {
    return Math.floor(temp - 273.15)
}

export default Weather;