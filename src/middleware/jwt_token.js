import  jwt from 'jsonwebtoken';

export const createToken = async (userData) => {
  const s = 'alokalok';
  const { token, ...signature } = userData;

  try {
    let mytoken = await jwt.sign({ signature }, s, { expiresIn: '1000s' });
    return mytoken;
  } catch (error) {
    return error
  }
};
