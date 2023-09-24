import { CEILING_PETCOINS } from './constants';

export const calculatePetcoins = (rescueDate = new Date()) => {
  const MILISECOND_TO_SECOND = 1000;
  const SECOND_TO_MINUTE = 60;
  const MINUTE_TO_HOUR = 60;
  const HOUR_TO_DAY = 24;

  const today = new Date();
  const rescDate = new Date(rescueDate);

  const dateInterval = Math.abs(today - rescDate);
  const dayCount = Math.ceil(dateInterval /
    (MILISECOND_TO_SECOND * SECOND_TO_MINUTE * MINUTE_TO_HOUR * HOUR_TO_DAY));

  const petCoins = CEILING_PETCOINS / dayCount;

  if (petCoins <= 30) return 30;
  return Math.floor(petCoins);
};
