import express from 'express'
import { addUser, login } from '../controller/user.js';

const router = express.Router()


// user routes 

router.post("/user/add", addUser)
router.get("/user/login", login)
// router.get("/user/twofactorauth", twoFActorAuthentication)




export default router; 