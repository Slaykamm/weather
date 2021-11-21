import React from "react";
import axios from "axios";


//import MyJson from '../resource/current.city.list.min.json';
import MyJson from '../resource/city2.json';

import "../styles/WeatherDispatch.css"


function getCovertedTime(oldTime)
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

    return time
}


function WeatherDispatch(props) {

    var checkCityInfo = {};
    var newData = JSON.parse(JSON.stringify(MyJson));
        
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

                        console.log('test', checkCityInfo)

                        

                            const api_key = 'fe903318251d78a79595ce267861e3b5'
                            //axios.post(`http://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&appid=${api_key}&uits=metric`).then(responce =>{
                            // axios.post('http://api.openweathermap.org/data/2.5/weather?q=Taglag&appid=fe903318251d78a79595ce267861e3b5').then(responce =>{
                        
                            //hourly
          //                  axios.post(`https://api.openweathermap.org/data/2.5/onecall?lat=${checkCityInfo.lat}&lon=${checkCityInfo.lon}&units=metric&appid=${api_key}`).then(responce =>{
                            //1 hour minutely
                            axios.post(`https://api.openweathermap.org/data/2.5/onecall?lat=${checkCityInfo.lat}&lon=${checkCityInfo.lon}&units=metric&appid=${api_key}`).then(responce =>{
                        
                        
                                let receivedInfo = responce.data;

                                //каррент
                                receivedInfo.current.dt = getCovertedTime(receivedInfo.current.dt);
                                receivedInfo.current.sunrise = getCovertedTime(receivedInfo.current.sunrise);
                                receivedInfo.current.sunset = getCovertedTime(receivedInfo.current.sunset);


                                //дейли
                                for (let i=0; i<receivedInfo.daily.length; i++)
                                {
                                    let oldTime = receivedInfo.daily[i].dt;
                                    receivedInfo.daily[i].dt = getCovertedTime(oldTime);
                                }


                                //часы
                                for (let i=0; i<receivedInfo.hourly.length; i++)
                                {
                                    
                                    let oldTime = receivedInfo.hourly[i].dt;
                                    receivedInfo.hourly[i].dt = getCovertedTime(oldTime);
                                }

                                console.log(receivedInfo)

                                for (let i=0; i<receivedInfo.minutely.length; i++)
                                {
                                    let oldTime = receivedInfo.minutely[i].dt;
                                    receivedInfo.minutely[i].dt = getCovertedTime(oldTime);
                                }

                                //минуты



                               
                        
                            })



                        


                    } //на if наш город. работаем тут, чтобы не мучать компик.
            }); //на мап json
  


    






    return (

        <>

        <p>Test dispatch</p>

        </>

    )

}

export default WeatherDispatch;