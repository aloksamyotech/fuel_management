import { createSalesData, getAllSalesData } from "../service/sales.js";

export const addSales = async (req, res) => {
  const data = await createSalesData(req, res);
  res.send(data);
};

export const fetchAllSales = async (req, res) => {
  const data = await getAllSalesData(req, res);
  res.send(data);
};
