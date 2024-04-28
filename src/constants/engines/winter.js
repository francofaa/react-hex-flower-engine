import { DEFAULT_DIRECTION_MAP as directions } from "./shared";

const id = "00001";

const name = "Winter";

const start = 1;

const version = "1.2.2";

const nodes = [
// TYPICAL MILD
  {
    id: 1,
    label: "Clear, cold",
    style: {
      backgroundColor: "#ddddde",
      icon: "day",
    },
    map: {
      up: 5,
      upRight: 3,
      downRight: 3,
      down: 1,
      downLeft: 2,
      upLeft: 2,
    },
  },
  {
    id: 2,
    label: "Frigid, icy",
    style: {
      backgroundColor: "#ddddde",
      icon: "day-cloudy-windy",
    },
    map: {
      up: 7,
      upRight: 5,
      downRight: 1,
      down: 17,
      downLeft: 11,
      upLeft: 4,
    },
  },
  {
    id: 3,
    label: "Partly cloudy, cold",
    style: {
      backgroundColor: "#ddddde",
      icon: "day-partly-cloudy",
    },
    map: {
      up: 8,
      upRight: 6,
      downRight: 9,
      down: 18,
      downLeft: 1,
      upLeft: 5,
    },
  },
  {
    id: 5,
    label: "Freezing rain",
    modifiers: {
      Wet: "Fires are harder to start."
      Exhaustion: "STR save to avoid taking fatigue",
    },
    style: {
      backgroundColor: "#ddddde",
      icon: "day-cloudy",
    },
    map: {
      up: 10,
      upRight: 8,
      downRight: 3,
      down: 1,
      downLeft: 2,
      upLeft: 7,
    },
  },
  {
    id: 4,
    label: "Cold wind, freezing rain",
    modifiers: {
      Wet: "Fires are harder to start."
      Exhaustion: "STR save to avoid taking fatigue",
    },
    style: {
      backgroundColor: "#ddddde",
      icon: "cloudy-and-windy",
    },
    map: {
      up: 9,
      upRight: 7,
      downRight: 2,
      down: 14,
      downLeft: 16,
      upLeft: 1,
    },
  },
  {
    id: 7,
    label: "Bitter cold, silent",
    style: {
      backgroundColor: "#ddddde",
      icon: "wind",
    },
    map: {
      up: 12,
      upRight: 10,
      downRight: 5,
      down: 2,
      downLeft: 4,
      upLeft: 9,
    },
  },
  {
    id: 6,
    label: "Frigid mist",
    style: {
      backgroundColor: "#ddddde",
      icon: "day-cloudy-foggy",
    },
    modifiers: {
      Vision: "Getting lost and surprised by encounters more likely",
    },
    map: {
      up: 11,
      upRight: 1,
      downRight: 14,
      down: 16,
      downLeft: 3,
      upLeft: 8,
    },
  },
  {
    id: 8,
    label: "Heavy clouds",
    style: {
      backgroundColor: "#ddddde",
      icon: "cloudy",
    },
    map: {
      up: 13,
      upRight: 11,
      downRight: 6,
      down: 3,
      downLeft: 5,
      upLeft: 10,
    },
  },
  {
    id: 10,
    label: "No Change in Weather",
    style: {
      backgroundColor: "#7777ff",
      icon: "arrow-loading",
    },
    map: {
      up: 15,
      upRight: 13,
      downRight: 8,
      down: 5,
      downLeft: 7,
      upLeft: 12,
    },
  },
// LEFT LOBE NO WEATHER
  {
    id: 12,
    label: "Whipping freezing winds",
    style: {
      backgroundColor: "#eabcd5",
      icon: "day",
    },
    modifiers {
      Exhaustion: "STR save to avoid fatigue",
      Slow: "Travel is slower.",
    },
    map: {
      up: 17,
      upRight: 15,
      downRight: 10,
      down: 7,
      downLeft: 9,
      upLeft: 14,
    },
  },
  {
    id: 9,
    label: "Deep freeze, hoarfrost",
    modifiers: {
      Exhaustion: "STR save to avoid fatigue",
    },
    style: {
      backgroundColor: "#eabcd5",
      icon: "day",
    },
    map: {
      up: 14,
      upRight: 12,
      downRight: 7,
      down: 4,
      downLeft: 18,
      upLeft: 3,
    },
  },
  {
    id: 14,
    label: "Frigid mist",
    modifiers: {
      Vision: "Getting lost and surprised by encounters more likely",
    },
    style: {
      backgroundColor: "#eabcd5",
      icon: "day",
    },
    map: {
      up: 4,
      upRight: 17,
      downRight: 12,
      down: 9,
      downLeft: 19,
      upLeft: 6,
    },
  },
// RIGHT LOBE HAS WEATHER
  {
    id: 13,
    label: "Steady snow; reduced visibility.",
    modifiers: {
      Vision: "Getting lost and surprised by encounters more likely",
      Slow: "Travel is slower."
      Wet: "Fires are harder to start."
    },
    style: {
      backgroundColor: "#77bc77",
      icon: "rain",
    },
    map: {
      up: 18,
      upRight: 16,
      downRight: 11,
      down: 8,
      downLeft: 10,
      upLeft: 15,
    },
  },
  {
    id: 11,
    label: "Icy snow; reduced visibility; frozen ground.",
    modifiers: {
      Vision: "Getting lost and surprised by encounters more likely",
      Slow: "Travel is slower."
      Wet: "Fires are harder to start."
      Hazard: "Travel is dangerous.",
    },
    style: {
      backgroundColor: "#77bc77",
      icon: "day-thunderstorms",
    },
    map: {
      up: 16,
      upRight: 2,
      downRight: 17,
      down: 6,
      downLeft: 8,
      upLeft: 13,
    },
  },
  {
    id: 16,
    label: "Steady snow",
    modifiers: {
      Vision: "Getting lost and surprised by encounters more likely",
      Slow: "Travel is slower."
      Wet: "Fires are harder to start."
      Hazard: "Travel is dangerous.",
    },
    style: {
      backgroundColor: "#77bc77",
      icon: "thunderstorms",
    },
    map: {
      up: 6,
      upRight: 4,
      downRight: 19,
      down: 11,
      downLeft: 13,
      upLeft: 18,
    },
  },
// TOP COLLAR SEVERE WEATHER
  {
    id: 15,
    label:
      "Snowstorm",
    modifiers: {
      Vision: "Getting lost and surprised by encounters more likely",
      Slow: "Travel is slower."
      Wet: "Fires are harder to start."
      Hazard: "Travel is dangerous.",
      Exhaustion: "STR save to avoid fatigue",
    },
    style: {
      backgroundColor: "#ffcf77",
      icon: "thundershowers",
    },
    map: {
      up: 19,
      upRight: 18,
      downRight: 13,
      down: 10,
      downLeft: 12,
      upLeft: 17,
    },
  },
  {
    id: 17,
    label:
      "Snowstorm",
    modifiers: {
      Vision: "Getting lost and surprised by encounters more likely",
      Slow: "Travel is slower."
      Wet: "Fires are harder to start."
      Hazard: "Travel is dangerous.",
      Exhaustion: "STR save to avoid fatigue",
    },
    style: {
      backgroundColor: "#ffcf77",
      icon: "thundershowers",
    },
    map: {
      up: 2,
      upRight: 19,
      downRight: 15,
      down: 12,
      downLeft: 14,
      upLeft: 11,
    },
  },
  {
    id: 18,
    label:
      "Snowstorm",
    modifiers: {
      Vision: "Getting lost and surprised by encounters more likely",
      Slow: "Travel is slower."
      Wet: "Fires are harder to start."
      Hazard: "Travel is dangerous.",
      Exhaustion: "STR save to avoid fatigue",
    },
    style: {
      backgroundColor: "#ffcf77",
      icon: "thundershowers",
    },
    map: {
      up: 3,
      upRight: 9,
      downRight: 16,
      down: 13,
      downLeft: 15,
      upLeft: 19,
    },
  },
  {
    id: 19,
    label:
      "Blizzard",
    modifiers: {
      Vision: "Getting lost and surprised by encounters more likely",
      Slow: "Travel is slower."
      Wet: "Fires are harder to start."
      Hazard: "Travel is dangerous.",
      Exhaustion: "STR save to avoid fatigue",
    },
    style: {
      backgroundColor: "#ff7777",
      icon: "tornado",
    },
    map: {
      up: 19,
      upRight: 19,
      downRight: 18,
      down: 15,
      downLeft: 17,
      upLeft: 19,
    },
  },
];

export default {
  id,
  name,
  directions,
  nodes,
  start,
  version,
};