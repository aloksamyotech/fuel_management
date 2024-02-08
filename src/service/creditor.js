import { massages } from "../helpers/constant.js";
import { CreditorModel } from "../model/creditor.js";

export const saveCreditor = async (req, res) => {
  const { type, name, email, phone, office_address } = req?.body;

  const isAlreadyExist = await CreditorModel.findOne({
    email: email,
  });

  if (isAlreadyExist) {
    return massages.already_exist;
  }

  const newCreditor = new CreditorModel({
    type,
    name,
    email,
    phone,
    office_address,
  });

  return await newCreditor.save();
};

export const allCreditor = async (req, res) => {
  return await CreditorModel.find().sort({ created_at: -1 });
};
