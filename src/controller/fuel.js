import { fuelManagement } from "../service/fule.js";

export const fuelData = async (req, res) => {
  const data = await fuelManagement(req, res);
  res.send(data);
};
