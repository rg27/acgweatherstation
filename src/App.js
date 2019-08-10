import React from 'react';
import './App.css';
import Header from './Components/Header'
import MainContent from './Components/MainContent';
import CebuWeather from './Components/CebuWeather';
import Weather from './Components/Weather';

const API_KEY = "57e29dbfe616ba8781b2f902f07c1c51";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
   const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(city){
      try{
        console.log(data);
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });
      }
      catch(error){
        console.error(error);
      }
    }
     else{
      console.log(data);
      this.setState({
        temperature:undefined,
        city: undefined,
        humidity: undefined,
        description: undefined,
        error: "City not found."
      });
       
    }
  }
    render(){
    return (
      <div className="App">
      
        <Header/>
        <MainContent getWeather={this.getWeather}/>
        <Weather
            temperature={this.state.temperature}
            humidity={this.state.humidity}
            city={this.state.city}
            description={this.state.description}
            error={this.state.error}
        />
        <CebuWeather/>
      </div>
    );

    }

}

export default App;
