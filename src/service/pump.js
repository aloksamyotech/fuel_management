import { massages } from "../helpers/constant.js";
import { PumpModel } from "../model/pump.js";

export const addPumpData = async (req, res) => {
  try {
    const { code, desc, status, fuel } = req.body;

    const newPump = new PumpModel({
      code,
      desc,
      status,
      fuel,
    });

    return await newPump.save();
  } catch (error) {
    console.error(error);
    return massages.internal_server_error;
  }
};

export const getAllPumpDetails = async (req, res) => {
  try {
    return await PumpModel.aggregate([
      {
        $lookup: {
          from: "fuels",
          localField: "fuel",
          foreignField: "_id",
          as: "fuel",
        },
      },
      { $unwind: "$fuel" },
      { $sort: { _id: -1 } },
    ]);
  } catch (error) {
    console.error(error);
    return massages.internal_server_error;
  }
};
