// swaggerDocs.js

import { addDutyDocs, fetchAllDutyDocs } from "./assign_duty.js";
import { fuelTypeDocs } from "./fuel.js";
import { addOrderDocs, getAllOrdersDocs } from "./order.js";
import { addPumpDocs, getPumpDetailsDocs } from "./pump.js";
import { addSupplierDocs, fetchAllSupplierDocs, supplierStatusDocs } from "./supplier.js";
import { addUserDoc, loginDocs, updateUserDocs } from "./user.js";

export const generateSwaggerDocs = () => {
    return {
        openapi: "3.0.0",
        info: {
            title: "Fuel Management System",
            version: "1.0.0",
            description: "API documentation for fuel management system ",
        },
        paths: {

            // user docs 
            "/user/add": addUserDoc,
            "/user/login": loginDocs,
            "/user/update": updateUserDocs,

            // fuel docs 
            "/fuel/details": fuelTypeDocs,

            //supplier docs 
            "/supplier/status": supplierStatusDocs,
            "/supplier/details": addSupplierDocs,
            "/supplier/getalldetails": fetchAllSupplierDocs,

            //order docs 
            "/order/details": addOrderDocs,
            "/order/getAllDetails": getAllOrdersDocs,

            //pump docs 
            "/add/pump": addPumpDocs,
            "/pump/getalldetails": getPumpDetailsDocs,

            //assign duty 
            "/add/duty": addDutyDocs,
            "/duty/get/all": fetchAllDutyDocs,







        }
    };
};
