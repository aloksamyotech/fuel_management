import { massages } from "../helpers/constant.js";
import { SalesModel } from "../model/sales.js";

export const createSalesData = async (req, res) => {
  try {
    const { liter, amount, staff, fuel, pump } = req.body;

    const newSales = new SalesModel({
      liter,
      amount,
      staff,
      fuel,
      pump,
    });

    return await newSales.save();
  } catch (error) {
    console.error(error);
    return massages.internal_server_error;
  }
};

export const getAllSalesData = async (req, res) => {
  try {
    return await SalesModel.aggregate([
      {
        $lookup: {
          from: "pumps",
          localField: "pump",
          foreignField: "_id",
          as: "pump",
        },
      },
      { $unwind: "$pump" },
      {
        $lookup: {
          from: "fuels",
          localField: "fuel",
          foreignField: "_id",
          as: "fuel",
        },
      },
      { $unwind: "$fuel" },
      {
        $lookup: {
          from: "staffs",
          localField: "staff",
          foreignField: "_id",
          as: "staff",
        },
      },
      { $unwind: "$staff" },
      { $sort: { _id: -1 } },
    ]);
  } catch (error) {
    console.error(error);
    return massages.internal_server_error;
  }
};
