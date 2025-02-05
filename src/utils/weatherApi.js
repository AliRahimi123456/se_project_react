export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = { F: data.main.temp };
  result.type = getWeatherType(result.temp.F);
  result.condition = data.weather[0].main.toLowerCase();
  result.isDay = isDay(data.sys, Date.now());
  return result;
};

const isDay = ({ sunrise, sunset }, now) => {
  //   const now = Date.now();
  return sunrise * 1000 < now && now < sunset * 1000;
};
const getWeatherType = (temperature) => {
  if (temperature > 86) {
    return "hot";
  } else if ((temperature) => 66 && temperature < 85) {
    return "warm";
  } else {
    return "cold";
  }
};

// https://api.openweathermap.org/data/2.5/weather?lat=40.249199&lon=-75.646759&units=imperial&appid=2a1e0bbf537c37c25b727ddc7ec9a583
// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}
