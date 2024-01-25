import mongoose from "mongoose";

const UserSchema = mongoose.Schema({

    firstname: { type: String, required: true},
    lastname: { type: String, required: true  },
    email: { type: String, required: true, trim: true, },
    phone: { type: String, required: false, trim: true},
    password: { type: String, trim: true, required: true },
    created_at: { type: Date, required: false, default: new Date().getTime() },
    updated_at: { type: Date, required: false, default: new Date().getTime()},

});

export const UserModel = mongoose.model('User', UserSchema);