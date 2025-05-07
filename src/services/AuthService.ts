import { users } from '~/users'
import { compare } from 'bcrypt-ts'
import { AuthenticatedRequest } from '~/type'

const checkCredential = async (email: string, password: string) => {
  if (!email || !password) {
    throw new Error('Not enough params')
  }

  const user = users.find((el) => el.email === email)

  if (!user) {
    throw new Error('Invalid login credentials')
  }

  const isPasswordMatch = await compare(password, user.password)
  if (!isPasswordMatch) {
    throw new Error('Invalid login credentials')
  }

  return user
}

const checkUserExits = (email: string) => {
  return users.find((el) => el.email === email)
}

const checkUserPermission = (req: AuthenticatedRequest, screenName: string) => {
  const scope = req.user.scope
  return scope.includes(screenName);
}

export default {checkCredential, checkUserExits, checkUserPermission}
