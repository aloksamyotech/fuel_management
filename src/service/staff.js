import { generateRandom } from "../helpers/common.js";
import { massages } from "../helpers/constant.js";
import { StaffModel } from "../model/staff.js";

export const saveStaff = async (req, res) => {
  const { name, designation, phone, email, address, qualification, full_name } =
    req?.body;

  const isAlreadyExist = await StaffModel.findOne({
    email: email,
  });

  if (isAlreadyExist) {
    return massages.already_exist;
  }

  let reg_number = "PMS" + generateRandom();
  const staffDatails = new StaffModel({
    name,
    designation,
    phone,
    email,
    address,
    qualification,
    reg_number,
    full_name,
  });

  return await staffDatails.save();
};

export const allStaff = async (req, res) => {
  return await StaffModel.find();
};
