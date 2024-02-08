import { massages } from "../helpers/constant.js";
import { SupplierModel } from "../model/supplier.js";

export const addSupplier = async (req, res) => {
  try {
    const { name, representative, phone, email, address, supplier_type } =
      req.body;

    const newSupplier = new SupplierModel({
      name,
      representative,
      phone,
      email,
      address,
      supplier_type,
    });

    return await newSupplier.save();
  } catch (error) {
    console.error(error);
    return massages.internal_server_error;
  }
};

export const getAllSupplierDetails = async (req, res) => {
  try {
    return await SupplierModel.find().sort({ created_at: -1 });
  } catch (error) {
    console.error(error);
    return massages.internal_server_error;
  }
};
