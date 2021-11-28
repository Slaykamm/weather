import React, {useState} from "react";
import table from 'react-bootstrap/Table';
import { render } from "react-dom";


import "../styles/WeatherMinutelyDispatch.css"

function WeatherMinutelyDispatch(props){

    console.log("minutes", props.minutelyInfo.minutely)

    return(
        <>

<div id="weather_dispatch">



    <table className="table table-striped">

                <thead><tr>
                        <th>Date:</th>
                        <th>Humidity</th>
                        <th>pressure</th>
                        <th>wind_speed</th>
                        <th>Day temp C</th>
                        <th>Feels like</th>
                        
                </tr></thead>

                <tbody>
                    <tr> 
                    
                    { props.minutelyInfo.current ? <td> 
                    { Object.entries(props.minutelyInfo.current)[0][1]} </td> : <td>"check"</td>}


                    { props.minutelyInfo.current ? <td> 
                    { Object.entries(props.minutelyInfo.current)[6][1]} </td> : <td>"check"</td>}


                    { props.minutelyInfo.current ? <td> 
                    { Object.entries(props.minutelyInfo.current)[5][1]} </td> : <td>"check"</td>}

                    { props.minutelyInfo.current ? <td> 
                    { Object.entries(props.minutelyInfo.current)[11][1]} </td> : <td>"check"</td>}

                    { props.minutelyInfo.current ? <td> 
                    { Object.entries(props.minutelyInfo.current)[3][1]} </td> : <td>"check"</td>}
                    

                    { props.minutelyInfo.current ? <td> 
                    { Object.entries(props.minutelyInfo.current)[4][1]} </td> : <td>"check"</td>}


                    {console.log(props.minutelyInfo.minutely)} 

                    </tr>  
            
                </tbody>


    </table> 


</div>     


      
<div id="weather_dispatch_minutes">



    <table className="table table-striped">


        <thead id="minutely_table"><tr>
                        <th>Date</th>
                        <th>Precipitation</th>
                </tr></thead>

                <tbody>

                { props.minutelyInfo.minutely ? <td> 

                        {props.minutelyInfo.minutely.map(({dt }) => <tr key = {dt}>

                        <td>{dt}</td> 


                        </tr>)}
                    
                    </td> 
                        : <td>"check"</td>}




                { props.minutelyInfo.minutely ? <td> 

                {props.minutelyInfo.minutely.map(({dt, precipitation }) => <tr key = {dt}>


                <td>{precipitation}</td> 

                </tr>)}

                </td> 
                : <td>"check"</td>}

            
                </tbody>



    </table> 

</div>

    

        </>




    )



}

export default WeatherMinutelyDispatch