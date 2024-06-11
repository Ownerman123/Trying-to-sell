const { User } = require('../models');

const userdata = [
  {
    name: 'yaboi',
    email: 'yaboi@gmail.com',
    password: 'pastword',
  },
  {
    name: 'wayne',
    email: 'waynesworld@gmail.com',
    password: 'partyTimeExcellent',
  },
  {
    name: 'Spongebob',
    email: 'ayeayecaptain@gmail.com',
    password: 'ICantHearYOUUUUU',
  },
  
];

const seedUsers = async () => {
  await User.bulkCreate(userdata);
} 

module.exports = seedUsers;
