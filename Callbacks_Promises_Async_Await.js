function add (x,y){
    return x + y
}

const me = add 
const you = add 
const someoneElse = add

me(2,3)         // 5 - Press the button, run the machine.
you(2,3)        // 5 - Press the button, run the machine.
someoneElse(2,3)// 5 - Press the button, run the machine.

// origin add and each of the variables we create are pointing to the same spot in memory
//exact same thing under different names


function addFive(x,addReference){
    return addReference(x, 5)
}
console.log(addFive(10,add))


function higherOrderFunction(x,callback){
    return callback(5,x)
}

higherOrderFunction(10,add)


// examples: 

[1,2,3].map((i)=> i + 5)
//map will be a higher order function
//(i)=>i+5 will be a callback function

_.filter([1,2,3,4],(n)=> n % 2 === 0);

$('#btn').on('click',()=>(
    console.log('Callbacks are everywhere')
))


//two usages for callback function:
//1.passing one values return another value
//2.delay exectuaction until a certain time, particular event happened.


function getUser(id, onSuccess, onFailure) {
  $.getJSON({
    url: `https://api.github.com/users/${id}`,
    success: onSuccess,
    error: onFailure,
  });
}

//giving your number to a resturant is like giving a callback function to a third party services.
//once the callback function in the third party hand, you kind lost lots of controls. 
//instead of giving your number to a resturant, they give you a resturant buzzer

//3 states: pending, fulfilled and rejected

//promises exist makes asynchronous request more managable

//how to create a promise?
//how to change status of the promis?
const promise = new Promise((resolve,reject)=>{
    resolve() //fullfiled
    reject()// rejected
})

//chainging

import $ from "jquery";

const id = "tylermcginnis";
function showError(e) {
  console.warn("Error", e);
}
function getLocationURL([city, state]) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city},${state}&APPID=7c748e66ec4489f390a888a83eb4a0f4`;
}

function updateUI(info) {
  $("#app").text(JSON.stringify(info));
}

function getUser(id, onSuccess, onFailure) {
  $.getJSON({
    url: `https://api.github.com/users/${id}`,
    success: onSuccess,
    error: onFailure,
  });
}
function getWeather(user, onSuccess, onFailure) {
  $.getJSON({
    url: getLocationURL(user.location.split(",")),
    success: onSuccess,
    error: onFailure,
  });
}

$("#btn").on("click", () => {
  getUser(
    "hibiken",
    (user) => {
      getWeather(
        user,
        (weather) => {
          updateUI({
            user,
            weather: weather.city,
          });
        },
        showError
      );
    },
    showError
  );
});

