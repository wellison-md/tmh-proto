import { EVENT_LIST } from "../constants";
import { cities } from "./fkCities";
import { pets } from "./fkPets";
import { users } from "./fkUsers";

export const getFake = (data) => {
  const requestTimer = 500 + Math.random() * 2000;

  const response = new Promise((resolve, reject) => {
    setTimeout(() => {
      switch(data) {
        case 'users':
          resolve(users);
          break;
        case 'cities':
          resolve(cities);
          break;
        case 'pets':
          resolve(pets);
          break;
        case 'events':
          resolve(EVENT_LIST);
          break;
        default:
          reject('Something went wrong');
      }
    }, requestTimer);
  });

  return response;
};

export const getByProps = (list, prop, target) => {
  const result = list.find((item) => item[prop] === target);
  return result || [];
};
