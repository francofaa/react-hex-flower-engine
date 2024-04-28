import WINTER_WEATHER_ENGINE from "./engines/winter";

import SPRING_WEATHER_ENGINE from "./engines/spring";

import SUMMER_WEATHER_ENGINE from "./engines/summer";

import AUTUMN_WEATHER_ENGINE from "./engines/autumn";

import HITCHING_WEATHER_ENGINE from "./engines/hitching";

import VAGUE_WEATHER_ENGINE from "./engines/vague";

export const DEFAULT_ENGINE_STORE = [
  WINTER_WEATHER_ENGINE,
  SPRING_WEATHER_ENGINE,
  SUMMER_WEATHER_ENGINE,
  AUTUMN_WEATHER_ENGINE,
  VAGUE_WEATHER_ENGINE,
  HITCHING_WEATHER_ENGINE,
];

export const LOCAL_STORAGE_NAMESPACE = "HEX_FLOWER_ENGINE";

export const LOCAL_STORAGE_BASE = {
  ENGINE: "ENGINE",
  CURRENT_ENGINE: "CURRENT_ENGINE",
};

export const LOCAL_STORAGE_ENGINE_KEY = `${LOCAL_STORAGE_NAMESPACE}__${LOCAL_STORAGE_BASE.ENGINE}`;

export const LOCAL_STORAGE_CURRENT_ENGINE_KEY = `${LOCAL_STORAGE_NAMESPACE}__${LOCAL_STORAGE_BASE.CURRENT_ENGINE}`;

export const ACTIONS = {
  RUN: "RUN_ENGINE",
  RANDOM: "RANDOM_HEX",
};

export const RUN_ENGINE_ROLL = "sum(2d6)";

export const RANDOM_HEX_ROLL = "1d19";

export const ROLL_DELAY = 1000;

export const DEFAULT_STARTING_HEX = 1;

export const ROLL_DIRECTION_ORDER = [
  "upRight",
  "downRight",
  "down",
  "downLeft",
  "upLeft",
  "up",
];
