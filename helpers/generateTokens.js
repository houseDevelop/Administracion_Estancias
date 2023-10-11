import jwt from 'jsonwebtoken'

export const generateToken = (uid)=>{
  const expresIn = 1000*60*15;
  const token = jwt.sign({uid},process.env.JWT_SECRET,{expiresIn});
  return {token, expresIn};
}

export const generateRefreshToken = (uid,res)=>{
  const expresIn = 1000*60*60*24*30;
  const refreshToken = jwt.sign({uid},process.env.JWT_REFRESH,{expresIn,});
  
  res.cookie("refreshToken",refreshToken,{
    httpOnly:true,
    secure:(process.env.MODO==="developer"),
    expires:new Date(Date.now()+expresIn),

  });
}