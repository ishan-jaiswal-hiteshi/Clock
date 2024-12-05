// Calling every second to refresh
setInterval(showTime, 1000);

function showTime() {
    let get_Time = new Date();
    let hour = get_Time.getHours();
    let min = get_Time.getMinutes();
    let sec = get_Time.getSeconds();
    let m_sec = get_Time.getMilliseconds();
    let day = get_Time.getDay();
    let date = get_Time.getDate();
    let month = get_Time.getMonth();
    let year = get_Time.getFullYear();
    let am_pm = "AM";

    // To Convert to Day
    const day_name = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    // Same for Month
    const month_name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // To convert time in AM/PM format
    
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }   

        //To add 0 before for single digit time
        hour = hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;


    //Current time format
    let currentTime =
    day_name[day] +
        ", " +
        date +
        " " +
        month_name[month]+
        " " +
        year+
        "<br>"+
        hour +
        ":" +
        min +
        ":" +
        sec +
        " " +
        am_pm;

    // Displaying the time
    document.getElementById("root-container").innerHTML = currentTime;
}

// To skip dilay at onload
showTime();