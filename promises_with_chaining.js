// resolve is just a function.
// Any arguments you pass to it will be passed along to the function given to .then. 

//What that means is that inside of getWeather, 
// if we invoke resolve ourself, we can pass to it weather and user. 
//Then, the second .then method in our chain will receive both user and weather as an argument.
import $ from "jquery";

function showError(e) {
  console.warn("Error", e);
}
function getLocationURL([city, state]) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city},${state}&APPID=7c748e66ec4489f390a888a83eb4a0f4`;
}

function updateUI(info) {
  $("#app").text(JSON.stringify(info));
}
function getUser(id) {
  return new Promise((resolve, reject) => {
    $.getJSON({
      url: `https://api.github.com/users/${id}`,
      success: resolve,
      error: reject,
    });
  });
}

function getWeather(user) {
  return new Promise((resolve, reject) => {
    $.getJSON({
      url: getLocationURL(user.location.split(",")),
      success(weather) {
        resolve({ user, weather: weather.city });
      },
      error: reject,
    });
  });
}

$("#btn").on("click", () => {
  getUser("hibiken")
    .then(getWeather)
    .then((data) => {
      updateUI(data);
    })
    .catch(showError);
});

//async await
// $("#btn").on("click", async () => {
//   try {
//     const user = await getUser("hibiken");
//     const weather = await getWeather(user);
//     updateUI({
//       user,
//       weather,
//     });
//   } catch (e) {
//     showError(e);
//   }
// });

