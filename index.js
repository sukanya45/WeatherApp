console.log("Weather-App");

const APIkey="918865042e4f7c92e7e9cc05a3eaedc9";

async function renderInfo(data) {
    // to show above result in UI
    
        let newPara=document.createElement("p");
        newPara.textContent=`${data?.main?.temp.toFixed(2)} `;
        document.body.appendChild(newPara);
}

async function showWeather() {
try
{
    
        let city="goa";
    
        const response=await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`);
        let data=await response.json();
        console.log(data);
        
    
        

        renderInfo(data);
    }
catch(err)
{
    console.log("Error Found", err);
}
}


async function getCustomWeather() {

    try{
        
    let lat=15.6333;
    let lon=18.3333;
    let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`)
   let data=await response.json();
   console.log(data);
    }catch(err)
    {
        console.log("Error Found",err);
    }
}


function getLocation()
{
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else
    {
        console.log("Browser doesn't support geolocation.");
    }
}

function showPosition(position)
{
   let lat=position.coords.latitude;
   let lon=position.coords.longitude;

   console.log(lat);
   console.log(lon);
}