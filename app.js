// Global Variables
var submitBtn = document.getElementById("submit");

function cntDown()
{
    var dd = document.getElementById("dd").value;
    var mm = document.getElementById("mm").value;
    var mmSpan = document.getElementById("mmSpan");

    console.log(dd);
    console.log("Date Entered: " + dd + " " + mm);

    //Error Handling for dd and mm

    if (dd < 1 || dd > 31){
        console.log("Invalid Day Entered");
        mmSpan.innerText = "Invalid Day Entered";
    }

    else if(mm < 1 || mm > 12){
        console.log("Invalid Month Entered");
        mmSpan.innerText = "Invalid Month Entered";
    }

    else if( (dd < 1 || dd > 31) && (mm < 1 || mm > 12) )
    {
        mmSpan.innerText = "Both your day and month are invalid";
    }

    else if((dd == 30 || dd == 31) && mm == 02){
        console.log("February only has 28/29 Days");
        mmSpan.innerText = "February only has 28/29 Days";
    }

    else if(dd == 31 &&  (mm == 04 || mm == 06 || mm == 09 || mm == 11)){
        console.log("Invalid BirthDate");
        mmSpan.innerText = "Invalid BirthDate";
    }

    else {

        mmSpan.innerText = "";
         // Result Class
        var res = document.getElementsByClassName('result')[0];

        res.style.display = "block";

        // Countdown Global Variables
        var daysCount = document.getElementById("days");
        var hoursCount = document.getElementById("hours");
        var minutesCount = document.getElementById("minutes");
        var secondsCount = document.getElementById("seconds");

    // Date Logic
    var seconds = 1000;
    var minutes = seconds * 60;
    var hours = minutes * 60;
    var days = hours * 24;

        //Current Date object
        var currentDate = new Date();
        var currentMonth = (currentDate.getMonth()+1);

    // Date Objects
    var birthDate = new Date(1998, 06-01, 10);
    var birthDay = new Date(2021, mm-01, dd);
    var endYear = new Date(2021, 11, 31);
    var startYear = new Date(2021, 00, 01);

    console.log("Today: " + currentDate);
    console.log("Your birthday: " + birthDay);
    console.log("Last Day of the Year: " + endYear);
    console.log("First Day of the Year: " + startYear);

    console.log("Current Month: " + currentDate.getMonth());
    // Counter Variables
    var counter = new Date(birthDay - currentDate);

    if(mm <= currentMonth) {
        var counter = new Date((endYear-currentDate) + (birthDay - startYear));
    }

    var daysLeft = Math.floor(counter/days);
    var hoursLeft = Math.floor((counter % days)/hours);
    var minutesLeft = Math.floor((counter % hours)/minutes);
    var secondsLeft = Math.floor((counter % minutes)/seconds);

    console.log(daysLeft + " days");
    console.log(hoursLeft + " hours");
    console.log(minutesLeft + " minutes");
    console.log(secondsLeft + " seconds");
    console.log(counter.getTime());

    daysCount.innerHTML = daysLeft;
    hoursCount.innerHTML  = hoursLeft;
    minutesCount.innerHTML  = minutesLeft;
    secondsCount.innerHTML  = secondsLeft;
    
    // Changing Background Image Based on BirthDay Season
    var everything = document.getElementsByClassName("everything")[0];

    if( mm >= 03 && mm <= 05)
    {
        everything.style.backgroundImage = "url(../images/autumn.jpg)"
    }

    else if( mm >= 06 && mm <= 08)
    {
        everything.style.backgroundImage = "url(../images/winter.jpg)"
    }

    else if( mm >= 09 && mm <= 11)
    {
        everything.style.backgroundImage = "url(../images/spring.jpg)"
    }

    else if( mm == 12 || mm == 01 || mm == 02)
    {
        everything.style.backgroundImage = "url(../images/summer2.jpg)"
    }

    setInterval(cntDown, 1000);

    }
    
}

submitBtn.addEventListener('click', cntDown);


