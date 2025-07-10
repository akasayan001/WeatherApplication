const cityName=document.getElementById("cityName");
const city_name=document.getElementById("city_name")
const temp_status=document.getElementById("temp_status");
const temtemp_realval=document.getElementById("temp_realval");
const submitBtn=document.getElementById("submitBtn");

const getInfo= async (event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    
    if(cityVal===""){
        city_name.innerHTML=`plzz write the name before the search`;

    }else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=da2760bdda059f6e6d1941e98044c005&units=metric`;
            const responce= await fetch(url);
            const data=await responce.json();
            const arrData=[data];
            city_name.innerHTML=`${arrData[0].name}, ${arrData[0].sys.country}`
            temp_realval.innerHTML=arrData[0].main.temp;

            const tempMood=arrData[0].weather[0].main;

            if (tempMood === "Clear") {
                temp_status.innerHTML =
                    "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood === "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood === "Rain") {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }
            
        }catch{
            city_name.innerHTML=`plzz enter the name properly`;
        }
       
    }
}

submitBtn.addEventListener("click",getInfo);