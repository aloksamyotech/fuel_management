import { fuelManagement } from "../service/fule.js";

export const fuelData = async (req, res) => {
  console.log("this is my api");
  const data = await fuelManagement(req, res);
  res.send(data);
};
