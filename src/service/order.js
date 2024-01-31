// import { massages } from "../helpers/constant.js";
import { OrderModel } from "../model/order.js";

export const addOrder = async (req, res) => {
  try {
    const { type, liters, cost, supplier, fuel } = req?.body;

    const newOrder = new OrderModel({
      type,
      liters,
      cost,
      supplier,
      fuel,
    });

    const savedOrder = await newOrder.save();

    res.json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
