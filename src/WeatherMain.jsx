import "./WeatherMain.css"

function WeatherMain(props) {
    const TimeDate = new Date();
    const months = TimeDate.getMonth();
    const date = TimeDate.getDate();
    const MonthsArry = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decmber"];

    return (
        <><div className="weather-card">
            {props.data ? <><div className="address">
                <i className="fa-solid fa-location-dot"></i>
                <p>{props.data?.name} {props.data?.sys?.country}</p>
                <i className="fa-solid fa-angle-down"></i>
            </div>
                <img src={`http://openweathermap.org/img/w/${props.data?.weather[0].icon}.png`} alt="icon" />
                <p className="date">Today, {date} {MonthsArry[months]} </p>
                <h1> {Math.trunc(props.data?.main?.temp - 273.15)}&#176;</h1>
                <p className="weather-name">{props.data?.weather[0].main}</p>
                <div className="wind-hum">
                    <i className="fa-solid fa-wind"></i>
                    <p> Wind</p> <p>|</p> <p>{Math.trunc(props.data?.wind?.speed)} km/h</p>
                </div>
                <div className="wind-hum">
                    <i className="fa-solid fa-droplet"></i>
                    <p> Hum</p>

                    <p>|</p> <p>{props.data?.main?.humidity} %</p>
                </div></> : <h1>Search your place</h1>}

        </div ></>
    )
}
export default WeatherMain;