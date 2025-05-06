import { User } from '~/type'
import jwt from 'jsonwebtoken'

const generateAuthToken = async (user: User) => {
  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
    rank: user.rank,
    scope: user.scope,
  }
  const secret = process.env.JWT_SECRET as string

  return jwt.sign(payload, secret, {
    expiresIn: '2 Hours'
  })
}

export default {generateAuthToken}
