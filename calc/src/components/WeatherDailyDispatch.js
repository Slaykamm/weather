import React, {useState} from "react";
import Table from 'react-bootstrap/Table';
import { render } from "react-dom";


import "../styles/WeatherDailyDispatch.css"



function DispatchDailyWeather(props){


        return(

            <>
            
            <div id="weather_dispatch">



                <Table>

                <thead><tr>
                        <th>Date:</th>
                        <th>Humidity</th>
                        <th>pressure</th>
                        <th>wind_speed</th>
                        <th>Day temp C</th>
                        <th>Night temp C</th>
                        <th>Sky</th>

                        
                </tr></thead>

                <tbody>





                            {props.dailyInfo.map(({dt, clouds, sunrise, humidity, pressure, wind_speed, temp, weather }) => <tr key={sunrise+dt}>
                                    
                                <td>{dt}</td> 
                                <td>{humidity}</td> 
                                <td>{pressure}</td> 
                                <td>{wind_speed}</td> 
                                { temp ?  <td> 

                                        { Object.entries(temp)[0][1] }
                                        </td> : <td>"check"</td>}
                                { temp ?  <td> 
                                        { Object.entries(temp)[3][1] }
                                        </td> : <td>"check"</td>}

                                { weather ?  <td> 

                                        { Object.entries(weather).map((ttt) =>   Object.entries(ttt[1])[2][1])  }   </td>
                                        

                                    : <td>"check"</td>}

                            </tr>)}

                </tbody>


                </Table> 


            </div>

            </>
        )


}

export default DispatchDailyWeather;