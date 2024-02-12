import { massages } from "../helpers/constant.js";
import { PumpModel } from "../model/pump.js";

export const addPumpData = async (req, res) => {
  try {
    const { code, desc, fuel } = req.body;

    const newPump = new PumpModel({
      code,
      desc,
      //   status,
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
      {
        $lookup: {
          from: "duties",
          localField: "_id",
          foreignField: "pump",
          as: "dutie",
        },
      },
      { $unwind: "$dutie" },
      {
        $lookup: {
          from: "pumps", // Assuming "pump" is the correct collection name
          localField: "dutie.pump",
          foreignField: "_id",
          as: "pump",
        },
      },
      { $unwind: "$pump" },
      {
        $lookup: {
          from: "staffs", // Assuming "staff" is the correct collection name
          localField: "dutie.staff",
          foreignField: "_id",
          as: "staff",
        },
      },
      { $unwind: "$staff" },
      {
        $project: {
          _id: 1,
          code: 1,
          desc: 1,
          fuel: "$fuel",
          isActive: 1,
          avl_qty: 1,
          created_at: 1,
          updated_at: 1,
          __v: 1,
          dutie: {
            _id: "$dutie._id",
            current_reading: "$dutie.current_reading",
            isActive: "$dutie.isActive",
            created_at: "$dutie.created_at",
            updated_at: "$dutie.updated_at",
            __v: "$dutie.__v",
            pump: "$pump",
            staff: "$staff",
            fuel: "$dutie.fuel", // Assuming you want to keep the fuel data from the original duty
          },
        },
      },
      { $sort: { _id: -1 } },
    ]);
  } catch (error) {
    console.error(error);
    return massages.internal_server_error;
  }
};


export const isFuelAvailable = async (pumpId, requiredQty) => {
  try {

    console.log(pumpId)
    const where = {
      _id: pumpId
    }
    const pumpData = await PumpModel.findById(where);
    console.log(pumpData)
    return pumpData && pumpData?.avl_qty >= requiredQty;
  } catch (error) {
    console.error("Error checking fuel availability:", error);
    return false;
  }
};


export const incrimentQtyOfPump = async (pump, qty) => {
  const where = {
    _id: pump
  }
  const pumpData = await PumpModel.findById(where)
  pumpData.avl_qty += qty;
  await pumpData.save();
}

export const decrimentQtyOfPump = async (pump, qty) => {
  const where = {
    _id: pump
  }
  const pumpData = await PumpModel.findById(where)
  pumpData.avl_qty -= qty;
  await pumpData.save();
}









