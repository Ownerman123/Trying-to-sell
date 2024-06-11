const { User } = require('../models');

const userdata = [
  {
    name: 'yaboi',
    username: 'yaboi',
    email: 'yaboi@gmail.com',
    password: 'pastword',
  },
  {
    name: 'wayne',
    username: 'wayne',
    email: 'waynesworld@gmail.com',
    password: 'partyTimeExcellent',
  },
  {
    name: 'Spongebob',
    username: 'Spongebob',
    email: 'ayeayecaptain@gmail.com',
    password: 'ICantHearYOUUUUU',
  },
  
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
