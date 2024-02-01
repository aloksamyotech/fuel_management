import mongoose from "mongoose";
import {  tableName } from "../helpers/constant.js";

const StaffSchema = mongoose.Schema({
    isActive: { type: Boolean, default: true },
    designation: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    qualification: { type: String, required: true },
    reg_number : {type : String , required : false},
    created_at: { type: Date, required: false, default: new Date().getTime() },
    updated_at: { type: Date, required: false, default: new Date().getTime() },
});

export const StaffModel = mongoose.model(tableName.STAFF, StaffSchema);
