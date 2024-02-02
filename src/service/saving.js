import { massages } from "../helpers/constant.js";
import { SavingModel } from "../model/saving.js";

export const createSavingData = async (req, res) => {
  try {
    const { bank, amount, note, pass_code } = req.body;

    const newSaving = new SavingModel({
      bank,
      amount,
      note,
      pass_code,
    });

    return await newSaving.save();
  } catch (error) {
    console.error(error);
    return massages.internal_server_error;
  }
};

export const getAllSavingData = async (req, res) => {
  try {
    return await SavingModel.find();
  } catch (error) {
    console.error(error);
    return massages.internal_server_error;
  }
};
