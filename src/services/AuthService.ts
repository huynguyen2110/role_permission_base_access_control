import { users } from '~/users'
import { compare } from 'bcrypt-ts'
import { AuthenticatedRequest, User } from '~/type'
import helper from '~/helper'

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

const checkUserPermission = (req: AuthenticatedRequest, user: User) => {
  const scope = user.scope
  const method = req.method;
  const path = req.baseUrl || req.path;

  const pathSplit = path.split('/').filter(Boolean);
  const resource = pathSplit[0];

  const action = helper.methodToActionMap[method];
  if (!action || !resource) {
    return false;
  }

  const permission = `${resource}:${action}`;

  return scope.includes(permission);

}

export default {checkCredential, checkUserExits, checkUserPermission}
