import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    role: {
        type: String,
        enum: ['superadmin', 'organizer', 'participant', 'judge'],
        default: 'participant',
    },
    avatar: {
        type: String,
    },

}, {timestamps: true});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // if password is not changed, skip hashing
  
  // if (this.password.length < 6) {
  //     return next(new Error("Password must be at least 6 characters long"));
  // }

  this.password = await bcrypt.hash(this.password, 10); // hashing
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) { // custom method to check password
    return await bcrypt.compare(password, this.password); // returns true or false (this.password is that which is in db)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign( // create a JWT token
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model('User', userSchema);