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
        default:
          reject('Something went wrong');
      }
    }, requestTimer);
  });

  return response;
};
