import { BASE_URL } from '../constants';

export const pets = [
  {
    id: 1,
    nick: 'Alfred',
    category: 'cat',
    gender: 'male',
    age: '0.5yo',
    rescue_date: '2023-05-07',
    image: `${BASE_URL}/imgs/carousel/@480p__Alfredo.jpg`,
    galery: [
      'https://cdn.pixabay.com/photo/2016/03/28/10/05/kitten-1285341_640.jpg',
      'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
      'https://cdn.pixabay.com/photo/2015/06/07/19/42/animal-800760_640.jpg',
      'https://cdn.pixabay.com/photo/2016/11/29/01/10/kitten-1866475_640.jpg',
      'https://cdn.pixabay.com/photo/2019/10/17/14/52/kitten-4557097_640.jpg',
    ],
    vaccins: [
      'vaccin1',
      'vaccin4',
    ]
  },
  {
    id: 2,
    nick: 'Piu piu',
    category: 'bird',
    gender: 'male',
    age: 'unknown',
    rescue_date: '2022-01-17',
    image: `${BASE_URL}/imgs/carousel/@480p__bird2.jpg`,
    galery: [
      'https://images.pexels.com/photos/4430026/pexels-photo-4430026.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/6398824/pexels-photo-6398824.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/6477610/pexels-photo-6477610.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    vaccins: [
      'vaccin1',
    ]
  },
  {
    id: 3,
    nick: 'Batman',
    category: 'dog',
    gender: 'female',
    age: '2.5yo',
    rescue_date: '2022-10-22',
    image: `${BASE_URL}/imgs/carousel/@480p__batman.jpg`,
    galery: [
      'https://images.pexels.com/photos/10201413/pexels-photo-10201413.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      'https://images.pexels.com/photos/260600/pexels-photo-260600.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      'https://images.pexels.com/photos/16652416/pexels-photo-16652416/free-photo-of-animal-bicho-fofo-bonitinho.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    vaccins: [
      'vaccin1',
    ]
  },
  {
    id: 4,
    nick: 'Fisher',
    category: 'fish',
    gender: 'male',
    age: 'unknown',
    rescue_date: '2023-05-22',
    image: `${BASE_URL}/imgs/carousel/@480p__fisher.jpg`,
    galery: [
      `${BASE_URL}/imgs/carousel/@480p_fisher2.jpg`,
      'https://images.pexels.com/photos/7186210/pexels-photo-7186210.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    ],
    vaccins: []
  },
  {
    id: 5,
    nick: 'Mr speed',
    category: 'wild',
    gender: 'male',
    age: '3yo',
    rescue_date: '2020-12-20',
    image: `${BASE_URL}/imgs/carousel/@480p_mr-speedy.jpg`,
    galery: [
      'https://images.pexels.com/photos/914794/pexels-photo-914794.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2253789/pexels-photo-2253789.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3487177/pexels-photo-3487177.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    vaccins: []
  },
  {
    id: 6,
    nick: 'Larinha',
    category: 'bird',
    gender: 'female',
    age: '1.2yo',
    rescue_date: '2022-04-03',
    image: `${BASE_URL}/imgs/carousel/@480p__larinha.jpg`,
    galery: [
      'https://images.pexels.com/photos/3250454/pexels-photo-3250454.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2226006/pexels-photo-2226006.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1438163/pexels-photo-1438163.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    vaccins: []
  },
  {
    id: 7,
    nick: 'Cookie negresco',
    category: 'dog',
    gender: 'male',
    age: '2.3yo',
    rescue_date: '2023-02-13',
    image: 'https://images.pexels.com/photos/3715587/pexels-photo-3715587.jpeg?auto=compress&cs=tinysrgb&w=600',
    galery: [
      'https://images.pexels.com/photos/2802416/pexels-photo-2802416.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3196887/pexels-photo-3196887.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/7969474/pexels-photo-7969474.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2004393/pexels-photo-2004393.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/7564118/pexels-photo-7564118.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    vaccins: [
      'vaccin1',
      'vaccin3',
      'castration'
    ]
  },
  {
    id: 8,
    nick: 'Floco de neve',
    category: 'dog',
    gender: 'female',
    age: '3.1yo',
    rescue_date: '2023-09-20',
    image: 'https://images.pexels.com/photos/3812207/pexels-photo-3812207.jpeg?auto=compress&cs=tinysrgb&w=600',
    galery: [
      'https://images.pexels.com/photos/2526137/pexels-photo-2526137.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2896179/pexels-photo-2896179.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3693843/pexels-photo-3693843.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3693441/pexels-photo-3693441.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    vaccins: [
      'castration',
      'vaccin1',
      'vaccin8,'
    ]
  },
  {
    id: 9,
    nick: 'Shen long',
    category: 'wild',
    gender: 'female',
    age: '1.7yo',
    rescue_date: '2021-02-02',
    image: 'https://images.pexels.com/photos/45246/green-tree-python-python-tree-python-green-45246.jpeg?auto=compress&cs=tinysrgb&w=600',
    galery: [
      'https://images.pexels.com/photos/1040659/pexels-photo-1040659.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/612964/pexels-photo-612964.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/60512/green-tree-python-snake-python-morelia-viridis-60512.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2062314/pexels-photo-2062314.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    vaccins: []
  },
  {
    id: 10,
    nick: 'Perna longa',
    category: 'wild',
    gender: 'male',
    age: '0.4yo',
    rescue_date: '2022-11-12',
    image: 'https://images.pexels.com/photos/4001296/pexels-photo-4001296.jpeg?auto=compress&cs=tinysrgb&w=600',
    galery: [
      'https://images.pexels.com/photos/3828097/pexels-photo-3828097.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/6845638/pexels-photo-6845638.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/4588055/pexels-photo-4588055.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    vaccins: [
      'castration'
    ]
  },
  {
    id: 11,
    nick: 'Edviges',
    category: 'wild',
    gender: 'female',
    age: '0.9yo',
    rescue_date: '2022-12-03',
    image: 'https://images.pexels.com/photos/59996/barn-owl-owl-bird-animal-59996.jpeg?auto=compress&cs=tinysrgb&w=600',
    galery: [
      'https://images.pexels.com/photos/106685/pexels-photo-106685.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1376986/pexels-photo-1376986.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1526404/pexels-photo-1526404.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    vaccins: []
  },
  {
    id: 12,
    nick: 'Suzy',
    category: 'wild',
    gender: 'female',
    age: '0.9yo',
    rescue_date: '2023-02-15',
    image: 'https://images.pexels.com/photos/16750620/pexels-photo-16750620/free-photo-of-animal-bicho-camaleao-ecologia.jpeg?auto=compress&cs=tinysrgb&w=600',
    galery: [
      'https://images.pexels.com/photos/16750622/pexels-photo-16750622/free-photo-of-animal-bicho-borrao-mancha.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/16750688/pexels-photo-16750688/free-photo-of-animal-bicho-camaleao-detalhes.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    vaccins: []
  },
  {
    id: 13,
    nick: 'Salsicha',
    category: 'dog',
    gender: 'male',
    age: '1.1yo',
    rescue_date: '2023-01-04',
    image: 'https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?auto=compress&cs=tinysrgb&w=600',
    galery: [
      'https://images.pexels.com/photos/3104709/pexels-photo-3104709.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/976921/pexels-photo-976921.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1139794/pexels-photo-1139794.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    vaccins: [
      'vaccin',
      'vaccin2',
      'vaccin4',
    ]
  },
  {
    id: 14,
    nick: 'Galileu',
    category: 'dog',
    gender: 'male',
    age: '0.5yo',
    rescue_date: '2023-01-04',
    image: 'https://images.pexels.com/photos/4587987/pexels-photo-4587987.jpeg?auto=compress&cs=tinysrgb&w=600',
    galery: [
      'https://images.pexels.com/photos/2171583/pexels-photo-2171583.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3930940/pexels-photo-3930940.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/4587967/pexels-photo-4587967.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/4587973/pexels-photo-4587973.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/4587977/pexels-photo-4587977.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    vaccins: [
      'vaccin',
      'vaccin2',
      'vaccin4',
    ]
  },
  {
    id: 15,
    nick: 'Sombra',
    category: 'cat',
    gender: 'male',
    age: '0.5yo',
    rescue_date: '2023-04-24',
    image: 'https://images.pexels.com/photos/3974516/pexels-photo-3974516.jpeg?auto=compress&cs=tinysrgb&w=600',
    galery: [
      'https://images.pexels.com/photos/2539094/pexels-photo-2539094.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1287365/pexels-photo-1287365.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1123999/pexels-photo-1123999.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2257262/pexels-photo-2257262.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1931369/pexels-photo-1931369.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1510543/pexels-photo-1510543.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1715092/pexels-photo-1715092.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1931367/pexels-photo-1931367.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    vaccins: [
      'vaccin',
      'vaccin2',
      'vaccin4',
      'castration'
    ]
  },
  {
    id: 16,
    nick: 'Miranha',
    category: 'wild',
    gender: 'male',
    age: 'unknown',
    rescue_date: '2021-08-17',
    image: 'https://images.pexels.com/photos/3234842/pexels-photo-3234842.jpeg?auto=compress&cs=tinysrgb&w=600',
    galery: [
      'https://images.pexels.com/photos/219959/pexels-photo-219959.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3672148/pexels-photo-3672148.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2577275/pexels-photo-2577275.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    vaccins: []
  },
]
