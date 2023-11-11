const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypts');

const userSchema = new Schema({
    username: String,
    email: String,
    password: String
});

userSchema.method.encryptPassword = async (password) => {
    const salt = await(bcrypt.genSalt(10));
    return bcrypt.hash(password, salt)

};

userSchema.method.validatePassword = function (password) {
    return bcrypt.compare(password, this.password);
}

module.exports = model('User', userSchema)