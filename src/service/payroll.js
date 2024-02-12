import { PayRollModel } from "../model/payroll.js";

export const savePayRoll = async (req, res) => {
    const { basic_salary, staff, allowances, tds } = req?.body;

    const payRollDetails = new PayRollModel({
        basic_salary,
        staff,
        allowances,
        tds,
    });

    return await payRollDetails.save();
};

export const allPayRoll = async (req, res) => {
  try {
    return await PayRollModel.aggregate([
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




