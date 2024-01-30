import { massages } from "../helpers/constant.js";
import { StatusModel } from "../model/supplier_status.js";

export const supplier_status = async (req, res) => {
  try {
    const Data = await StatusModel.find();
    res.json(Data);
  } catch (error) {
    console.error(error);
    res.send(massages.internal_server_error);
  }
};
