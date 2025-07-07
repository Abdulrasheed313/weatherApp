let getDiv = document.querySelector("#main");

function add() {
  let getSearch = document.querySelector("#search");
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${getSearch.value}&units=metric&appid=2f0ab7dd569278ced30554e7a97314db`
  )
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      getDiv.innerHTML += `<div class="card rounded mt-3" style="width: 18rem;">
  <img src="./cloud.png" class="card-img-top" alt="..." width=100px>
  <div class="card-body">
  <h5 class="card-title">${data.name}</h5>
  <p class="card-text"><span>Temp</span> ${data.main.temp}°C</p>
  <div class="row">
  
  <div class="col-md-6">
  <p class="card-text"><span>Feel</span> ${data.main.feels_like}°C</p>
              </div>
              <div class="col-md-6">
                <p class="card-text"><span>Humidity</span> ${
                  data.main.humidity
                }%</p>
              </div>
              <div class="col-md-6">
                <p class="card-text"><span>Sunrise</span> ${new Date(
                  data.sys.sunrise * 1000
                ).toLocaleTimeString()}</p>
              </div>
              <div class="col-md-6">
                <p class="card-text"><span>Sunset</span> ${new Date(
                  data.sys.sunset * 1000
                ).toLocaleTimeString()}</p>
              </div>
            </div>
  </div>
</div>`;
    })

    .catch((err) => console.log(err));
  getSearch.value = "";
}
