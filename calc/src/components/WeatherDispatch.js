import React, {useState} from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';


//import MyJson from '../resource/current.city.list.min.json';
import MyJson from '../resource/city2.json';
import WeatherDailyDispatch from "./WeatherDailyDispatch";
import WeatherHourlyDispatch from "./WeatherHourlyDispatch";
import WeatherMinutelyDispatch from "./WeatherMinutelyDispatch";




import "../styles/WeatherDispatch.css"


function getCovertedTime(oldTime, period)
{
    var a = new Date(oldTime * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = "0" + a.getMinutes();
    var sec ="0" + a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;


    if (period == 'dayly'){
        var time = date + ' ' + month + ' ' + year  ; 
    }

    if (period == 'hour'){
        var time = date + ' ' + month + ' ' + year + ' ' + hour  ; 
    }

    if (period == 'minute'){
        var time = hour + ':' + min + ':' + sec ; 
    }

    if (period == 'current'){
        var time = date + ' ' + month + ' ' + year + " " + hour + ':' + min; 
    }

    return time
}



function WeatherDispatch(props) {


    
    var newData = JSON.parse(JSON.stringify(MyJson));
    const api_key = '16da20756bc63384418e1c8dc93e50a6'
    let [receivedInfo, setReceivedInfo] = useState([0])
    let [interval, setInterval] = useState(0)
 

    if (interval != props.interval){
       // 

        setInterval(props.interval);
        setReceivedInfo([0]);

    }

        newData.map(city =>
            {

                if (city.name == props.cityName)
                    {
                      const checkCityInfo =
                        {
                            name : city.name,
                            id : city.id,
                            lon : city.coord.lon,
                            lat : city.coord.lat

                        }

                            if  (receivedInfo == 0) 
                            {

                                if (interval == 3)
                                {
                                    axios.post(`https://api.openweathermap.org/data/2.5/onecall?lat=${checkCityInfo.lat}&lon=${checkCityInfo.lon}&units=metric&exclude=minutely,hourly&appid=${api_key}`).then(responce =>{
                                
                                    
                                        let receivedInfo2 = responce.data;
                                        let receivedInfo = responce.data.daily;
                                        console.log("RECEIVED DATA DAILY", receivedInfo2)

                                        //каррент

                                        

                                        //дейли

                                        for (let i=0; i<receivedInfo2.daily.length; i++)
                                        {
                                            let oldTime = receivedInfo2.daily[i].dt;
                                            receivedInfo2.daily[i].dt = getCovertedTime(oldTime, 'dayly');

                                        }
                                        let testObject = receivedInfo2.daily;
                                        
                                        setReceivedInfo(testObject);
                                    //    console.log("DAILY", receivedInfo);
                                        
                                    })

                                }

                                if (interval == 2)
                                {
                                    axios.post(`https://api.openweathermap.org/data/2.5/onecall?lat=${checkCityInfo.lat}&lon=${checkCityInfo.lon}&units=metric&exclude=daily,minutely&appid=${api_key}`).then(responce =>{
                                
                                
                                        let receivedInfo = responce.data;
                                      //  let receivedInfo = responce.data.hourly;
                                     //   console.log("RECEIVED DATA", receivedInfo)

                                        //часы

                                        for (let i=0; i<receivedInfo.hourly.length; i++)
                                        {
                                            
                                            let oldTime = receivedInfo.hourly[i].dt;
                                            receivedInfo.hourly[i].dt = getCovertedTime(oldTime, 'hourly');
                                        
                                        }
                                        setReceivedInfo(receivedInfo.hourly);
                                      //  console.log("HOUR")

                                    
                                    })
                                }

                                if (interval == 1)
                                {
                                    axios.post(`https://api.openweathermap.org/data/2.5/onecall?lat=${checkCityInfo.lat}&lon=${checkCityInfo.lon}&units=metric&exclude=daily,hourly&appid=${api_key}`).then(responce =>{

                                        let receivedInfo = responce.data;
                                     //   console.log("RECEIVED DATA", receivedInfo)

                                        //минуты


                                        for (let i=0; i<receivedInfo.minutely.length; i++)
                                        {
                                            let oldTime = receivedInfo.minutely[i].dt;
                                            receivedInfo.minutely[i].dt = getCovertedTime(oldTime, 'minutely');
                                            
                                        }

                                        receivedInfo.current.dt = getCovertedTime(receivedInfo.current.dt, 'current');
                                        receivedInfo.current.sunrise = getCovertedTime(receivedInfo.current.sunrise, 'current');
                                        receivedInfo.current.sunset = getCovertedTime(receivedInfo.current.sunset, 'current');
                                        

                                        setReceivedInfo(receivedInfo)
                                     //   console.log("MINUTE", receivedInfo)

                                            

                                    })
                                }
                                    
                                

                            } //на if наш город. работаем тут, чтобы не мучать компик.
                               

                    }
            }); //на мап json
  




    return (

        <>
        { interval == 3 ? <WeatherDailyDispatch dailyInfo = {receivedInfo} />
        
        : (interval == 2) ? <WeatherHourlyDispatch hourlyInfo = {receivedInfo}/> 
        : (interval == 1) ? <WeatherMinutelyDispatch minutelyInfo = {receivedInfo}/> : <p>"waitiong for user pick the interval"</p>}




        </>

    )

}

export default WeatherDispatch;