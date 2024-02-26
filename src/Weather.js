import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    const apiKey = "b686de8bc01821a479175c046eac1f90";
    let city = "Atlanta"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
return (
    <div className ="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input 
            type="search" 
            placeholder="Enter a city..."
            className="form-control"
            autoFocus="on"
            />
            </div>
            <div className="col-3">
            <input 
            type="submit" 
            value="Search" 
            className="btn btn-primary w-100" />
            </div>
          </div>
        </form>
        <h1>Atlanta</h1>
        <ul>
            <li>Sunday 07:15</li>
            <li>Clear</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
                <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="Clear"
                />
                <span className="temperature">-1</span>
                <span className="unit">°C</span>
             </div> 
            </div>
        <div className="col-6">
               <ul>
                <li>Precipitation: 10%</li>
                <li>Humiditiy: 70%</li>
                <li>Wind: 5 mph</li>
               </ul> 
            </div>
        </div>
    </div>
 );
}