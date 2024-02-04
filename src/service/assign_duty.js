import { massages } from "../helpers/constant.js";
import { DutyModel } from "../model/assign_duty.js";

export const createDuty = async (req, res) => {
  try {
    const { current_reading, pump, fuel, staff } = req.body;

    const newDuty = new DutyModel({
      current_reading,
      pump,
      fuel,
      staff,
    });

    return await newDuty.save();
  } catch (error) {
    console.error(error);
    return massages.internal_server_error;
  }
};

export const getAllDuty = async (req, res) => {
  try {
    return await DutyModel.aggregate([
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
