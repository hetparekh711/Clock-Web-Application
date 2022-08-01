function dateTime(){
    let currentTime = new Date();
    let tohor = currentTime.getHours();
    let tomin = currentTime.getMinutes();
    let tosec = currentTime.getSeconds();
    let today = currentTime.getDay();
    let tomonth = currentTime.getMonth();
    let toyear = currentTime.getFullYear();
    const totime = document.getElementById('time');
    if(tohor > 12){
        totime.innerHTML = `<h1>${tohor}:${tomin}:${tosec}:PM</h1>`;
    }
    else{
        totime.innerHTML = `<h1>${tohor}:${tomin}:${tosec}:AM</h1>`
    
    }

   
    

}

dateTime()