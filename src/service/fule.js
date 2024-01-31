import { massages } from "../helpers/constant.js";
import { FuelModel } from "../model/fuels.js";

export const fuelManagement = async (req, res) => {
  try {
    return await FuelModel.find();
  } catch (error) {
    console.error(error);
    return massages.internal_server_error;
  }
};
