import express from "express";
import { addUser, login } from "../controller/user.js";
import { fuelData } from "../controller/fuel.js";
import { supplier_Code } from "../controller/supplier_status.js";
import { supply, getAllDetails } from "../controller/supplier.js";
import { ordered } from "../controller/order.js";
import { addStaff, fetchAllStaff } from "../controller/staff.js";
import { addPayRoll, fetchAllPayRoll } from "../controller/payroll.js";
const router = express.Router();

// user routes

router.post("/user/add", addUser);
router.get("/user/login", login);
// router.get("/user/twofactorauth", twoFActorAuthentication);

//Fuel routes

router.get("/fuel/details", fuelData);

// Supplier_Status

router.get("/supplier/status", supplier_Code);

// Supplier

router.post("/supplier/details", supply);
router.get("/supplier/getalldetails", getAllDetails);

// Order routes

router.post("/order/details", ordered);


// here are hrms routes 

//staff

router.post("/staff/add",addStaff)
router.get("/staff/get/all",fetchAllStaff)


// payroll

router.post("/payroll/add",addPayRoll)
router.get("/payroll/get/all",fetchAllPayRoll)








export default router;
