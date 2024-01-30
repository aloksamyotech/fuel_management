import mongoose from "mongoose";
import { tableName } from "../helpers/constant.js";
// const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const supplierSchema = mongoose.Schema({
  name: { type: String, required: true },
  representative: { type: String, required: false },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  // status: { type: Number, required: true },
  supplier_type: { type: ObjectId, required: true },
  isActive: { type: Boolean, default: true },
});

export const SupplierModel = mongoose.model(tableName.SUPPLIER, supplierSchema);
