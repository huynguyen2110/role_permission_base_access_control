import { Request, Response } from 'express'
import authService from '~/services/AuthService'
import tokenService from '~/services/TokenService'

const login = async (req: Request, res: Response) => {
  try {
    const email = req.body.email
    const password = req.body.password
    const user = await authService.checkCredential(email, password)
    const token = await tokenService.generateAuthToken(user)
    res.status(200).send({ token })
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).json({
        message: e.message
      })
    }
  }
}

export default {login}




