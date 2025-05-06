import { Request, Response } from 'express'
import userService from '~/services/UserService'

export const list = async (req: Request, res: Response) => {
  try {
    const users = userService.list()
    res.status(200).send(users)
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).json({
        message: e.message
      })
    }
  }
}

export default { list }