import React, {useState} from "react";
import Table from 'react-bootstrap/Table';
import { render } from "react-dom";


import "../styles/WeatherDispatch.css"

function WeatherHourlyDispatch(props){


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
                    <th>Feels like</th>
                    
            </tr></thead>

            <tbody>





            {props.hourlyInfo.map(({dt, clouds, humidity, pressure, wind_speed, temp, feels_like }) => <tr key={dt+wind_speed}>
                                
                                <td key = {dt}>{dt}</td> 
                                <td>{humidity}</td> 
                                <td>{pressure}</td> 
                                <td>{wind_speed}</td> 
                                <td>{temp}</td> 
                                <td>{feels_like}</td> 

                            </tr>)}





            </tbody>


            </Table> 


        </div>



        </>

    )


}

export default WeatherHourlyDispatch
