import { createDuty, getAllDuty } from "../service/assignDuty.js";

export const addDuty = async (req, res) => {
  const data = await createDuty(req, res);
  res.send(data);
};

export const fetchAllDuty = async (req, res) => {
  const data = await getAllDuty(req, res);
  res.send(data);
};
