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
    return await PayRollModel.find().sort({ created_at: -1 });
};




