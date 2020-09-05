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
      success: resolve,
      error: reject,
    });
  });
}

$("#btn").on("click", () => {
  const userPromise = getUser("hibiken");
  userPromise.then((user) => {
    const weatherPromise = getWeather(user);
    weatherPromise.then((weather) => {
      updateUI({
        user,
        weather: weather.city,
      });
    });
    weatherPromise.catch(showError);
  });
  userPromise.catch(showError);
});
