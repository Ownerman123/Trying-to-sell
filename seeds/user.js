const { User } = require('../models');

const userdata = [
  {
    username: 'yaboi',
    name: 'yaboi',
    email: 'yaboi@gmail.com',
    password: 'pastword',
  },
  {
    username: 'wayne',
    name: 'wayne',
    email: 'waynesworld@gmail.com',
    password: 'partyTimeExcellent',
  },
  {
    username: 'spongebob',
    name: 'Spongebob',
    email: 'ayeayecaptain@gmail.com',
    password: 'ICantHearYOUUUUU',
  },
];

const seedUsers = async () => {
  await User.bulkCreate(userdata);
} 

module.exports = seedUsers;
