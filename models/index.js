const User = require('./user');
const Post = require('./listing');
const Chat = require('./chat');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
})

Post.hasMany(Chat, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Chat.belongsTo(Post, {
    foreignKey: 'post_id'
});

module.exports = {User , Post , Chat};
