import React, {useState} from "react";


//import MyJson from '../resource/current.city.list.min.json';
import MyJson from '../resource/city2.json';
import Table from 'react-bootstrap/Table';

import WeatherDispatch from "./WeatherDispatch";

import "../styles/Cities.css"


function Cities() {

    let [pickCity, addNewCity] = useState("");
    let [pickInterval, addTimeInterval] = useState();
     





    //
            return(

                <>
               
                <div id = "pickCitySelectors">


                    <div className="input-group mb-3">
                        <select className="custom-select" id="inputGroupSelect02" onChange={(event) => addNewCity(event.target.value) }>
                            <option defaultValue>Choose city...</option>
                            {MyJson.map(city => <option key = {city.id}> {city.name}</option>)}
                        </select>
                        <span>spacebetween</span>
                        <select className="custom-select" id="inputGroupSelect03" onChange={(event) => addTimeInterval(event.target.value)}>
                            <option defaultValue>Time interval...</option>
                            <option value="1">This moment weather (closest hour)</option>
                            <option value="2">Closest two days (an hour interval)</option>
                            <option value="3">This week (next seven days)</option>
                            
                        </select>
                     
                        {/* <span>spacebetween</span>
                        <button type="button" className="btn btn-info" id = "check_Weather_Submit_Btn" onClick={ handleClick  }>Check Weather</button> */}

                    </div>


                </div>

                        {pickInterval > 0 && pickCity ? <WeatherDispatch cityName = {pickCity} interval = {pickInterval} /> : <p>"Please pick city the prefered time interval"</p>}

                        


             

                </>

            )

    

};

export default Cities;
