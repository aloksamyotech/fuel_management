// import { massages } from "../helpers/constant.js";
import { massages } from "../helpers/constant.js";
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

    return await newOrder.save();
  } catch (error) {
    console.error(error);
    return massages.internal_server_error;
  }
};
