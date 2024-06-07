const User = require('./user');
const Listing = require('./listing');
const Chat = require('./chat');

User.hasMany(Listing, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Listing.belongsTo(User, {
    foreignKey: 'user_id'
})

Listing.hasMany(Chat, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Chat.belongsTo(Listing, {
    foreignKey: 'post_id'
});

module.exports = {User , Listing , Chat};
