import React from 'react';

const Weather = props => (
<div className="container">
    <div className="forecast-container">
        <div className="today forecast">
            <div className="forecast-content">
                <div className="location">{props.city && <p>Location: {props.city}</p>}</div>

            <div>
                
            </div>
                
                {props.temperature && <p>Temperature: {props.temperature}{'\u00b0'}C</p>}
                {props.humidity && <p>Humidity: {props.humidity}%</p>}
                {props.description && <p>Conditions: {props.description}</p>}
                {props.error && <p>{props.error}</p>}
            </div>
           
        </div>
      
    </div>
   
    <hr/>
     
 </div>
);
export default Weather;