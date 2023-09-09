export const BASE_URL = 'http://localhost:5173';
export const CEILING_PETCOINS = 11250;
export const EVENT_LIST = [
  `${BASE_URL}/imgs/eventBanners/event1.jpg`,
  `${BASE_URL}/imgs/eventBanners/event2.jpg`,
  `${BASE_URL}/imgs/eventBanners/event3.jpg`,
  `${BASE_URL}/imgs/eventBanners/event4.jpg`,
];
export const USER_TEMPLATE = {
  id: 0,
  email: '',
  pswd: '',
  avatar: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 8)}.jpg`,
  isActive: true,
  isVolunteer: false,
  petCoins: 2,
  pets: [],
};
