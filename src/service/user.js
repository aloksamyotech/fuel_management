import { createOtp, sendEmail } from "../helpers/common.js"
import { TOKEN, massages } from "../helpers/constant.js"
import { compareHash, convertHash } from "../helpers/hash.js"
import { createToken } from "../middleware/jwt_token.js"
import { UserModel } from "../model/user.js"

export const isUserAlreadyExist = async (email) => {
    const user = await UserModel.findOne({ email: email }, { _id: 1 }).lean()
    return !!user
}

export const saveUser = async (userDetails) => {
    const userData = {
        firstname: userDetails.firstname,
        lastname: userDetails.lastname,
        email: userDetails.email,
        phone: userDetails.phone,
        password: userDetails.password,
    }

    const passwordHash = await convertHash(userData?.password)
    userData.password = passwordHash

    const isAlreadyExist = await isUserAlreadyExist(userData.email)

    if (isAlreadyExist) {
        return massages.already_exist
    }

    const userDataToSave = new UserModel(userData)
    return await userDataToSave.save()
}

export const userLogin = async (loginData) => {
    try {
        const { email, password } = loginData
        const userDetails = await UserModel.findOne({ email: email }).lean()
        if (!userDetails) {
            return massages.user_not_found
        }
        const hash = await compareHash(password, userDetails?.password)
        if (!hash) {
            return massages.wrong_credential
        }

        const otp = createOtp()
        await sendEmail("alok@samyotech.com", userDetails?.email, "otp verification", otp)
        await UserModel.updateOne(
            { email: userDetails?.email },
            { $set: { last_otp: otp } }
        );

        return true

    } catch (error) {
        console.log(error)
        return massages.internal_server_error
    }
}

export const twoFactorAuth = async (userData) => {
    const userDetails = await UserModel.findOne({ email: userData?.email }).lean() // asuming that email is correct 

    if (userDetails?.last_otp == userData?.otp) {
        await UserModel.updateOne(
            { email: userDetails?.email },
            { $set: { last_otp: null } }
        );
        const token = await createToken(userDetails)
        await UserModel.updateOne(
            { email: userDetails?.email },
            { $set: { token: token } }
        );
        let { password, __v, last_otp, ...userdata } = userDetails
        userdata[TOKEN] = token
        return userdata
    }else{
        return massages.wrong_credential
    }



}
