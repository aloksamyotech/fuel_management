import { addOrder } from "../service/order.js";

export const ordered = async (req, res) => {
  const data = await addOrder(req, res);
  res.send(data);
};
