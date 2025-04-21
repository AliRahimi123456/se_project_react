import { scryRenderedComponentsWithType } from "react-dom/test-utils";

export const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../assets/day/clear.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "cloudy",
    url: new URL("../assets/day/cloudy.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL("../assets/day/clear.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "cloudy",
    url: new URL("../assets/day/cloudy.svg", import.meta.url).href,
  },
  // condition for the night weather

  {
    night: true,
    condition: "clear",
    url: new URL("../assets/night/clear.svg", import.meta.url).href,
  },
  {
    night: true,
    condition: "cloudy",
    url: new URL("../assets/night/cloudy.svg", import.meta.url).href,
  },
  {
    night: false,
    condition: "clear",
    url: new URL("../assets/night/clear.svg", import.meta.url).href,
  },
  {
    night: false,
    condition: "cloudy",
    url: new URL("../assets/night/cloudy.svg", import.meta.url).href,
  },

  {
    day: true,
    condition: "rainy",
    url: new URL("../assets/day/rainy.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "thunderstorm",
    url: new URL("../assets/day/thunderstorm.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "rainy",
    url: new URL("../assets/day/rainy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "thunderstorm",
    url: new URL("../assets/day/thunderstorm.png", import.meta.url).href,
  },

  {
    day: true,
    condition: "rainy",
    url: new URL("../assets/night/rainy.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "thunderstorm",
    url: new URL("../assets/night/thunderstorm.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "rainy",
    url: new URL("../assets/night/rainy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "thunderstorm",
    url: new URL("../assets/night/thunderstorm.png", import.meta.url).href,
  },

  {
    day: true,
    condition: "snow",
    url: new URL("../assets/day/snow.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "foggy",
    url: new URL("../assets/day/foggy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL("../assets/day/snow.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "foggy",
    url: new URL("../assets/day/foggy.png", import.meta.url).href,
  },

  {
    day: true,
    condition: "snow",
    url: new URL("../assets/night/snow.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "foggy",
    url: new URL("../assets/night/foggy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL("../assets/night/snow.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "foggy",
    url: new URL("../assets/night/foggy.png", import.meta.url).href,
  },
];
export const defaultWeatherOptions = {
  day: {
    url: new URL("../assets/day/default.png", import.meta.url).href,
  },
  night: {
    url: new URL("../assets/night/default.png", import.meta.url).href,
  },
};

export const coordinates = {
  latitude: 40.249199,
  longitude: -75.646759,
};
export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? " https://api.wApplication.hardsoft.nu"
    : "http://localhost:3001";

export const APIkey = "78edb44e2e3f73c1c0df5afc784d688f";
