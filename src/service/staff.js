import { generateRandom } from "../helpers/common.js";
import { StaffModel } from "../model/staff.js";

export const saveStaff = async (req, res) => {
    const { name, designation, phone, email, address, qualification } =
        req?.body;

    let reg_number = 'REG' + generateRandom()

    const staffDatails = new StaffModel({
        name,
        designation,
        phone,
        email,
        address,
        qualification,
        reg_number
    });

    return await staffDatails.save();

}


export const allStaff = async (req, res) => {
    return await StaffModel.find();
}