import "./DateTime.css"
function DateTime(props) {

    const TimeDate = new Date();
    const day = TimeDate.getDay();
    const date = TimeDate.getDate();
    const months = TimeDate.getMonth();
    const year = TimeDate.getFullYear();
    const Hours = TimeDate.getHours();
    const Time = TimeDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const DayArry = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const MonthsArry = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decmber"];
    let wish = "";
    let icon = "";
    if (Hours >= 6 && Hours < 12) {
        wish = "Morning";
        icon = "fa-solid fa-cloud-sun";
    }
    else if (Hours >= 12 && Hours < 16) {
        wish = "Afternoon";
        icon = "fa-solid fa-sun";
    }
    else if (Hours >= 16 && Hours < 21) {
        wish = "Evening";
        icon = "fa-regular fa-sun";
    }
    else {
        wish = "Night";
        icon = "fa-solid fa-moon";
    }
    return (
        <>
            <div className="dataTime">
                <h1>{Time}</h1>
                <p>{DayArry[day]}, {date} {MonthsArry[months]}, {year} </p>
                <h3><i className={icon}></i> Good {wish}, {props.name}</h3>
            </div >
        </>
    );
}
export default DateTime;

