import { massages } from "../helpers/constant.js";
import { StatusModel } from "../model/supplier_status.js";

export const supplier_status = async (req, res) => {
  try {
    return await StatusModel.find();
  } catch (error) {
    console.error(error);
    return massages.internal_server_error;
  }
};
