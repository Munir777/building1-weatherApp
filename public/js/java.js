const reg = document.getElementById("firstS");
const sub = document.getElementById("submiter")
const weatherFeed = document.getElementById("weatherFeed");

sub.addEventListener("click", ()=>{
     console.log(reg.value)
     const dataR = (callBack)=>{

        //console.log(reg.value)

        const city = reg.value;
        const myKey = "b4e9d5d04c9149eeb8e05955250609"
        const url = `http://api.weatherapi.com/v1/current.json?key=${myKey}&q=${city}`
          
          //const url = "https://jsonplaceholder.typicode.com/posts";

          fetch(url)
          .then((res)=>{
                  
                 if(res.status === 200){
                    return res.json();
                 }
                 
          })
          .then((data)=>{
                    //console.log(data)

                    // console.log({
                    //     temperature: data.current.temperature,
                    //     humidity: data.current.humidity,
                    //     vis: data.current.visibility,
                    //     windDirection: data.current.wind_dir,
                    //     degrees: data.current.wind_degree,
                    //     windSpeed: data.current.wind_speed,
                    //     city: data.location.name,
                    //     latitude: data.location.lon,
                    //     time: data.location.localtime,
                    //     country: data.location.country
                    // })

                    const theFeed = {
                        temperature: data.current.temp_c,
                        humidity: data.current.humidity,
                        vis: data.current.vis_km,
                        windDirection: data.current.wind_dir,
                        degrees: data.current.wind_degree,
                        windSpeed: data.current.wind_kph,
                        city: data.location.name,
                        latitude: data.location.lon,
                        time: data.location.localtime,
                        country: data.location.country,
                        forecast: data.current.condition.text,
                        icon: data.current.condition.icon
                    }
                    const {temperature, humidity, vis, windDirection, degrees, windSpeed, city, latitude, time, country, forecast, icon } = theFeed;

                    

                    weatherFeed.innerHTML = `
                                             <h2 style="text-decoration: none;">${city}</h2>
                                             <p>${forecast}</p>
                                             <img src="${icon}" alt="icon">
                                             <p>Time ${time}</p>
                                             <p> Current Temperature ${temperature}</p>
                                             <p>Humidity ${humidity}</p>
                                             <p>Visibility ${vis}</p>
                                             <p>Wind direction ${windDirection}</p>
                                             <p>Wind in Degree ${degrees}</p>
                                             <p>Wind Speed ${windSpeed}</p>
                                             <p>Country ${country}</p>
                                             
                    `
                    // callBack({
                    //     userId:  data[1].userId,
                    //     id: data[1].id,
                    //     title: data[1].title
                    // })
          })
}


dataR()
});



// const profile = {
//     firstName: "Munir", 
//     kids: ["Shairah", "Yusuf", "Yunus"]
// }

// console.log(profile.kids[0])