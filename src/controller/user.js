import { saveUser, userLogin } from "../service/user.js";

export const addUser = async (req, res) => {
  const data = await saveUser(req.body);
  res.send(data);
};

export const login = async (req, res) => {
  const data = await userLogin(req.body);
  res.send(data);
};

export const update = async (req, res) => {
  const data = await userUpdate(req.body);
  res.send(data);
};

// export const twoFActorAuthentication = async (req,res) => {
//     const data =  await twoFactorAuth(req.body)
//     res.send(data)
// }
