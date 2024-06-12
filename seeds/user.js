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
  {
    name: 'asdf',
    username: 'asdf',
    email: 'asdf@asdf.com',
    password: 'asdf'
  }
];

const seedUsers = async () => {
  await User.bulkCreate(userdata);
} 

module.exports = seedUsers;
