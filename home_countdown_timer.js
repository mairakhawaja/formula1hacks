dayjs.extend(dayjs_plugin_duration);

function activateCountdown(element, dateString){
    const targetDate = dayjs(dateString); /*creating an object of the dayjs library where its essentially a date */ 

    element.querySelector(".until__event").textContent = `Until ${ targetDate.format("D MMMM YYYY")}`;

    setInterval(() => {
        const now = dayjs(); /* creating another object where the "date" is now */ 
        const duration = dayjs.duration(targetDate.diff(now)); /*targetDate.diff is finding the difference between now and the target date as a number in ms */
       /*  element.querySelector(".until__numeric--seconds").textContent = duration.seconds().toString().padStart(2,"0"); */ 
        element.querySelector(".until__numeric--minutes").textContent = duration.minutes().toString().padStart(2,"0")
        element.querySelector(".until__numeric--hours").textContent = duration.hours().toString().padStart(2,"0");
        element.querySelector(".until__numeric--days").textContent = duration.asDays().toFixed(0).toString().padStart(2,"0"); /* gives us the duration between two dates we chose as hours (not like 30000 tho) */ 
    }, 250); /* passing to a function which changes all numbers every quarter second */ 
    /* basically creating an object of the lib duration with the date as the date as our target date in milliseconds and converts our time */ 
    
}

activateCountdown(document.getElementById("myCountdown"),"2025-05-14");