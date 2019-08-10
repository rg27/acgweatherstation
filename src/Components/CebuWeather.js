import React from 'react';

class CebuWeather extends React.Component{
    constructor(props){
        super();
        this.state = {
        datas:[],
        isFetching: false,
        }
    }

    componentDidMount(){
        fetch('http://dataservice.accuweather.com/forecasts/v1/daily/5day/262768?apikey=%09fyf6zdPvh0DSHWxJMwZLqS8ybfUY6WuY&metric=true')
        .then(result => result.json())
        .then(resultJSON => {
          console.log(resultJSON)
          this.setState({
            datas: resultJSON,
            isFetching: true,
            
          })
        });
    }
    render(){
        var { isFetching, datas} = this.state;
        if(!isFetching){
            return <div>loading...</div>
        }
        else{
            return(
               <div className="forecast-table">
                    <div className="container">
                        <div className="forecast-container">
                            <div className="today forecast"> <br/> <br/>
                            <span className="location">Cebu City</span>
                                {datas.DailyForecasts.map(data => (
                                <ul >
                                    <li key={data.id}>
                                    {data.Date}<br/>
                                    Max Temperature : {data.Temperature.Maximum.Value}{'\u00b0'}{data.Temperature.Maximum.Unit} <br/>
                                    Min Temperature : {data.Temperature.Minimum.Value}{'\u00b0'}{data.Temperature.Minimum.Unit} <br/>
                                    Day : {data.Day.IconPhrase} <br/>
                                    Night : {data.Night.IconPhrase} <br/> 
                                    <br/> 
                                    </li>
                                </ul>
                            ))}
                            </div>
                            
                        </div>
                        
                    </div>
               </div>
                
                
            );
        }
    }
}

export default CebuWeather;