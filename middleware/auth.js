import jwt from 'jsonwebtoken'
import { UnAuthenticatedError } from "../errors/index.js";

const auth = async (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    throw new UnAuthenticatedError('Authentication Invalid')
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    const testUser = payload.userId === '63d0dec69a251de9e890a3ab'
    req.user = {userId: payload.userId, testUser}
    next();
  } catch (error) {
    throw new UnAuthenticatedError('Authentication Invalid')
  }
}

export default auth