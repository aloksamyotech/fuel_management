import { massages } from "../helpers/constant.js";
import { FuelModel } from "../model/fuels.js";

export const fuelManagement = async (req, res) => {
  try {
    const fuelData = await FuelModel.find();
    res.json(fuelData);
  } catch (error) {
    console.error(error);
    res.send(massages.internal_server_error);
  }
};
