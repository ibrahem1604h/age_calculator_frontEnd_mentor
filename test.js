let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let labl=document.getElementsByClassName("msg")
let sumbit = document.querySelector("#ok");
let maseg = document.getElementsByClassName("error ");
let result = document.getElementsByClassName("number");
let toDay = new Date();
let monthNow = toDay.getMonth() + 1;
let yearNow = toDay.getFullYear();
let dayNow = toDay.getDate();
let yorYear, yorDay, yorMonth;
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// console.log(dayNow)
// console.log(maseg);
// console.log(labl);
// console.log(day);
// console.log(month);
// console.log(year);
// console.log(sumbit);
// console.log(result);
// console.log(toDay)
// console.log(yearNow)
// console.log(monthNow)
// stop input string
function stop(input) {
    input.value= input.value.replace(/[^0-9]/g, "");
}
sumbit.onclick = function () {
    // check if input field not emty
    if (day.value === "" & month.value === "" & day.value === "") {
        for (let i = 0; i < maseg.length; i++) {
            day.style.borderColor = "var(--Light_red)";
            month.style.borderColor = "var(--Light_red)";
            year.style.borderColor = "var(--Light_red)";
            labl[i].style.color = "var(--Light_red)";
            labl[i].style.opacity = "1";
            maseg[i].textContent = "this field is required";
        }
    } else {
        for (let x = 0; x < maseg.length; x++) {
            day.style.borderColor = "black";
            month.style.borderColor = "black";
            year.style.borderColor = "black";
            labl[x].style.color = "black";
            maseg[x].textContent = "";
        }
    
    
    if ((parseInt(day.value) >= 1 && !(parseInt(day.value) <= daysInMonth[parseInt(month.value) - 1]) || parseInt(day.value) > 31)) {
        day.style.borderColor = "var(--Light_red)";
        labl[0].style.color = "var(--Light_red)"
        maseg[0].textContent = "must be a valid day";
        
    }
    if (parseInt(month.value) <= 0 || parseInt(month.value) > 12) {
        month.style.borderColor = "var(--Light_red)";
        labl[1].style.color = "var(--Light_red)"
        maseg[1].textContent = "must be a valid month";
    }
    if (parseInt(year.value) > yearNow) {
        year.style.borderColor = "var(--Light_red)";
        labl[2].style.color = "var(--Light_red)"
        maseg[2].textContent = "must be a valid year";
    }
    
        // cal
        yorDay = dayNow - parseInt(day.value);
        if (yorDay < 0) {
            yorDay = yorDay + daysInMonth[parseInt(month.value) - 1];
        }
        result[2].textContent = `${yorDay}`;

        yorMonth = monthNow - parseInt(month.value);
        if (yorMonth < 0) {
            yorMonth = yorMonth + 12;
        }
        result[1].textContent = `${yorMonth}`;

        yorYear = yearNow - parseInt(year.value);
        
        result[0].textContent = `${yorYear}`;

    }
}
