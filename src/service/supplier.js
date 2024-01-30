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

    const savedSupplier = await newSupplier.save();

    res.json(savedSupplier);
  } catch (error) {
    console.error(error),
      res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllSupplierDetails = async (req, res) => {
  try {
    const Data = await SupplierModel.find();
    res.json(Data);
  } catch (error) {
    console.error(error);
    res.send(massages.internal_server_error);
  }
};
