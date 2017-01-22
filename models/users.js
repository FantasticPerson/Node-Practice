/**
 * Created by wdd on 2017/1/18.
 */
var User = require('../lib/mongo').User;
module.exports = {
    create:function create(user){
        return User.create(user).exec();
    },
    getUserByName:function getUserByName(name){
        return User
            .findOne({name:name})
            .addCreatedAt()
            .exec();
    }
};