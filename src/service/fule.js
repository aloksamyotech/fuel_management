import { fule_type, massages } from "../helpers/constant.js";
import { FuelModel } from "../model/fuels.js";
import { logger } from "../../app.js";

export const fuelManagement = async (req, res) => {
  try {
    return await FuelModel.find();
  } catch (error) {
    console.error(error);
    logger.error(`${error.message}\n${error.stack}`);
    return massages.internal_server_error;
  }
};
